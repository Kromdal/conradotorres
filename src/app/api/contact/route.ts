import { NextResponse } from "next/server";

// Minimal schema validation
type ContactPayload = {
	name?: string;
	email?: string;
	message?: string;
};

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as ContactPayload;
		const name = (body.name || "").toString().trim().slice(0, 200);
		const email = (body.email || "").toString().trim().slice(0, 200);
		const message = (body.message || "").toString().trim().slice(0, 5000);

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

			const apiKey = process.env.BREVO_API_KEY;
			const toEmail = process.env.CONTACT_TO_EMAIL;
			const toName = process.env.CONTACT_TO_NAME || "Contact";
			const fromEmail = process.env.CONTACT_FROM_EMAIL || toEmail;
			const fromName = process.env.CONTACT_FROM_NAME || "Contact Form";

			if (!apiKey || !toEmail || !fromEmail) {
				const missing = [
					!apiKey ? "BREVO_API_KEY" : null,
					!toEmail ? "CONTACT_TO_EMAIL" : null,
					!fromEmail ? "CONTACT_FROM_EMAIL" : null,
				].filter(Boolean);
				return NextResponse.json(
					{
						error:
							"Missing server configuration. Please set BREVO_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.",
						missing,
					},
					{ status: 500 }
				);
			}

			const subject = `New contact from ${name}`;
		const htmlContent = `
			<html>
				<body>
					<h2>New contact request</h2>
					<p><strong>Name:</strong> ${escapeHtml(name)}</p>
					<p><strong>Email:</strong> ${escapeHtml(email)}</p>
					<p><strong>Message:</strong></p>
					<div>${nl2br(escapeHtml(message))}</div>
				</body>
			</html>
		`;
			const textContent = `New contact request\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

			// Optional preflight: verify API key quickly to give clearer 401 cause
			if (apiKey) {
				try {
					const acct = await fetch("https://api.brevo.com/v3/account", {
						method: "GET",
						headers: { "api-key": apiKey, accept: "application/json" },
					});
					if (acct.status === 401) {
						return NextResponse.json(
							{ error: "Invalid Brevo API key (401)", details: "Brevo account endpoint unauthorized" },
							{ status: 502 }
						);
					}
				} catch (e) {
					console.warn("Brevo account preflight error", e);
				}
			}

			const response = await fetch(BREVO_API_URL, {
			method: "POST",
			headers: {
				"api-key": apiKey,
				accept: "application/json",
				"content-type": "application/json",
			},
					body: JSON.stringify({
				sender: { name: fromName, email: fromEmail },
				to: [{ name: toName, email: toEmail }],
				subject,
				htmlContent,
						textContent,
				replyTo: { name, email },
				tags: ["contact-form"],
			}),
		});

			if (!response.ok) {
				let details: string | undefined;
				try {
					const data = await response.json();
					details = JSON.stringify(data);
				} catch {
					const text = await safeText(response);
					details = text?.slice(0, 2000);
				}
				console.error("Brevo send error", { status: response.status, details });
			return NextResponse.json(
					{ error: "Failed to send message", status: response.status, details },
					{ status: 502 }
			);
		}
		let accepted: any = null;
		try {
			accepted = await response.json();
		} catch {}
		console.log("Brevo accepted", accepted);
		return NextResponse.json({ ok: true, messageId: accepted?.messageId ?? null });
		} catch (err) {
			console.error("/api/contact error:", err);
			return NextResponse.json(
				{ error: "Unexpected error", details: String(err) },
				{ status: 500 }
			);
		}
}

// Debug helper: GET /api/contact returns env presence for fast checks (no secrets)
export async function GET() {
	const apiKey = process.env.BREVO_API_KEY;
	const toEmail = process.env.CONTACT_TO_EMAIL;
	const fromEmail = process.env.CONTACT_FROM_EMAIL;
	const info = {
		BREVO_API_KEY_present: Boolean(apiKey),
		BREVO_API_KEY_len: apiKey?.length ?? 0,
		CONTACT_TO_EMAIL_present: Boolean(toEmail),
		CONTACT_FROM_EMAIL_present: Boolean(fromEmail),
	};
	console.log("/api/contact GET env check:", info);
	return NextResponse.json(info);
}

function escapeHtml(input: string): string {
	return input
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function nl2br(input: string): string {
	return input.replace(/\n/g, "<br/>");
}

async function safeText(res: Response): Promise<string | undefined> {
	try {
		return await res.text();
	} catch {
		return undefined;
	}
}


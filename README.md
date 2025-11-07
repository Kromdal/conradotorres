# Firebase Studio

This is a Next.js app using the App Router, Tailwind CSS, and JSON-driven content.

## Development

Install dependencies and run the dev server:

- Node.js 18+ recommended
- Install: `npm install`
- Run: `npm run dev`

Environment variables live in `.env.local`. Copy `.env.example` and fill in values, then restart the dev server.

## Contact form (Brevo)

The contact form posts to `/api/contact` and uses Brevo (Sendinblue) SMTP API via REST.

Required env vars:

- `BREVO_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Optional env vars:

- `CONTACT_TO_NAME`
- `CONTACT_FROM_NAME`

Notes:

- `CONTACT_FROM_EMAIL` should be a verified sender in Brevo.
- The API returns `{ ok: true }` on success.
- On failure you'll get HTTP 400 (validation) or 502/500 with a short diagnostic message.

## Content

All static copy is externalized to JSON under `src/data` and rendered via a single template per section.

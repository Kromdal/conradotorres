import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Check, XCircle } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import SubElevenIcon from "@/components/icons/SubelevenIcon";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
      {/* Intro Section */}
  <div className="space-y-6 text-left max-w-6xl">
        <div className="space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Let&apos;s <span className="text-gradient from-foreground to-primary">Build Something Amazing</span> Together
          </h3>
        </div>
        <div className="space-y-3">
          <p className="text-base text-foreground/90 leading-relaxed max-w-6xl">
            I&apos;m always excited to discuss <span className="text-gradient from-foreground to-primary font-medium">new projects</span>, <span className="text-gradient from-foreground to-primary font-medium">collaborations</span>, or creative ideas.
          </p>
          <p className="text-sm text-foreground/70">
            Fill out the form and I&apos;ll get back to you within 24 hours.
          </p>
          {/* Social Links */}
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 uniform-hover"
              >
                <a
                  href="https://github.com/Kromdal/conradotorres"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 uniform-hover"
              >
                <a
                  href="https://www.linkedin.com/in/ctlopez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 uniform-hover"
              >
                <a
                  href="https://www.subeleven.es/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subeleven"
                >
                  <SubElevenIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border/50 shadow-sm">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground text-left">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="mt-2 block w-full rounded-md border border-border bg-background p-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground text-left">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="mt-2 block w-full rounded-md border border-border bg-background p-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground text-left">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            className="mt-2 block w-full rounded-md border border-border bg-background p-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            rows={5}
          />
        </div>

        <Button
          type="submit"
          variant="default"
          size="default"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <Alert className="mt-4">
            <Check className="h-4 w-4 text-green-600" />
            <div>
              <AlertTitle>Message sent successfully!</AlertTitle>
            </div>
          </Alert>
        )}

        {status === "error" && (
          <Alert variant="destructive" className="mt-4">
            <XCircle className="h-4 w-4" />
            <div>
              <AlertTitle>Something went wrong. Try again or write to <a href="mailto:hello@subeleven.es" className="text-primary">hello@subeleven.es</a></AlertTitle>
            </div>
          </Alert>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
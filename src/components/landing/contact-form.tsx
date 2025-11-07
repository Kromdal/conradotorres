import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Check, XCircle } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import SubElevenIcon from "@/components/icons/SubelevenIcon";


// Import JSON statically
// @ts-ignore
import contactFormData from "@/data/sections/contact-form.json";
const {
  introTitle,
  introDescription,
  introNote,
  socialLinks,
  formFields,
  submitLabel,
  sendingLabel,
  successMessage,
  errorMessage,
  errorEmail
} = contactFormData as any;

const ContactForm = () => {

  const [formData, setFormData] = useState(() => {
    const initial: Record<string, string> = {};
    formFields.forEach((field: any) => {
      initial[field.name] = "";
    });
    return initial;
  });
  const [status, setStatus] = useState("");
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorDetails(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData((prev) => {
          const reset: Record<string, string> = {};
          Object.keys(prev).forEach((key) => { reset[key] = ""; });
          return reset;
        });
      } else {
        try {
          const data = await response.json();
          setErrorDetails(data?.error ? `${data.error}${data.details ? `: ${data.details}` : ""}` : "Unexpected error");
        } catch {
          setErrorDetails("Unexpected server error");
        }
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorDetails("Network error");
    }
  };

  // Icon mapping
  const iconMap: Record<string, React.ElementType> = {
    Github,
    Linkedin,
    SubElevenIcon
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
      {/* Intro Section */}
      <div className="space-y-6 text-left max-w-6xl">
        <div className="space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            {introTitle}
          </h3>
        </div>
        <div className="space-y-3">
          <p className="text-base text-foreground/90 leading-relaxed max-w-6xl">
            {introDescription}
          </p>
          <p className="text-sm text-foreground/70">
            {introNote}
          </p>
          {/* Social Links */}
          <div className="flex items-center justify-center gap-2">
            {socialLinks.map((link: any, idx: number) => {
              const Icon = iconMap[link.icon];
              return (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-10 h-10 uniform-hover"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border/50 shadow-sm">
        {formFields.map((field: any) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-foreground text-left">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                placeholder={field.placeholder}
                className="mt-2 block w-full rounded-md border border-border bg-background p-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                rows={field.rows || 5}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                placeholder={field.placeholder}
                className="mt-2 block w-full rounded-md border border-border bg-background p-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
            )}
          </div>
        ))}
        <Button
          type="submit"
          variant="default"
          size="default"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? sendingLabel : submitLabel}
        </Button>
        {status === "success" && (
          <Alert className="mt-4">
            <Check className="h-4 w-4 text-green-600" />
            <div>
              <AlertTitle>{successMessage}</AlertTitle>
            </div>
          </Alert>
        )}
        {status === "error" && (
          <Alert variant="destructive" className="mt-4">
            <XCircle className="h-4 w-4" />
            <div>
              <AlertTitle>{errorMessage} <a href={`mailto:${errorEmail}`} className="text-primary">{errorEmail}</a></AlertTitle>
              {errorDetails && (
                <AlertDescription className="mt-2 text-xs text-foreground/70 break-words">
                  {errorDetails}
                </AlertDescription>
              )}
            </div>
          </Alert>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Let&apos;s build something together.</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m currently available for new freelance projects. Let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
            <Button asChild size="lg">
              <a href="mailto:hello@subeleven.es">hello@subeleven.es</a>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { ScrollFadeIn } from "@/components/animations"

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 border-t bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollFadeIn className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">Let&apos;s build something together.</h2>
            <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed">
              I&apos;m currently available for new freelance projects. Let&apos;s talk.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 min-[400px]:flex-row">
            <Button asChild size="lg" className="font-medium">
              <a href="mailto:hello@subeleven.es">
                hello@subeleven.es
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import { Button } from "@/components/ui/button";
import { ScrollFadeIn } from "@/components/animations";
import ContactForm from "./contact-form";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full pt-5 md:pt-7 lg:pt-10 mt-15 md:mt-20 lg:mt-28 pb-20 md:pb-28 lg:pb-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />

      <div className="container px-4 md:px-6 relative z-10">
        <ScrollFadeIn className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                <span className="text-gradient from-foreground to-primary">
                  Contact
                </span>
              </h2>
            </div>
            <p className="text-foreground/70 text-xl leading-relaxed max-w-6xl mx-auto">
              I&apos;m currently available for new projects and collaborations.
              {" "}
              Whether you need a complete web application or want to discuss an idea, I&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="pt-12 border-t border-border/50">
            <ContactForm />
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { ScrollFadeIn } from "@/components/animations"

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollFadeIn className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                <span className="text-gradient from-foreground to-primary">
                  Let&apos;s build something amazing together
                </span>
              </h2>
            </div>
            <p className="text-foreground/70 text-xl leading-relaxed max-w-2xl mx-auto">
              I&apos;m currently available for new projects and collaborations. 
              Whether you need a complete web application or want to discuss an idea, I&apos;d love to hear from you.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="uniform-hover font-semibold px-8 py-6 text-lg"
              >
                <a href="mailto:hello@subeleven.es">
                  hello@subeleven.es
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="uniform-hover font-semibold px-8 py-6 text-lg"
              >
                Schedule a Call
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <Button 
                variant="ghost" 
                size="lg" 
                asChild 
                className="rounded-full w-14 h-14 uniform-hover"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                asChild 
                className="rounded-full w-14 h-14 uniform-hover"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Stats or additional info */}
          <div className="pt-12 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default ContactSection;

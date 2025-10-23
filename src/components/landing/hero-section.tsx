"use client";

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { ScrollFadeIn } from "@/components/animations"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"


// Import JSON statically
// @ts-ignore
import heroData from "@/data/sections/hero.json";
const { title, subtitle, description, cta } = heroData;

const HeroSection = () => {

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/95 to-background" />
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollFadeIn className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline">
                <span className="text-gradient from-foreground to-primary">
                  {title}
                </span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-semibold">
                  {subtitle}
                </h2>
                <div className="w-16 h-0.5 bg-primary mx-auto rounded-full" />
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-6xl mx-auto">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              asChild
              size="default"
              className="cta-primary font-medium px-6"
            >
              <a href={cta.link}>{cta.label} <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

export default HeroSection

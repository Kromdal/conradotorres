"use client";

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { ScrollFadeIn } from "@/components/animations"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

const HeroSection = () => {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/95 to-background" />
      
      <div className="container px-4 md:px-6 relative z-10">
  <ScrollFadeIn className="max-w-6xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline">
                <span className="text-gradient from-foreground to-primary">
                  Conrado Torres
                </span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-semibold">
                  Frontend Developer & Product Designer
                </h2>
                <div className="w-16 h-0.5 bg-primary mx-auto rounded-full" />
              </div>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-6xl mx-auto">
              I build high-performance web applications with a focus on user experience and clean architecture. 
              Specialized in React, TypeScript, and modern development ecosystems.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="default" 
              className="cta-primary font-medium px-6"
            >
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="default" 
              asChild 
              className="uniform-hover font-medium px-6"
            >
              <a href="/conrado-torres-cv.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Tech Stack Preview */}
          <div className="pt-12 space-y-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Technologies I Love
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium bg-card border border-border rounded-full text-foreground/80 uniform-hover"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}

export default HeroSection

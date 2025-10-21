"use client";

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { ScrollFadeIn } from "@/components/animations"

const HeroSection = () => {
  return (
    <section id="home" className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <ScrollFadeIn className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline text-foreground">
              Conrado Torres
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Frontend Developer & Product Designer
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
              I build high-performance web applications, bridging the gap between product design and clean code. Specialized in React, TypeScript, and modern development tools.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="font-medium">
              <a href="#projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="font-medium">
              <a href="/conrado-torres-cv.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}

export default HeroSection

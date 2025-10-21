import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="home" className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
              Conrado Torres
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Frontend Developer & Product Designer
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I build high-performance web applications, bridging the gap between product design and clean code. Specialized in React, TypeScript, and AI-powered development tools.
            </p>
          </div>
          <div className="space-x-4 pt-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-700">
            <Button asChild size="lg">
              <a href="#projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/conrado-torres-cv.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

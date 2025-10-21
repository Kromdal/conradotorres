import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/50 glass">
      <div className="container flex items-center justify-between h-20 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Conrado Torres. Built with ❤️ and modern tech.
          </p>
        </div>
        <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="w-8 h-8 uniform-hover"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="w-8 h-8 uniform-hover"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
      </div>
    </footer>
  )
}

export default Footer

"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Image from "next/image"
import Link from "next/link"
import { ScrollFadeIn, ScrollStagger, ScrollStaggerItem, HoverLift, HoverScale, AnimatedImage } from "@/components/animations"

const projects = [
  {
    title: "Real-Time Financial Analytics Platform (SaaS)",
    description: "As the sole frontend developer, I built a complex dashboard visualizing millions of daily banking transactions, focusing on high performance under heavy data load.",
    tags: ["React", "TypeScript", "Data Visualization", "SaaS", "(Confidential)"],
    image: PlaceHolderImages.find(p => p.id === 'project-saas'),
  },
  {
    title: "[Your Agency Name] (Founder)",
    description: "My personal project managing the full lifecycle for clients, from UX/UI design in Figma and Lovable to development and SEO optimization.",
    tags: ["React", "Vite", "Lovable", "SEO", "Firebase"],
    image: PlaceHolderImages.find(p => p.id === 'project-agency'),
  },
  {
    title: "My Personal Portfolio (Open Source)",
    description: "This site itself. Built with React, Vite, and Framer Motion, optimized for a 100 Lighthouse score. The code is clean and available on GitHub.",
    tags: ["React", "Vite", "Framer Motion", "Open Source"],
    image: PlaceHolderImages.find(p => p.id === 'project-portfolio'),
    link: {
      href: "https://github.com",
      label: "View Source Code",
    },
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollFadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground text-lg leading-relaxed">
              A selection of projects that showcase my skills in frontend development and product design.
            </p>
          </div>
        </ScrollFadeIn>
        
        <ScrollStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <ScrollStaggerItem key={index}>
              <Card className="flex flex-col h-full group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  {project.image && (
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6 flex-1">
                  <CardTitle className="font-bold text-lg mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button variant="outline" asChild className="w-full">
                      <Link href={project.link.href} target="_blank" rel="noopener noreferrer">
                        {project.link.label}
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}

export default ProjectsSection

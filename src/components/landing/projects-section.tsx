"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ScrollFadeIn, ScrollStagger, ScrollStaggerItem } from "@/components/animations"
import { getAllProjects } from "@/lib/projects-data"
import { convertProjectsToPreview } from "@/lib/utils/project-utils"
import { ProjectPreview } from "@/lib/types/project"

// Obtener los proyectos y convertirlos a vista previa
const projectsData = getAllProjects();
const projects: ProjectPreview[] = convertProjectsToPreview(projectsData);

const ProjectsSection = () => {
  return (
  <section id="projects" className="w-full pt-5 md:pt-7 lg:pt-10 mt-15 md:mt-20 lg:mt-28 pb-0 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollFadeIn className="text-center mb-16">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              <span className="text-gradient from-foreground to-primary">
                Recent Projects
              </span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              A curated selection of projects that demonstrate my expertise in modern web development, 
              from complex SaaS platforms to optimized user experiences.
            </p>
          </div>
        </ScrollFadeIn>
        
        <ScrollStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <ScrollStaggerItem key={index}>
              <Card className="flex flex-col h-full group overflow-hidden border border-border/50 shadow-soft hover:shadow-medium card-uniform bg-card">
                <CardHeader className="p-0">
                  {project.image && (
                    <div className="aspect-video relative overflow-hidden">
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
                  <CardTitle className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button 
                      variant="outline" 
                      asChild 
                      size="default"
                      className="w-full uniform-hover font-medium"
                    >
                      <Link 
                        href={project.link.href} 
                        target={project.link.href.startsWith('http') ? "_blank" : undefined}
                        rel={project.link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
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

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/projects-data";
import { convertProjectsToPreview } from "@/lib/utils/project-utils";
// @ts-ignore
import projectsSection from "@/data/sections/projects.json";

export const metadata = {
  title: "Projects",
  description: projectsSection.description,
};

export default function ProjectsPage() {
  const projects = convertProjectsToPreview(getAllProjects());

  return (
    <section className="w-full pt-5 md:pt-7 lg:pt-10 mt-5 md:mt-10 lg:mt-18 pb-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="space-y-6 max-w-6xl mx-auto">
            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                {projectsSection.title}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              <span className="text-gradient from-foreground to-primary">
                {projectsSection.subtitle}
              </span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed">
              {projectsSection.description}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col h-full group overflow-hidden border border-border/50 shadow-soft hover:shadow-medium card-uniform bg-card">
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
          ))}
        </div>
      </div>
    </section>
  );
}

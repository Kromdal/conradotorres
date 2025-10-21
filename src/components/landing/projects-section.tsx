import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Image from "next/image"
import Link from "next/link"

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
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects that showcase my skills in frontend development and product design.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                {project.image && (
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      data-ai-hint={project.image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="font-bold">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                {project.link && (
                  <Button variant="outline" asChild>
                    <Link href={project.link.href} target="_blank" rel="noopener noreferrer">
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
  )
}

export default ProjectsSection

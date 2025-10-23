import { notFound } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/projects-data";
import { Metadata } from 'next';
import { Project } from '@/lib/types/project';
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project not found | Conrado Torres',
    };
  }

  return {
    title: `${project.title} | Conrado Torres - Desarrollador Frontend`,
    description: project.shortDescription,
    keywords: [
      'web development', 
      'frontend developer', 
      'React', 
      'Next.js', 
      'TypeScript',
      ...project.technologies
    ],
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: 'website',
      images: [
        {
          url: project.featuredImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: [project.featuredImage],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20"> {/* Add padding to account for fixed header */}
        {/* Enhanced Header Navigation */}
        <div className="container py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            asChild
            className="uniform-hover group"
          >
            <Link href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
          
          {/* Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-sm text-foreground/60">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-foreground/90">{project.title}</span>
          </div>
        </div>
      </div>
  </div>

      {/* Enhanced Hero Section */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline leading-tight">
                <span className="text-gradient from-foreground to-primary">
                  {project.title}
                </span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-6xl">
                {project.shortDescription}
              </p>
              
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button asChild className="cta-primary group">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    View Project
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="uniform-hover group">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Enhanced Featured Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50 shadow-medium hover:shadow-large transition-all duration-500">
                <Image
                  src={project.featuredImage}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
          </div>
        </section>

      {/* Technologies Section */}
      <section className="container pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/20 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-sm font-medium bg-muted hover:bg-muted/80 text-foreground border-0 py-2 px-3 transition-colors rounded-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
          </div>
        </section>

      {/* Project Details */}
      <section className="container pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/20 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 pb-3 border-b-2 border-primary/20 text-gradient from-foreground to-primary hover:border-primary/40 transition-colors">Description</h3>
              <p className="text-foreground/80 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {project.challenges && (
              <div>
                <h3 className="text-xl font-semibold mb-4 pb-3 border-b-2 border-primary/20 text-gradient from-foreground to-primary hover:border-primary/40 transition-colors">Challenges & Solutions</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.results && (
              <div>
                <h3 className="text-xl font-semibold mb-4 pb-3 border-b-2 border-primary/20 text-gradient from-foreground to-primary hover:border-primary/40 transition-colors">Results Achieved</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
          </div>
        </section>

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="container pb-16">
          <div className="max-w-6xl mx-auto">
            <Card className="border border-border/20 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Project Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((image: { url: string; alt: string }, index: number) => (
                  <div key={index} className="aspect-video relative overflow-hidden rounded-lg border border-border/20">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/50 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Like this project?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-6xl mx-auto">
              At Subeleven, we create digital solutions that drive business growth. 
              Let's talk about your next project!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="cta-primary">
                <Link href="/#contact">
                  Start My Project
                </Link>
              </Button>
              <Button variant="outline" asChild className="uniform-hover">
                <Link href="https://subeleven.es" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Subeleven
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default ProjectPage;
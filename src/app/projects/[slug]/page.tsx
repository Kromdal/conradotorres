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
      {/* Header Navigation */}
      <div className="container py-8">
        <Button
          variant="ghost"
          asChild
          className="mb-8 uniform-hover"
        >
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50">
                    Featured Project
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
                <span className="text-gradient from-foreground to-primary">
                  {project.title}
                </span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Project Meta Info */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Clock className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Users className="h-4 w-4" />
                <span>{project.teamSize}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button asChild className="cta-primary">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="uniform-hover">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="aspect-video relative overflow-hidden rounded-lg border border-border/50 shadow-medium">
              <Image
                src={project.featuredImage}
                alt={`Captura de pantalla de ${project.title}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container pb-16">
        <Card className="border border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Detailed Description */}
      <section className="container pb-16">
        <Card className="border border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Project Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-gray max-w-none">
              <p className="text-lg leading-relaxed text-foreground/80">
                {project.fullDescription}
              </p>
            </div>

            {project.challenges && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Challenges & Solutions</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.results && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Results Achieved</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="container pb-16">
          <Card className="border border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Project Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.map((image: { url: string; alt: string }, index: number) => (
                  <div key={index} className="aspect-video relative overflow-hidden rounded-lg border border-border/30">
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
        </section>
      )}

      {/* CTA Section */}
      <section className="container pb-20">
        <Card className="border border-border/50 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Like this project?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
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
      </section>
    </div>
  );
};

export default ProjectPage;
import { Project } from "@/lib/types/project";
import { ProjectPreview } from "@/lib/types/project";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function convertProjectToPreview(project: Project): ProjectPreview {
  // Para Subeleven, mostrar el enlace externo en lugar del interno
  const isSubeleven = project.slug === 'subeleven-agency';
  
  return {
    slug: project.slug,
    title: project.title,
    description: project.shortDescription,
    tags: project.technologies.slice(0, 5), // Limitar a 5 tags para la vista previa
    image: {
      id: project.slug,
      imageUrl: project.featuredImage,
      description: `Captura de ${project.title}`
    },
    link: isSubeleven && project.liveUrl ? {
      href: project.liveUrl,
      label: "Visitar Subeleven",
    } : {
      href: `/projects/${project.slug}`,
      label: "Ver Proyecto Completo",
    },
  };
}

export function convertProjectsToPreview(projects: Project[]): ProjectPreview[] {
  return projects.map(convertProjectToPreview);
}
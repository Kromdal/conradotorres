import { Project } from "@/lib/types/project";
import { getAllProjectsFromJson, getProjectBySlugFromJson, getFeaturedProjectsFromJson } from "@/lib/json-projects-loader";

export function getAllProjects(): Project[] {
  return getAllProjectsFromJson();
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjectBySlugFromJson(slug);
}

export function getFeaturedProjects(): Project[] {
  return getFeaturedProjectsFromJson();
}
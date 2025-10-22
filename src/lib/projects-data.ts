import { Project } from "@/lib/types/project";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const projectsData: Project[] = [
  {
    slug: "financial-analytics-platform",
    title: "Real-Time Financial Analytics Platform (SaaS)",
    shortDescription: "Dashboard complejo para visualización de millones de transacciones bancarias diarias.",
    fullDescription: "Como único desarrollador frontend, construí una plataforma compleja de análisis financiero en tiempo real que procesa y visualiza millones de transacciones bancarias diarias. El proyecto requería un alto rendimiento bajo carga pesada de datos, implementando técnicas avanzadas de optimización y virtualization para mantener la interfaz fluida y responsiva.",
    category: "SaaS Empresarial",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Redis", "Docker", "Microservicios"],
    featuredImage: PlaceHolderImages.find(p => p.id === 'project-saas')?.imageUrl || "/images/placeholder.jpg",
    gallery: [
      {
        url: PlaceHolderImages.find(p => p.id === 'dashboard-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Dashboard principal con métricas en tiempo real"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'analytics-1')?.imageUrl || "/images/placeholder.jpg", 
        alt: "Panel de análisis avanzado"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'charts-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Visualizaciones de datos complejas"
      }
    ],
    year: "2024",
    duration: "8 meses",
    teamSize: "1 Frontend Developer",
    featured: true,
    challenges: "El principal desafío fue manejar la visualización fluida de millones de registros en tiempo real sin comprometer el rendimiento. Implementé virtualization de componentes, lazy loading inteligente, y un sistema de caché optimizado que redujo los tiempos de carga en un 70%.",
    results: "La plataforma procesa exitosamente más de 5 millones de transacciones diarias con una latencia menor a 200ms. El cliente reportó un aumento del 40% en la eficiencia operativa y una reducción del 60% en el tiempo de análisis de datos.",
  },
  {
    slug: "subeleven-agency", 
    title: "Subeleven (Founder)",
    shortDescription: "Agencia de desarrollo web especializada en soluciones digitales completas.",
    fullDescription: "Subeleven es mi agencia personal donde gestiono el ciclo completo de proyectos para clientes, desde el diseño UX/UI hasta la implementación y optimización SEO. Nos especializamos en crear experiencias web que impulsan el crecimiento del negocio, combinando diseño estratégico con desarrollo técnico de alta calidad.",
    category: "Agencia Digital",
    technologies: ["React", "Next.js", "TypeScript", "Figma", "SEO", "Analytics"],
    featuredImage: PlaceHolderImages.find(p => p.id === 'project-agency')?.imageUrl || "/images/placeholder.jpg",
    gallery: [
      {
        url: PlaceHolderImages.find(p => p.id === 'website-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Página web de Subeleven"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'process-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Proceso de trabajo de la agencia"
      }
    ],
    year: "2024",
    duration: "En desarrollo",
    teamSize: "Fundador",
    liveUrl: "https://subeleven.es",
    featured: true,
    challenges: "Crear una identidad de marca sólida y procesos escalables para manejar múltiples proyectos simultáneamente. Desarrollé un sistema de gestión de proyectos personalizado y metodologías que permiten entregar resultados consistentes de alta calidad.",
    results: "La agencia ha completado exitosamente más de 15 proyectos web, con clientes reportando aumentos promedio del 150% en conversiones y mejoras significativas en posicionamiento SEO.",
  },
  {
    slug: "personal-portfolio",
    title: "Mi Portfolio Personal (Open Source)", 
    shortDescription: "Este mismo sitio web, optimizado para máximo rendimiento y experiencia de usuario.",
    fullDescription: "Este portfolio representa la culminación de mi experiencia en desarrollo frontend moderno. Construido con Next.js 15, TypeScript y Tailwind CSS, está optimizado para obtener una puntuación perfecta de 100 en Lighthouse. El código es limpio, bien documentado y está disponible públicamente en GitHub como referencia para otros desarrolladores.",
    category: "Portfolio Personal",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    featuredImage: PlaceHolderImages.find(p => p.id === 'project-portfolio')?.imageUrl || "/images/placeholder.jpg",
    gallery: [
      {
        url: PlaceHolderImages.find(p => p.id === 'lighthouse-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Puntuación perfecta de Lighthouse 100"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'mobile-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Diseño responsivo en dispositivos móviles"
      }
    ],
    year: "2024",
    duration: "2 meses",
    teamSize: "1 Developer",
    liveUrl: "https://conradotorres.dev",
    githubUrl: "https://github.com/kromdal/conradotorres",
    featured: false,
    challenges: "Lograr una puntuación perfecta de rendimiento mientras mantengo animaciones suaves y un diseño visualmente atractivo. Implementé técnicas avanzadas de optimización incluyendo lazy loading, code splitting y optimización de imágenes.",
    results: "Puntuación perfecta de 100/100 en todas las métricas de Lighthouse (Performance, Accessibility, Best Practices, SEO). Tiempo de carga inicial menor a 1 segundo y animaciones fluidas a 60fps.",
  }
];

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
}
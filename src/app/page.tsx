import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import HeroSection from '@/components/landing/hero-section';
import AboutSection from '@/components/landing/about-section';
import ProjectsSection from '@/components/landing/projects-section';
import ToolkitSection from '@/components/landing/toolkit-section';
import ContactSection from '@/components/landing/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ToolkitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

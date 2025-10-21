"use client";

export const useSmoothScroll = () => {
  const easeInOutQuart = (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerHeight = 80; // Altura del header más margen
    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop - headerHeight;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.8, 1500); // Duración más lenta
    
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeInOutQuart(progress);
      const currentPosition = startPosition + (distance * ease);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = Math.min(startPosition * 0.8, 1200);
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeInOutQuart(progress);
      const currentPosition = startPosition * (1 - ease);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return { scrollToSection, scrollToTop };
};
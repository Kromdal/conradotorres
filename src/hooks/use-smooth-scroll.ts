"use client";

import { useAnimation } from "framer-motion";

export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerHeight = 64; // Altura del header
    const targetPosition = element.offsetTop - headerHeight;

    // Usar scrollTo con behavior smooth nativo primero
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return { scrollToSection, scrollToTop };
};
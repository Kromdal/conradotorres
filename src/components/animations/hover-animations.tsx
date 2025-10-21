"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export const HoverScale = ({ 
  children, 
  className, 
  scale = 1.05, 
  duration = 0.2 
}: HoverScaleProps) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.95 }}
      transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  lift?: number;
  duration?: number;
}

export const HoverLift = ({ 
  children, 
  className, 
  lift = -8, 
  duration = 0.3 
}: HoverLiftProps) => {
  return (
    <motion.div
      whileHover={{ y: lift }}
      transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface HoverGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const HoverGlow = ({ 
  children, 
  className, 
  glowColor = "rgba(59, 130, 246, 0.5)" 
}: HoverGlowProps) => {
  return (
    <motion.div
      whileHover={{
        boxShadow: `0 20px 40px ${glowColor}`,
        y: -2,
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export const Floating = ({ 
  children, 
  className, 
  amplitude = 10, 
  duration = 3 
}: FloatingProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic = ({ 
  children, 
  className, 
  strength = 20 
}: MagneticProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={(event: React.MouseEvent) => {
        const { currentTarget } = event;
        const rect = currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setMousePosition({
          x: x * (strength / 100),
          y: y * (strength / 100),
        });
      }}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface PulseProps {
  children: ReactNode;
  className?: string;
  scale?: [number, number];
  duration?: number;
}

export const Pulse = ({ 
  children, 
  className, 
  scale = [1, 1.02], 
  duration = 2 
}: PulseProps) => {
  return (
    <motion.div
      animate={{
        scale: scale,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
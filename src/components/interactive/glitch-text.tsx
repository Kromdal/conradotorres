"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  
  const createGlitch = () => {
    setIsGlitching(true);
    
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setGlitchText(prevText => 
        prevText
          .split('')
          .map((char, index) => {
            if (char === ' ') return char;
            if (Math.random() < 0.3) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('')
      );
      
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setGlitchText(text);
        setIsGlitching(false);
      }
    }, 50);
  };

  useEffect(() => {
    const triggerGlitch = () => {
      if (!isGlitching && Math.random() < 0.05) { // Menos frecuente
        createGlitch();
      }
    };

    const interval = setInterval(triggerGlitch, 5000); // Cada 5 segundos en lugar de 3
    return () => clearInterval(interval);
  }, [isGlitching, text]);

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onClick={createGlitch}
      onMouseEnter={() => Math.random() < 0.15 && createGlitch()} // Menos probabilidad en hover
    >
      {/* Main text */}
      <motion.span
        className="relative z-10 block"
        animate={{
          x: isGlitching ? [0, -2, 1, -1, 0] : 0,
          textShadow: isGlitching 
            ? [
                '2px 0 #ff0000, -2px 0 #00ffff',
                '-2px 0 #ff0000, 2px 0 #00ffff',
                '2px 0 #ff0000, -2px 0 #00ffff'
              ]
            : 'none'
        }}
        transition={{
          duration: 0.1,
          repeat: isGlitching ? 3 : 0,
        }}
      >
        {glitchText}
      </motion.span>

      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-red-500 opacity-70"
        animate={{
          x: isGlitching ? [-1, 1, -1] : 0,
          opacity: isGlitching ? [0, 0.7, 0] : 0,
        }}
        transition={{
          duration: 0.1,
          repeat: isGlitching ? 2 : 0,
        }}
        style={{
          clipPath: isGlitching ? 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' : 'none',
        }}
      >
        {text}
      </motion.span>

      <motion.span
        className="absolute inset-0 text-cyan-400 opacity-70"
        animate={{
          x: isGlitching ? [1, -1, 1] : 0,
          opacity: isGlitching ? [0, 0.7, 0] : 0,
        }}
        transition={{
          duration: 0.1,
          repeat: isGlitching ? 2 : 0,
          delay: 0.05,
        }}
        style={{
          clipPath: isGlitching ? 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' : 'none',
        }}
      >
        {text}
      </motion.span>

      {/* Scan lines */}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          }}
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 0.3,
            repeat: 2,
          }}
        />
      )}
    </div>
  );
};
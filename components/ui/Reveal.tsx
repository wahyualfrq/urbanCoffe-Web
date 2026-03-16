"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "fade-in";
  delay?: number;
  threshold?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  animation = "fade-in-up", 
  delay = 0, 
  threshold = 0.1,
  className = "" 
}: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on whether element is in view
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold,
        // Optional: add rootMargin to trigger animation slightly before it enters view
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      aria-hidden={!isVisible}
      className={`${isVisible ? `animate-${animation}` : "opacity-0"} ${className} transition-all duration-300`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
};

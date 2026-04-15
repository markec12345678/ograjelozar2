'use client';

import { useState, useEffect, useRef } from 'react';

interface UseFadeInOptions {
  delay?: number;
  threshold?: number;
}

interface FadeInResult {
  className: string;
  isVisible: boolean;
}

export function useFadeIn({ delay = 0, threshold = 0.1 }: UseFadeInOptions = {}): FadeInResult {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animationClass = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8';

  return { 
    className: `transition-all duration-700 ease-out ${animationClass}`,
    isVisible 
  };
}

export default useFadeIn;
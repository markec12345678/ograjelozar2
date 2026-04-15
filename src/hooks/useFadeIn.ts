'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseFadeInOptions {
  delay?: number;
  threshold?: number;
}

interface FadeInResult {
  className: string;
  isVisible: boolean;
  ref: (node: HTMLElement | null) => void;
}

export function useFadeIn({ delay = 0, threshold = 0.1 }: UseFadeInOptions = {}): FadeInResult {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);

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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animationClass = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8';

  return { 
    className: `transition-all duration-700 ease-out ${animationClass}`,
    isVisible,
    ref
  };
}

export default useFadeIn;

export function useFadeInStagger(index: number, baseDelay: number = 100) {
  return useFadeIn({ delay: index * baseDelay });
}
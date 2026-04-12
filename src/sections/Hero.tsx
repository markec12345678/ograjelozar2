'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface HeroConfig {
  tagline: string;
  title: string;
  subtitle: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

const heroConfig: HeroConfig = {
  tagline: "WPC OGRAJE IN TERASE",
  title: "Naredite Vaš Dom\nČudovit z WPC\nRešitvami",
  subtitle: "Trajne, elegantne in brez vzdrževanja. Za ograje, terase in balkone, ki trajajo generacije.",
  ctaPrimaryText: "Brezplačna Ponudba",
  ctaPrimaryTarget: "#contact",
  ctaSecondaryText: "Oglejte si Dela",
  ctaSecondaryTarget: "#gallery",
  backgroundImage: "/images/hero-wpc.jpg",
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('${heroConfig.backgroundImage}')` }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-10 w-40 h-40 border border-white/20 rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-wpc/20 rounded-full blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Tagline with animation */}
          <div className={`mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 bg-wpc/30 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-wpc rounded-full animate-pulse" />
              {heroConfig.tagline}
            </span>
          </div>

          {/* Main title */}
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {heroConfig.title.split('\n').map((line, index) => (
              <span key={index} className="block">
                <span className="relative">
                  {line}
                  {index === 1 && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-wpc rounded-full" />
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-white/80 mb-10 max-w-2xl transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {heroConfig.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              href={heroConfig.ctaPrimaryTarget}
              className="group relative inline-flex items-center justify-center gap-3 bg-wpc hover:bg-wpc/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-wpc/30 hover:-translate-y-1"
            >
              <span>{heroConfig.ctaPrimaryText}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={heroConfig.ctaSecondaryTarget}
              className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{heroConfig.ctaSecondaryText}</span>
            </Link>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">25+</div>
              <div className="text-white/60 text-sm mt-1">Let izkušenj</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm mt-1">Projektov</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-white/60 text-sm mt-1">Zadovoljnih strank</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
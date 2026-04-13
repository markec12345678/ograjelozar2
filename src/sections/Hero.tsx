'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Circle } from 'lucide-react';

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
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      {/* Background image with Next.js optimization */}
      <div className="absolute inset-0 scale-105">
        <Image
          src={heroConfig.backgroundImage}
          alt="WPC ograje in terase - elegantna rešitev za vaš dom"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-10 w-40 h-40 border border-white/20 rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-wpc/20 rounded-full blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Tagline with animation */}
          <div className="mb-6 opacity-100 translate-y-0 transition-all duration-700">
            <span className="inline-flex items-center gap-2 bg-wpc/30 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
              <Circle className="w-2 h-2 bg-wpc rounded-full animate-pulse fill-wpc" />
              {heroConfig.tagline}
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight opacity-100 translate-y-0 transition-all duration-700 delay-100">
            {heroConfig.title.split('\n').map((line, index) => (
              <span key={index} className="block">
                <span className="relative">
                  {line}
                  {index === 1 && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-wpc rounded-full" aria-hidden="true" />
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl opacity-100 translate-y-0 transition-all duration-700 delay-200">
            {heroConfig.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-100 translate-y-0 transition-all duration-700 delay-300">
            <Link
              href={heroConfig.ctaPrimaryTarget}
              className="group relative inline-flex items-center justify-center gap-3 bg-wpc hover:bg-wpc/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-wpc/30 hover:-translate-y-1"
            >
              <span>{heroConfig.ctaPrimaryText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={heroConfig.ctaSecondaryTarget}
              className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              aria-label={heroConfig.ctaSecondaryText}
            >
              <Play className="w-5 h-5" />
              <span>{heroConfig.ctaSecondaryText}</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 opacity-100 translate-y-0 transition-all duration-700 delay-500">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

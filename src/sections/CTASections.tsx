'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'primary' | 'secondary';
}

const ctaData: CTAProps[] = [
  {
    title: "Potrebujete svetovanje?",
    subtitle: "Pridemo na ogled vašega prostora in vam svetujemo brezplačno.",
    ctaText: "Naročite Ogled",
    ctaLink: "#contact",
    variant: 'primary'
  },
  {
    title: "Oglejte si naša dela",
    subtitle: "Sto realiziranih projektov po vsej Sloveniji - poglejte inspiracijo.",
    ctaText: "Galerija Projektov",
    ctaLink: "#gallery",
    variant: 'secondary'
  }
];

export default function CTASections() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-12 space-y-12">
      {ctaData.map((cta, index) => (
        <section 
          key={index}
          className={`max-w-6xl mx-auto px-6 ${
            cta.variant === 'primary' 
              ? 'bg-gradient-to-r from-wpc to-wpc/80' 
              : 'bg-gray-100 dark:bg-gray-800'
          } rounded-3xl p-8 md:p-12`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${cta.variant === 'primary' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {cta.title}
              </h3>
              <p className={cta.variant === 'primary' ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}>
                {cta.subtitle}
              </p>
            </div>
            <Link
              href={cta.ctaLink}
              className={`shrink-0 inline-flex items-center gap-3 font-semibold py-4 px-8 rounded-xl transition-all duration-300 ${
                cta.variant === 'primary'
                  ? 'bg-white text-wpc hover:shadow-xl hover:-translate-y-1'
                  : 'bg-wpc text-white hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <span>{cta.ctaText}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}
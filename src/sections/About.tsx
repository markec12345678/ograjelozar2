'use client';

import { useState, useEffect } from 'react';

interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
}

const aboutConfig: { sections: AboutSection[] } = {
  sections: [
    {
      tag: "NAŠA ZGODBA",
      heading: "Ograje Lozar - Vaš Zanesljiv Partner za WPC Rešitve",
      paragraphs: [
        "Podjetje OGRAJE LOZAR, IGOR LOZAR S.P. že več kot 25 let ustvarja kakovostne WPC ograje in terase za domove po vsej Sloveniji. Naša pot se je začela v Gribljah pri Gradacu, kjer še danes delujemo z isto predanostjo in strokovnostjo.",
        "Specializirali smo se za WPC materiale, ki združujejo naravno lepoto lesa z moderno trajnostjo. Naše ograje in terase ne potrebujejo vzdrževanja, so odporne na vse vremenske razmere in ohranjajo svojo lepoto skozi leta.",
        "Vsak projekt je zase - zato vsaki ograji ali terasi posvetimo posebno pozornost, da se popolnoma integrira v vaš prostor."
      ],
      quote: "",
      attribution: "",
      image: "/images/fences-vertical/wpc-pokoncna-2.jpg",
      backgroundColor: "#1a1a1a",
    },
    {
      tag: "NAŠ PRISTOP",
      heading: "Kakovost, Zanesljivost in Oseben Pristop",
      paragraphs: [],
      quote: "Naše stranke pridejo k nam zaradi kakovosti in ostanejo zaradi odnosa. Vsak projekt obravnavamo kot svojega - zato dajemo vse od sebe, da je končni rezultat popoln.",
      attribution: "— Igor Lozar, lastnik in ustanovitelj",
      image: "/images/terraces/wpc-terasa-2.jpg",
      backgroundColor: "#2d2d2d",
    }
  ],
};

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      {aboutConfig.sections.map((section, index) => (
        <div
          key={index}
          className={`relative py-16 md:py-24 overflow-hidden ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            background: index === 0 
              ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' 
              : 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'
          }}
        >
          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )`
            }} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            {section.tag && (
              <div className="mb-6">
                <span className="inline-block bg-white/10 text-white/80 font-medium px-4 py-2 rounded-full text-sm">
                  {section.tag}
                </span>
              </div>
            )}
            {section.heading && (
              <h2 className="mb-8 text-3xl md:text-4xl font-bold text-white">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.length > 0 && (
              <div className="mb-8 space-y-6">
                {section.paragraphs.map((p, pIndex) => (
                  <p key={pIndex} className="text-lg leading-relaxed text-white/80">
                    {p}
                  </p>
                ))}
              </div>
            )}
            {section.quote && (
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-white/20 font-serif">"</span>
                <blockquote className="mb-6 pl-8">
                  <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-medium italic">
                    {section.quote}
                  </p>
                  {section.attribution && (
                    <p className="mt-4 text-wpc font-semibold">
                      {section.attribution}
                    </p>
                  )}
                </blockquote>
              </div>
            )}
            {section.image && (
              <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={section.image}
                  alt={`Ograje Lozar - ${section.heading}`}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
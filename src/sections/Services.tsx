'use client';

import { useState, useEffect } from 'react';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: "📐",
    title: "Načrtovanje in Svetovanje",
    description: "Pridemo na ogled vašega prostora, svetujemo pri izbiri materialov in barv ter pripravimo predlog rešitve.",
    features: [
      "Brezplačen ogled",
      "Osebno svetovanje",
      "3D vizualizacija",
      "Priprava ponudbe"
    ]
  },
  {
    id: 2,
    icon: "🛠️",
    title: "Montaža in Izvedba",
    description: "Naša izkušena ekipa poskrbi za profesionalno montažo vaše ograje ali terase.",
    features: [
      "Hitra izvedba",
      "Kakovostna izdelava",
      "Čista dela",
      "Garancija na delo"
    ]
  },
  {
    id: 3,
    icon: "🚚",
    title: "Dostava Materialov",
    description: "Poskrbimo za prevzem in dostavo vsega materiala na vašo lokacijo.",
    features: [
      "Lasten prevoz",
      "Dostava po Sloveniji",
      "Razkladanje na lokaciji",
      "Priporočila za transport"
    ]
  },
  {
    id: 4,
    icon: "✨",
    title: "Vzdrževanje in Popravila",
    description: "Nudimo tudi popravila in vzdrževanje obstoječih WPC konstrukcij.",
    features: [
      "Zamenjava desk",
      "Popravilo nosilcev",
      "Čiščenje teras",
      "Redni pregledi"
    ]
  }
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full text-sm mb-4">
            NAŠE STORITVE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Celovite Rešitve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Od načrtovanja do izvedbe - poskrbimo za vse. Vaš projekt je naša skrb od začetka do konca.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-wpc/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Features - show on hover */}
              <div className={`space-y-2 overflow-hidden transition-all duration-300 ${
                activeService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-wpc flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className={`absolute top-8 right-8 w-10 h-10 bg-wpc/10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                activeService === service.id ? 'rotate-[-45deg] bg-wpc' : ''
              }`}>
                <svg className={`w-5 h-5 text-wpc ${activeService === service.id ? 'text-white' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Kako Poteka Sodelovanje
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[
              { step: "1", title: "Povpraševanje", desc: "Kontaktirajte nas" },
              { step: "2", title: "Ogled", desc: "Brezplačen obisk" },
              { step: "3", title: "Ponudba", desc: "Pripravimo predlog" },
              { step: "4", title: "Izvedba", desc: "Montaža" },
              { step: "5", title: "Prevzem", desc: "Zadovoljna stranka" }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-wpc rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    {item.step}
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</span>
                </div>
                {index < 4 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gray-200 dark:bg-gray-700 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
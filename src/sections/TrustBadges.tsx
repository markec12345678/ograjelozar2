'use client';

import { useState, useEffect } from 'react';

interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}

const badges: TrustBadge[] = [
  {
    icon: "🛡️",
    title: "25 Let Garancije",
    description: "Na WPC material zagotavljamo dolgoletno garancijo"
  },
  {
    icon: "🌿",
    title: "Okolju Prijazno",
    description: "100% reciklabilen material, trajnostna proizvodnja"
  },
  {
    "icon": "🔧",
    title: "Brez Vzdrževanja",
    description: "Ni potrebno brušenje, barvanje ali zaščita"
  },
  {
    icon: "💧",
    title: "Vodoodporno",
    description: "Odporno na vlago, plesen in gnitje"
  },
  {
    icon: "☀️",
    title: "UV Odporno",
    description: "Ne bledi na soncu, ohranja barvo skozi leta"
  },
  {
    icon: "📏",
    title: "Meritev Brezplačno",
    description: "Pridemo na ogled in svetujemo brez obveznosti"
  }
];

export default function TrustBadges() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={badge.title}
              className={`group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-wpc/30 text-center ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
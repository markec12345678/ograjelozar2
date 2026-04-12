'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  features?: string[];
}

const products: Product[] = [
    {
      id: 1,
      name: "WPC Prečna Ograja",
      description: "Klasična prečna ograja z vodoravnimi deskami. Primeren za dvorišča, balkone in terase.",
      category: "Ograje",
      image: "/images/fences-horizontal/fence-h-01.jpg",
      features: ["Do 2m višine", "Različne barve", "Enostavna montaža"]
    },
    {
      id: 2,
      name: "WPC Pokončna Ograja",
      description: "Vertikalna ograja s pokončnimi deskami. Moderna oblika za sodobne domove.",
      category: "Ograje",
      image: "/images/fences-vertical/fence-v-02.jpg",
      features: ["Do 2.5m višine", "Zračna struktura", "Minimalističen videz"]
    },
    {
      id: 3,
      name: "WPC Terasa",
      description: "Lesena terasa iz WPC desk. Idealna za bazene, vrtove in pohodne površine.",
      category: "Terase",
      image: "/images/terraces/terrace-01.jpg",
      features: ["Protizdrsna površina", "Odpadna voda", "Trajna rešitev"]
    },
    {
      id: 4,
      name: "WPC + Inox Ograja",
      description: "Kombinacija WPC opisja z INOX ogrodjem. Najboljša izbira za moderne objekte.",
      category: "Ograje",
      image: "/images/fences-horizontal/fence-h-04.jpg",
      features: ["WPC opisje", "INOX 304", "Premium videz"]
    },
    {
      id: 5,
      name: "WPC Ograja z Kamnom",
      description: "Prečna ograja z dekorativnimi kamniti elementi. Udružen naraven in umetni material za unikaten videz.",
      category: "Ograje",
      image: "/images/fences-horizontal/fence-h-03.jpg",
      features: ["Kamniti elementi", "Prečna struktura", "Dekorativni videz"]
    },
    {
      id: 6,
      name: "WPC Visoka Pokončna Ograja",
      description: "Visoka vertikalna ograja za dodatno zasebnost in varnost. Primernega za kjerkoli dvorišče.",
      category: "Ograje",
      image: "/images/fences-vertical/fence-v-04.jpg",
      features: ["Do 3m višine", "Zasebnost", "Varnost"]
    },
    {
      id: 7,
      name: "WPC Terasa s Osvetljevanjem",
      description: "Terasa z vgrajenim LED osvetljevanjem za večerjo rabo in ambiente.",
      category: "Terase",
      image: "/images/terraces/terrace-02.jpg",
      features: ["Vgrajena LED", "Večerjna raba", "Ambientno osvetljevanje"]
    },
    {
      id: 8,
      name: "WPC Balkonski Sistem",
      description: "Kompleten sistem za balkone z ograjo in pokritjem. Zaprla rešitev za urbano bivanje.",
      category: "Ograje",
      image: "/images/fences-horizontal/fence-h-05.jpg",
      features: ["Balkonski sistem", "Kompleten paket", "Urban dizajn"]
    }
  ];

const categories = ["Vse", "Ograje", "Terase"];

export default function Products() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Vse");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProducts = activeCategory === "Vse" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full text-sm mb-4">
            NAŠI IZDELKI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            WPC Rešitve za Vaš Dom
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kakovostni WPC materiali za ograje, terase in balkone. Brez vzdrževanja, odporni na vse vremenske razmere.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-wpc text-white shadow-lg shadow-wpc/30"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-wpc/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-wpc text-white text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Features */}
                {product.features && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full bg-wpc hover:bg-wpc/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg"
                >
                  <span>Povprašajte</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#gallery"
            className="inline-flex items-center gap-2 text-wpc font-semibold hover:gap-3 transition-all"
          >
            <span>Oglejte si več projektov</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
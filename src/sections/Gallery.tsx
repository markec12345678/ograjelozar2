'use client';

import { useState, useEffect } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'medium' | 'large';
}

const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "WPC Prečna Ograja",
      category: "Ograje",
      image: "/images/gallery/gallery-01.jpg",
      size: 'large'
    },
    {
      id: 2,
      title: "WPC Terasa",
      category: "Terase",
      image: "/images/terraces/terrace-01.jpg",
      size: 'medium'
    },
    {
      id: 3,
      title: "Pokončna Ograja",
      category: "Ograje",
      image: "/images/fences-vertical/fence-v-02.jpg",
      size: 'medium'
    },
    {
      id: 4,
      title: "WPC + Inox Ograja",
      category: "Ograje",
      image: "/images/gallery/gallery-02.jpg",
      size: 'small'
    },
    {
      id: 5,
      title: "WPC Ograja z Kamnom",
      category: "Ograje",
      image: "/images/gallery/gallery-03.jpg",
      size: 'small'
    },
    {
      id: 6,
      title: "WPC Visoka Pokončna Ograja",
      category: "Ograje",
      image: "/images/fences-vertical/fence-v-04.jpg",
      size: 'large'
    },
    {
      id: 7,
      title: "WPC Terasa s Osvetljevanjem",
      category: "Terase",
      image: "/images/terraces/terrace-02.jpg",
      size: 'medium'
    },
    {
      id: 8,
      title: "WPC Balkonski Sistem",
      category: "Ograje",
      image: "/images/gallery/gallery-04.jpg",
      size: 'large'
    },
];

export default function Gallery() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Vse');

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ['Vse', 'Ograje', 'Terase'];
  
  const filteredItems = activeCategory === 'Vse' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full text-sm mb-4">
            NAŠA DELA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Realizirani Projekti
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Poglejte si naša dela - od ograj do teras. Vsak projekt je edinstven in izdelan po meri.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-wpc text-white shadow-lg shadow-wpc/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
                item.size === 'large' ? 'col-span-2 row-span-2' :
                item.size === 'medium' ? 'col-span-2 row-span-1' :
                'col-span-1 row-span-1'
              } ${
                mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, transition: 'all 0.5s ease' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-wpc font-medium mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>

              {/* Zoom icon on hover */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-wpc hover:bg-wpc/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-wpc/20"
          >
            <span>Vaš Projekt?</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
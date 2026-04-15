'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { useFadeInStagger } from '@/hooks/useFadeIn';

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
    title: "WPC Ograja s Kamnom",
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
    title: "WPC Terasa z Osvetljevanjem",
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

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.title}`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>
      <div
        className="relative max-w-5xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="90vw"
          className="object-contain rounded-lg"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
          <span className="text-xs text-wpc font-medium mb-1 block">{item.category}</span>
          <h3 className="text-white font-semibold text-xl">{item.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Vse');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Vse', 'Ograje', 'Terase'];

  const filteredItems = activeCategory === 'Vse'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = useCallback((item: GalleryItem) => {
    setLightboxItem(item);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxItem(null);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full text-sm mb-4">
            NAŠA DELA
          </span>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Realizirani Projekti
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Poglejte si naša dela - od ograj do teras. Vsak projekt je edinstven in izdelan po meri.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10" role="group" aria-label="Filter gallery by category">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
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
          {filteredItems.map((item, index) => {
            const fadeIn = useFadeInStagger(index, 80);
            return (
              <button
                key={item.id}
                ref={fadeIn.ref}
                onClick={() => handleOpenLightbox(item)}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer text-left ${
                  item.size === 'large' ? 'col-span-2 row-span-2' :
                  item.size === 'medium' ? 'col-span-2 row-span-1' :
                  'col-span-1 row-span-1'
                } ${fadeIn.className}`}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={item.size === 'large' ? '50vw' : item.size === 'medium' ? '50vw' : '25vw'}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-wpc hover:bg-wpc/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-wpc/20"
          >
            <span>Vaš Projekt?</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && <Lightbox item={lightboxItem} onClose={handleCloseLightbox} />}
    </section>
  );
}

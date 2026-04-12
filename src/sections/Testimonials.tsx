'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marko Novak",
    location: "Ljubljana",
    text: "Odlična izkušnja! Ekipa je bila profesionalna, ograja pa izgleda fantastično. Priporočam vsem, ki iščejo kakovost.",
    rating: 5
  },
  {
    id: 2,
    name: "Saša Kovač",
    location: "Maribor",
    text: "Naročili smo WPC teraso in nismo razočarani. Odlična kakovost, hitra izvedba, brez vzdrževanja - popolno!",
    rating: 5
  },
  {
    id: 3,
    name: "Peter Horvat",
    location: "Celje",
    text: "Za nas so naredili prečno ograjo. Igor je bil zelo odziven, svetoval je pri izbiri barve. Zelo zadovoljni!",
    rating: 5
  },
  {
    id: 4,
    name: "Maja Zupan",
    location: "Koper",
    text: "Odlično podjetje! Naročili smo več ograj za poslovni objekt. Kakovost na visokem nivoju, empatija do strank.",
    rating: 5
  },
  {
    id: 5,
    name: "Janez Krajnc",
    location: "Novo mesto",
    text: "Priporočam! Fanta sta naredila pokončno ograjo okoli bazena. Končni rezultat presegel pričakovanja.",
    rating: 5
  },
  {
    id: 6,
    name: "Tina Leskovar",
    location: "Slovenska Bistrica",
    text: "Hitro, kakovostno, ugodno. Terasa je čudovita. Vsakokrat ko gledam na njo, sem vesela odločitve.",
    rating: 5
  }
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full text-sm mb-4">
            MnenJA STRANK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kaj Pravijo Naše Stranke
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Več kot 500 zadovoljnih strank po vsej Sloveniji
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-wpc/20 rounded-full flex items-center justify-center">
                  <span className="text-wpc font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-wpc rounded-3xl p-8 md:p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Realiziranih projektov</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Zadovoljnih strank</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80">Let izkušenj</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
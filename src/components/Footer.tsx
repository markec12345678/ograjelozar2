'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Ograje Lozar</h3>
            <p className="text-gray-400">
              Kakovostni WPC materiali za ograje, terase in balkone.
              Brez vzdrževanja, odporni na vse vremenske razmere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 00-1-1H3c-1.1 0-2 .9-2 2v4h2V7h4h6v4h2v-4h2v4h2V7h4v4h6v-4h2v4h2v-4h2v4h2V7a2 2 0 00-2-2z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V5a2 2 0 012-2h6a2 2 0 012 2v9a2 2 0 01-2 2zM12 10a8 8 0 100 16 8 8 0 000-16z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 11.89 11.89 0 01-2.5 1 11.91 11.91 0 01-3.5-2.25A11.92 11.92 0 013 11.5a11.92 11.92 0 0111.9 0 11.91 11.91 0 013.5 2.25 11.89 11.89 0 012.5 1 8.5 8.5 0 017.6 4.7 8.38 8.38 0 01.9 3.8zM14 8a2 2 0 11-4 0 5 5 0 004.5 5.41z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Povezave</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Domov</Link></li>
              <li><Link href="/#products" className="hover:text-white transition-colors">Izdelki</Link></li>
              <li><Link href="/#gallery" className="hover:text-white transition-colors">Galerija</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Kategorije</h4>
            <ul className="space-y-2">
              <li><Link href="/#products" className="hover:text-white transition-colors">Ograje</Link></li>
              <li><Link href="/#products" className="hover:text-white transition-colors">Terase</Link></li>
              <li><Link href="/#products" className="hover:text-white transition-colors">Balkoni</Link></li>
              <li><Link href="/#gallery" className="hover:text-white transition-colors">Realizacije</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"></path>
                </svg>
                <span className="ml-3">Tržaška cesta 123, 1000 Ljubljana</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3"></path>
                </svg>
                <span className="ml-3">+386 1 234 5678</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3-3 3 3-3 3-3-3 3-3-3 3zM13 8l3-3 3 3-3 3-3-3 3-3-3 3z"></path>
                </svg>
                <span className="ml-3">info@ograjelozar.si</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Border and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ograje Lozar. Vse pravice pridržane.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pogoji uporabe</a>
              <span className="text-gray-500">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Zasebnost</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
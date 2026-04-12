import Hero from '@/sections/Hero';
import TrustBadges from '@/sections/TrustBadges';
import Services from '@/sections/Services';
import Products from '@/sections/Products';
import CTASections from '@/sections/CTASections';
import Gallery from '@/sections/Gallery';
import Testimonials from '@/sections/Testimonials';
import About from '@/sections/About';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <TrustBadges />
      <Services />
      <Products />
      <CTASections />
      <Gallery />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
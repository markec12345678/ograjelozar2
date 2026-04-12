import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ograje-lozar.si'),
  title: 'Ograje Lozar | Kakovostne WPC ograje in terase',
  description: 'Ograje Lozar - Igor Lozar s.p. iz Gribelj pri Gradacu. Specializirani za WPC ograje, terase in vinarske objekte. Več kot 25 let izkušenj. Brezplačen ogled in meritve!',
  keywords: 'WPC ograje, vinarska ograja, terasa, lesne storitve, Gradac, Slovenija',
  authors: [{ name: 'Ograje Lozar - Igor Lozar' }],
  openGraph: {
    title: 'Ograje Lozar | Kakovostne WPC ograje in terase',
    description: 'Specializirani za WPC ograje, terase in vinarske objekte. Več kot 25 let izkušenj. Brezplačen ogled in meritve!',
    url: 'https://ograje-lozar.si',
    siteName: 'Ograje Lozar',
    locale: 'sl_SI',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ograje Lozar - WPC ograje in terase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ograje Lozar | Kakovostne WPC ograje in terase',
    description: 'Specializirani za WPC ograje, terase in vinarske objekte. Več kot 25 let izkušenj.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ograje-lozar.si',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
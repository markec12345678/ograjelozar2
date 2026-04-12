'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const faqConfig = {
  tag: "POGOSTA VPRAŠANJA",
  heading: "Kaj Vas Zanima o WPC?",
  ctaText: "Imate dodatna vprašanja?",
  ctaLink: "#contact",
  faqs: [
    {
      id: 1,
      question: "Kaj je WPC material in zakaj je tako priljubljen?",
      answer: "WPC (Wood Plastic Composite) je sodoben material, ki združuje lesna vlakna (približno 60%) in reciklirano plastiko (približno 40%). Združuje najboljše lastnosti obeh materialov - naravno lepoto in toploto lesa ter trajnost in odpornost plastike. Je brez vzdrževanja, odporen na vremenske razmere, ne gnije in ne bledi."
    },
    {
      id: 2,
      question: "Koliko časa traja montaža WPC ograje ali terase?",
      answer: "Montažni čas je odvisen od velikosti projekta. Za standardno dvoriščno ograjo (površine do 50m) je montaža običajno zaključena v 1-2 dneh. WPC material je lahek in enostaven za obdelavo, kar pospeši celoten proces."
    },
    {
      id: 3,
      question: "Ali WPC ograja res ne potrebuje vzdrževanja?",
      answer: "Da! WPC ograje so skoraj brez vzdrževanja. Za čiščenje zadostuje občasno pranje z vodo ali milnico. Ni potrebno barvanje, lakiranje ali oljenje. To pomeni prihranek časa in denarja skozi celotno življenjsko dobo ograje."
    },
    {
      id: 4,
      question: "Kakšna je garancija na WPC izdelke?",
      answer: "Nudimo 15-25 letno garancijo na material (odvisno od izbrane linije) in garancijo na izvedbo. Garancija pokriva odpornost proti gnjenju, deformaciji, izbledanju barve in strukturnim poškodbam. Podrobni pogoji so navedeni v garancijskem listu."
    },
    {
      id: 5,
      question: "Ali je WPC okolju prijazen material?",
      answer: "Da! WPC je izdelan iz recikliranih materialov in je 100% reciklabilen. Pri proizvodnji ne uporabljamo škodljivih snovi ali kemikalij. Z izbiro WPC prispevate k trajnostnemu razvoju in zmanjšujete porabo naravnih virov."
    },
    {
      id: 6,
      question: "Kakšna je cena WPC ograje in ali vključuje montažo?",
      answer: "Cena je odvisna od dimenzij, izbrane vrste WPC materiala in zahtevnosti montaže. V našo ceno je vedno vključena strokovna montaža. Za natančno in brezplačno ponudbo nas kontaktirajte - pridemo na ogled in pripravimo prilagojeno ponudbo."
    },
    {
      id: 7,
      question: "Katere barve in oblike so na voljo?",
      answer: "Nudimo široko paleto barv - od naravnih lesenih odtenkov (hrast, oreh, tik) do modernih barv (antracit, siva, črna). Na voljo so različni profili: prečne in pokončne ograje, različne širine in debeline. Pomagamo vam izbrati optimalno rešitev za vaš prostor."
    },
    {
      id: 8,
      question: "Ali delate po celi Sloveniji?",
      answer: "Da! Delamo po vsej Sloveniji. Imamo izkušene ekipe, ki izvedejo montažo kjerkoli v državi. Pri večjih projektih nudimo brezplačno dostavo materiala na lokacijo. Pokličite nas za več informacij."
    }
  ]
};

export default function FAQ() {
  const [mounted, setMounted] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full text-sm mb-4">
            {faqConfig.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {faqConfig.heading}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tukaj so odgovori na najpogostejša vprašanja. Če imate še kakšno, nas kontaktirajte.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqConfig.faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-10 h-10 bg-wpc/10 rounded-full flex items-center justify-center transition-transform duration-300 ${openId === faq.id ? 'rotate-180 bg-wpc' : ''}`}>
                  <svg className={`w-5 h-5 text-wpc ${openId === faq.id ? 'text-white' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href={faqConfig.ctaLink}
            className="inline-flex items-center gap-2 text-wpc font-semibold hover:gap-3 transition-all"
          >
            <span>{faqConfig.ctaText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
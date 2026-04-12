import Link from 'next/link';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

// Vineyard-focused subhero config
export const subHeroConfig: SubHeroConfig = {
  tag: "O PODJETJU",
  heading: "Ograje Lozar - Vaš Partner za Kakovostne Ograje",
  bodyParagraphs: [
    "Podjetje OGRAJE LOZAR, IGOR LOZAR S.P. je družinsko podjetje s sedežem v Gribljah 63A pri Gradacu. Specializirani smo na področju izdelave in montaže WPC ograj in teras že več kot 25 let.",
    "Nudimo vam strokovno svetovanje, kakovostno izvedbo in zanesljivo montažo. Naša poslovna filozofija temelji na razumevanju specifičnih potreb strank in ponudbi trajnih rešitev, ki vašemu domu dajo Sodoben in eleganten videz."
  ],
  linkText: "Oglejte si naše izdelke",
  linkTarget: "#products",
  image1: "/images/fences-horizontal/wpc-precna-2.jpg",
  image2: "/images/terraces/wpc-terasa-1.jpg",
  stats: [
    { value: 25, suffix: "+", label: "Let Izkušenj" },
    { value: 500, suffix: "+", label: "Zadovoljnih Strank" },
    { value: 35, suffix: "+", label: "Let Garancije" },
  ],
};

export default function SubHero() {
  return (
    <section className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full">
            {subHeroConfig.tag}
          </span>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            {subHeroConfig.heading}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_1fr] items-start">
          <div className="space-y-6">
            {subHeroConfig.bodyParagraphs.map((p, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {p}
              </p>
            ))}
            <Link
              href={subHeroConfig.linkTarget}
              className="inline-flex items-center gap-2 bg-wpc hover:bg-wpc/90 text-white font-medium py-2 px-4 rounded-lg transition-transform duration-300"
            >
              {subHeroConfig.linkText}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4-4 4" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-[200px] bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${subHeroConfig.image1})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="relative h-[200px] bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${subHeroConfig.image2})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
          {subHeroConfig.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-3xl font-bold text-wpc">
                {stat.value}{stat.suffix}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
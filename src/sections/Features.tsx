export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart" | "Droplet" | "Sun";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

// Vineyard-focused features config
export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "ShieldCheck",
      title: "Brez Vzdrževanja",
      description: "WPC material ne potrebuje barvanja, lakiranja ali oljenja. Le občasno čiščenje z vodo je dovolj za dolgoletno lepoto."
    },
    {
      icon: "Droplet",
      title: "Odpornost na Vlago",
      description: "WPC ne absorbira vode in ne gnije, kar je idealno za zunanje uporabe v slovenskem podnebnem okolju."
    },
    {
      icon: "Sun",
      title: "UV Stabilnost",
      description: "Material je odporen na UV sevanje in ne izbledi auch po večletni izpostavitvi soncu."
    },
    {
      icon: "Leaf",
      title: "Okolju Prijazno",
      description: "WPC je izdelan iz recikliranih materialov, je 100% reciklabilen in ne vsebuje škodljivih snovi."
    },
    {
      icon: "Truck",
      title: "Hitra Montaža",
      description: "Modularni sistem omogoča hitro in enostavno namestitev brez specialnega orodja."
    },
    {
      icon: "Heart",
      title: "Dolga Življenjska Doba",
      description: "Življenjska doba WPC materiala presega 35 let, kar vam zagotovi dolgoročno rešitev."
    },
  ],
};

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {featuresConfig.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon placeholder - would normally use actual icon components */}
              <div className="mb-4 h-12 w-12 bg-wpc/20 flex items-center justify-center rounded-full">
                <span className="text-wpc font-bold text-xl">{getIconInitial(feature.icon)}</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to get initial for icon (in real app, use actual icon components)
function getIconInitial(icon: Feature['icon']): string {
  switch (icon) {
    case "Truck": return "🚚";
    case "ShieldCheck": return "🛡️";
    case "Leaf": return "🍃";
    case "Heart": return "❤️";
    case "Droplet": return "💧";
    case "Sun": return "☀️";
    default: return "•";
  }
}
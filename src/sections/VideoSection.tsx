export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

// Vineyard-focused video section config
export const videoSectionConfig: VideoSectionConfig = {
  tag: "ZAKAJ IZBRATI WPC",
  heading: "Zakaj izbrati WPC ograje in terase?",
  bodyParagraphs: [
    "WPC materiali predstavljajo sodobno rešitev za zunanjo ureditev vašega doma. Združujejo naravno lepoto lesa z izjemno odpornostjo na vremenske razmere. V primerjavi s klasičnim lesom, WPC ne gnije, se ne deformira in ne zahteva stalnega vzdrževanja.",
    "Naše WPC ograje in terase so izdelane iz visokokakovostnih materialov z dodatkom UV stabilizatorjev, kar preprečuje izbledanje in ohranja strukturo auch po letih izpostavitve soncu in vremenu.",
    "Z izbiro WPC dobite dolgoročno rešitev, ki vam prihrani čas in denar za vzdrževanje, hkrati pa vašemu domu doda sodoben in eleganten videz."
  ],
  ctaText: "Kontaktirajte nas",
  ctaTarget: "#contact",
  backgroundImage: "/images/fences-vertical/wpc-pokoncna-1.jpg",
};

export default function VideoSection() {
  return (
    <section className="relative bg-[url('/images/fences-vertical/wpc-pokoncna-1.jpg')] bg-center bg-cover min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto text-center text-white">
        <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full">
          {videoSectionConfig.tag}
        </span>
        <h2 className="mt-6 text-3xl font-bold mb-8">
          {videoSectionConfig.heading}
        </h2>
        <div className="space-y-6 max-w-2xl mx-auto text-gray-200">
          {videoSectionConfig.bodyParagraphs.map((p, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <a
          href={videoSectionConfig.ctaTarget}
          className="mt-10 inline-block bg-wpc hover:bg-wpc/90 text-white font-medium py-3 px-8 rounded-lg transition-transform duration-300"
        >
          {videoSectionConfig.ctaText}
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10l.88 1.22a2 2 0 002.89 0L12 13l2.42-3.38a2 2 0 10-2.84-2L10 11.66V6a2 2 0 10-4 0v5.66a2 2 0 10-2.14 1.56l-.88-1.22a2 2 0 103.78-1zM14 10a2 2 0 100-4h-1a2 2 0 100 4h1z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
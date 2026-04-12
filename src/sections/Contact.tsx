'use client';

import { useState, useEffect } from 'react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "📍",
    label: "Naslov",
    value: "Griblje 63A, 8332 Gradac, Slovenija",
    href: "https://maps.google.com/?q=Griblje+63A+Gradac"
  },
  {
    icon: "📧",
    label: "Email",
    value: "lesne.storitve@gmail.com",
    href: "mailto:lesne.storitve@gmail.com"
  },
  {
    icon: "📞",
    label: "Telefon",
    value: "041 276 195",
    href: "tel:041276195"
  },
  {
    icon: "🕐",
    label: "Delovni čas",
    value: "Pon-Pet: 8:00-18:00 | Sob: 9:00-14:00"
  }
];

const formFields = {
  nameLabel: "Ime in priimek",
  namePlaceholder: "Vaše ime in priimek",
  emailLabel: "Email naslov",
  emailPlaceholder: "va@email.com",
  phoneLabel: "Telefon",
  phonePlaceholder: "041 123 456",
  messageLabel: "Sporočilo",
  messagePlaceholder: "Opišite vaš projekt - dimenzije, lokacija, želeni tip ograje ali terase...",
  submitText: "Pošlji Povpraševanje",
  submittingText: "Pošiljanje...",
  successMessage: "Hvala za povpraševanje! Odgovorili vam bomo v 24h."
};

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-wpc/20 text-wpc font-medium px-4 py-2 rounded-full text-sm mb-4">
            KONTAKT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Povežite se z Nami
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ste pripravljeni na svoj projekt? Pošljite nam povpraševanje ali pokličite. Odgovorimo vam hitro!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-wpc/30"
                >
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-wpc transition-colors">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <img
                src="/images/terraces/wpc-terasa-2.jpg"
                alt="Lokacija"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Griblje+63A+Gradac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-wpc hover:text-white transition-all duration-300"
                >
                  Odpri na Zemljevidu
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700 delay-200`}>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Povpraševanje Poslano!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {formFields.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {formFields.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder={formFields.namePlaceholder}
                        className="w-full px-5 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {formFields.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder={formFields.phonePlaceholder}
                        className="w-full px-5 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {formFields.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder={formFields.emailPlaceholder}
                      className="w-full px-5 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {formFields.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={formFields.messagePlaceholder}
                      className="w-full px-5 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-wpc hover:bg-wpc/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-wpc/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{formFields.submittingText}</span>
                      </>
                    ) : (
                      <>
                        <span>{formFields.submitText}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
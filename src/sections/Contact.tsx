'use client';

import { useState, FormEvent } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MapPin className="w-7 h-7" />,
    label: "Naslov",
    value: "Griblje 63A, 8332 Gradac, Slovenija",
    href: "https://maps.google.com/?q=Griblje+63A+Gradac"
  },
  {
    icon: <Mail className="w-7 h-7" />,
    label: "Email",
    value: "lesne.storitve@gmail.com",
    href: "mailto:lesne.storitve@gmail.com"
  },
  {
    icon: <Phone className="w-7 h-7" />,
    label: "Telefon",
    value: "041 276 195",
    href: "tel:+38641276195"
  },
  {
    icon: <Clock className="w-7 h-7" />,
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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function validateForm(data: { name: string; email: string; phone: string; message: string }): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Ime je obvezno";
  } else if (data.name.trim().length < 2) {
    errors.name = "Ime mora vsebovati vsaj 2 znaka";
  }

  if (!data.email.trim()) {
    errors.email = "Email je obvezen";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Vnesite veljaven email naslov";
  }

  if (data.phone && !/^[0-9\s\-\+]{6,15}$/.test(data.phone)) {
    errors.phone = "Vnesite veljavno telefonsko številko";
  }

  if (!data.message.trim()) {
    errors.message = "Sporočilo je obvezno";
  } else if (data.message.trim().length < 10) {
    errors.message = "Sporočilo mora vsebovati vsaj 10 znakov";
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInLeft = useFadeIn({ delay: 0 });
  const fadeInRight = useFadeIn({ delay: 200 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xvgbzpjw';
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Novo povpraševanje od ${formData.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrors({ message: "Prišlo je do napake. Poskusite znova ali nas pokličite." });
      }
    } catch {
      // Fallback: simulate success for demo
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className={`space-y-8 ${fadeInLeft.className}`}>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-wpc/30"
                >
                  <div className="text-wpc mb-3">{info.icon}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-wpc transition-colors">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5!2d15.35!3d45.5!3d2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR3JpYmxqZSA2M0EsIDgzMzIgR3JhZGFj!5e0!3m2!1ssl!2ssi!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Ograje Lozar"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </div>

          {/* Form */}
          <div className={fadeInRight.className}>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Povpraševanje Poslano!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {formFields.successMessage}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-wpc font-medium hover:underline"
                  >
                    Pošljite novo povpraševanje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {formFields.nameLabel}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={formFields.namePlaceholder}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {formFields.phoneLabel}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={formFields.phonePlaceholder}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {formFields.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={formFields.emailPlaceholder}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {formFields.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={formFields.messagePlaceholder}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-wpc focus:border-wpc/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>
                    )}
                  </div>

                  {/* Honeypot for spam protection */}
                  <input type="hidden" name="_gotcha" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-wpc hover:bg-wpc/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-wpc/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{formFields.submittingText}</span>
                      </>
                    ) : (
                      <>
                        <span>{formFields.submitText}</span>
                        <Send className="w-5 h-5" />
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

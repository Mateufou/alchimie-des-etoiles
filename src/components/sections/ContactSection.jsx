import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // form submission logic would go here
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-transparent section-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-[var(--color-teal-dark)] mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Chaque chemin commence par un premier pas. Contactez-moi pour échanger sur vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            {submitted ? (
              <div className="bg-[var(--color-bg-secondary)] rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-teal-container)] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[var(--color-teal-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-copper)] mb-3">
                  Message envoyé !
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-heading)] italic">
                    Votre nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[var(--color-bg-secondary)] text-[var(--color-text-dark)] placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/40 transition-all duration-200"
                    placeholder="Prénom et nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-heading)] italic">
                    Votre email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[var(--color-bg-secondary)] text-[var(--color-text-dark)] placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/40 transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-heading)] italic">
                    Téléphone (optionnel)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[var(--color-bg-secondary)] text-[var(--color-text-dark)] placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/40 transition-all duration-200"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-heading)] italic">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[var(--color-bg-secondary)] text-[var(--color-text-dark)] placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/40 transition-all duration-200 resize-none flex-1"
                    placeholder="Parlez-moi de votre démarche..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Envoyer mon message
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 flex flex-col justify-between"
          >
            {/* Contact card */}
            <div className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 space-y-6">
              <h3 className="font-[var(--font-heading)] text-xl font-medium text-[var(--color-copper)]">
                Coordonnées
              </h3>
              
              <div className="space-y-4">
                <a href="tel:0688886814" className="flex items-center gap-3 sm:gap-4 text-[var(--color-text)] hover:text-[var(--color-copper)] transition-colors group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--color-copper-faded)] flex items-center justify-center group-hover:bg-[var(--color-copper)] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5 text-[var(--color-copper)] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-base">06.88.88.68.14</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Appel ou SMS</p>
                  </div>
                </a>

                <a href="mailto:alchimiedesetoiles@gmail.com" className="flex items-center gap-3 sm:gap-4 text-[var(--color-text)] hover:text-[var(--color-copper)] transition-colors group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--color-teal-container)]/40 flex items-center justify-center group-hover:bg-[var(--color-teal)] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5 text-[var(--color-teal-dark)] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base break-all">alchimiedesetoiles@gmail.com</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Réponse sous 48h</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 text-[var(--color-text)]">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--color-gold-faded)]/50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-gold-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-base">6 La Brairie</p>
                    <p className="text-sm text-[var(--color-text-muted)]">85120 Logé-Fougereuse, Vendée</p>
                  </div>
                </div>
              </div>

              {/* Social Links inside card */}
              <div className="pt-6 mt-4 border-t border-[var(--color-outline-light)]/30">
                <p className="text-sm text-[var(--color-text-muted)] mb-4 italic">
                  Retrouvez mes actualités sur les réseaux sociaux :
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://www.facebook.com/lalchimiedesetoiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#78BEB5]/10 hover:bg-[#78BEB5]/20 transition-all duration-300 text-[#78BEB5]"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-xs font-medium hidden sm:block">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/alchimiedesetoiles85"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C27230]/10 hover:bg-[#C27230]/20 transition-all duration-300 text-[#C27230]"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span className="text-xs font-medium hidden sm:block">Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=XPdph_YQKbE&t=25s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#D4A645]/10 hover:bg-[#D4A645]/20 transition-all duration-300 text-[#D4A645]"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-xs font-medium hidden sm:block">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* La Brairie Image */}
            <div className="bg-[var(--color-bg-surface-container)] rounded-3xl overflow-hidden shadow-sm border border-[var(--color-outline-light)]/20">
              <div className="h-[250px] w-full relative">
                <img 
                  src="/assets/images/la-brairie.jpg" 
                  alt="La Brairie Terre d'Étoiles cabinet de soins énergétiques et hypnose Logé-Fougereuse Vendée" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-center py-4 bg-white/50 backdrop-blur-sm">
                <p className="text-sm font-medium text-[var(--color-text)]">La Brairie, Terre d'Étoiles</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Bocage Vendéen</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

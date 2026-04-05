import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

// Same icon set from ServiceCard
const iconPaths = {
  energy: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <path d="M24 4C24 4 28 16 28 24C28 32 24 44 24 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 24C4 24 16 20 24 20C32 20 44 24 44 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.2"/>
    </svg>
  ),
  hypnosis: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <path d="M24 8C24 8 32 16 32 24C32 32 24 40 24 40C24 40 16 32 16 24C16 16 24 8 24 8Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <circle cx="24" cy="24" r="2" fill="currentColor"/>
    </svg>
  ),
  astrology: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="24" cy="14" r="2.5" fill="currentColor" opacity="0.6"/>
      <circle cx="32" cy="20" r="1.5" fill="currentColor" opacity="0.4"/>
      <circle cx="18" cy="30" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  decode: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <path d="M12 36L24 8L36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 28H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  ),
  animal: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <path d="M16 20C16 20 12 14 10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 20C32 20 36 14 38 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="24" cy="28" rx="12" ry="10" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="26" r="1.5" fill="currentColor"/>
      <circle cx="28" cy="26" r="1.5" fill="currentColor"/>
      <path d="M22 30C22 30 24 32 26 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  runes: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <rect x="14" y="6" width="20" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <path d="M24 12V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 12L32 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 22L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  sound: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <ellipse cx="24" cy="32" rx="14" ry="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 32V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M38 32V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="24" cy="16" rx="14" ry="8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  massage: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <path d="M16 16C16 16 20 12 24 12C28 12 32 16 32 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 24C12 24 18 20 24 20C30 20 36 24 36 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 32C10 32 16 28 24 28C32 28 38 32 38 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="8" r="2" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  art: (
    <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
      <path d="M12 36L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12L36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  ),
};

const categoryColors = {
  'Découverte': 'bg-[var(--color-teal-container)]/30 text-[var(--color-teal-dark)]',
  'Libération': 'bg-[var(--color-copper-faded)] text-[var(--color-copper)]',
  'Transformation': 'bg-[var(--color-gold-faded)]/60 text-[var(--color-gold-dark)]',
  'Expression': 'bg-[var(--color-sage)]/15 text-[var(--color-sage)]',
};

export default function ServiceModal({ service, isOpen, onClose }) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[var(--color-text-dark)]/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--color-bg-surface)] rounded-3xl shadow-[0_24px_64px_rgba(143,74,5,0.15)]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[var(--color-bg-surface-container)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-copper)] hover:bg-[var(--color-copper-faded)] transition-all duration-200 cursor-pointer z-10"
              aria-label="Fermer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header with icon */}
            <div className="p-8 pb-0 text-center">
              <div className="text-[var(--color-copper)] mb-4 flex justify-center">
                {iconPaths[service.icon]}
              </div>
              <span className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 ${categoryColors[service.category] || ''}`}>
                {service.category}
              </span>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-semibold text-[var(--color-teal-dark)] mb-2">
                {service.title}
              </h2>
            </div>

            {/* Divider */}
            <div className="mx-8 my-6 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--color-copper)]/20 to-transparent"></div>

            {/* Content */}
            <div className="px-8 pb-4">
              {service.fullDescription.split('\n\n').map((paragraph, i) => {
                // Check for bullet points
                if (paragraph.includes('•')) {
                  const lines = paragraph.split('\n');
                  return (
                    <div key={i} className="mb-4">
                      {lines.map((line, j) => {
                        if (line.startsWith('•')) {
                          return (
                            <div key={j} className="flex items-start gap-2 ml-2 mb-2">
                              <span className="text-[var(--color-copper)] mt-1.5 flex-shrink-0">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                                  <path d="M6 2l1.5 3.5L11 7l-3.5 1.5L6 12l-1.5-3.5L1 7l3.5-1.5z"/>
                                </svg>
                              </span>
                              <span className="text-[var(--color-text)] leading-relaxed text-[0.95rem]">{line.replace('• ', '')}</span>
                            </div>
                          );
                        }
                        return <p key={j} className="text-[var(--color-text)] leading-relaxed text-[0.95rem] mb-2">{line}</p>;
                      })}
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-[var(--color-text)] leading-relaxed text-[0.95rem] mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="px-8 pb-8 pt-4">
              <div className="bg-[var(--color-bg-surface-low)] rounded-2xl p-6 text-center">
                <p className="text-[var(--color-text-muted)] text-sm mb-4">
                  Envie d'en savoir plus ou de réserver ?
                </p>
                <Button href="#contact" variant="primary" onClick={onClose}>
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

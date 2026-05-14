import { motion } from 'framer-motion';

// SVG icon map for each service
const iconPaths = {
  energy: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <path d="M24 4C24 4 28 16 28 24C28 32 24 44 24 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 24C4 24 16 20 24 20C32 20 44 24 44 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.2"/>
    </svg>
  ),
  hypnosis: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M24 8C24 8 32 16 32 24C32 32 24 40 24 40C24 40 16 32 16 24C16 16 24 8 24 8Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <circle cx="24" cy="24" r="2" fill="currentColor"/>
    </svg>
  ),
  astrology: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M24 6L24 42M6 24L42 24" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <circle cx="24" cy="14" r="2.5" fill="currentColor" opacity="0.6"/>
      <circle cx="32" cy="20" r="1.5" fill="currentColor" opacity="0.4"/>
      <circle cx="18" cy="30" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  decode: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M12 36L24 8L36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 28H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  ),
  animal: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M16 20C16 20 12 14 10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 20C32 20 36 14 38 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="24" cy="28" rx="12" ry="10" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="26" r="1.5" fill="currentColor"/>
      <circle cx="28" cy="26" r="1.5" fill="currentColor"/>
      <path d="M22 30C22 30 24 32 26 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  runes: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="14" y="6" width="20" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <path d="M24 12V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 12L32 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 22L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  sound: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <ellipse cx="24" cy="32" rx="14" ry="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 32V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M38 32V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="24" cy="16" rx="14" ry="8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  massage: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M16 16C16 16 20 12 24 12C28 12 32 16 32 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 24C12 24 18 20 24 20C30 20 36 24 36 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 32C10 32 16 28 24 28C32 28 38 32 38 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="8" r="2" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  art: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M12 36L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12L36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  ),
  fire: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M24 44C32.8366 44 40 36.8366 40 28C40 18 24 4 24 4C24 4 8 18 8 28C8 36.8366 15.1634 44 24 44Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 44C29.5228 44 34 39.5228 34 34C34 26 24 16 24 16C24 16 14 26 14 34C14 39.5228 18.4772 44 24 44Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    </svg>
  ),
};

const categoryColors = {
  'Découverte': 'bg-[var(--color-teal-container)]/30 text-[var(--color-teal-dark)]',
  'Libération': 'bg-[var(--color-copper-faded)] text-[var(--color-copper)]',
  'Transformation': 'bg-[var(--color-gold-faded)]/60 text-[var(--color-gold-dark)]',
  'Expression': 'bg-[var(--color-sage)]/15 text-[var(--color-sage)]',
};

export default function ServiceCard({ service, index, onOpenModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(143, 74, 5, 0.08)' }}
      className="bg-[var(--color-bg-secondary)] rounded-2xl p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 group"
      onClick={() => onOpenModal(service)}
    >
      {/* Category chip */}
      <span className={`text-xs font-semibold tracking-wider uppercase self-start px-3 py-1 rounded-full ${categoryColors[service.category] || ''}`}>
        {service.category}
      </span>

      {/* Icon */}
      <div className="text-[var(--color-copper)] group-hover:text-[var(--color-copper-dark)] transition-colors duration-300">
        {iconPaths[service.icon]}
      </div>

      {/* Title */}
      <h3 className="font-[var(--font-heading)] text-xl font-medium text-[var(--color-copper)] leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm italic text-[var(--color-text-muted)] leading-relaxed flex-1">
        {service.shortDescription}
      </p>

      {/* Link */}
      <button
        className="text-sm font-semibold text-[var(--color-teal-dark)] group-hover:text-[var(--color-copper)] transition-colors duration-300 inline-flex items-center gap-1.5 mt-auto self-start cursor-pointer"
      >
        En savoir plus
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
}

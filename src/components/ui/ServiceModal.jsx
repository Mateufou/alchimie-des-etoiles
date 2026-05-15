import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  'Découverte': '#78BEB5',
  'Libération': '#C27230',
  'Transformation': '#D4A645',
  'Expression': '#8FB580',
};

export default function ServiceModal({ service, isOpen, onClose }) {
  // Lock body scroll and handle escape key when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && service && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.45)', 
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1000px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left sidebar (hidden on small screens < 900px) */}
            <div className="hidden md:flex flex-col items-center justify-end w-[360px] shrink-0 border-r border-[#78BEB5]/10 bg-[var(--color-bg-primary)] relative overflow-hidden pb-10">
              {/* Background Image or Gradient */}
              {service.image ? (
                <img src={service.image} alt={`${service.title} - Frédérique Guyot thérapeute holistique Vendée`} className="absolute inset-0 w-full h-full object-cover object-center" />
              ) : (
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ background: 'linear-gradient(to bottom, #F4ECE1, rgba(120,190,181,0.06))' }}
                />
              )}
              
              {/* Overlay Content - Floating transparent */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Service Icon */}
                <div 
                  className="w-[42px] h-[42px] mb-3 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] [&>svg]:w-full [&>svg]:h-full"
                  style={{ color: categoryColors[service.category], filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.8))' }}
                >
                  {iconPaths[service.icon]}
                </div>
                
                {/* Category chip */}
                <span 
                  className="text-xs font-bold uppercase tracking-[0.2em] text-center"
                  style={{ 
                    color: categoryColors[service.category],
                    textShadow: '0 0 10px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.8)'
                  }}
                >
                  {service.category}
                </span>
              </div>
            </div>

            {/* Right content panel */}
            <div className="flex-1 p-[28px] relative flex flex-col max-h-[92vh]">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-[28px] right-[28px] w-[28px] h-[28px] rounded-full border-[0.5px] border-[#78BEB5]/20 flex items-center justify-center text-[#78BEB5] hover:bg-[#78BEB5]/10 transition-colors cursor-pointer z-10"
                aria-label="Fermer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title & Separator */}
              <div className="pr-10 shrink-0">
                <h3 
                  className="font-[var(--font-heading)] font-normal text-[#C27230] mb-[20px]"
                  style={{ fontSize: '24px', fontFamily: '"Newsreader", serif' }}
                >
                  {service.title}
                </h3>
                <div className="w-[40px] h-[2px] bg-[#78BEB5]" style={{ opacity: 0.4, marginBottom: '20px' }}></div>
              </div>

              {/* Text content area */}
              <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 pb-2" style={{ maxHeight: '520px' }}>
                <style>{`
                  .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                  .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(120,190,181,0.2); border-radius: 10px; }
                  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(120,190,181,0.4); }
                `}</style>
                
                {/* Extra visibility on mobile where sidebar is hidden */}
                <span 
                  className="md:hidden inline-block text-xs font-bold uppercase tracking-[0.1em] mb-4"
                  style={{ color: categoryColors[service.category] }}
                >
                  {service.category}
                </span>

                {service.fullDescription.split('\n\n').map((paragraph, i) => {
                  // Check for bullet points
                  if (paragraph.includes('•')) {
                    const lines = paragraph.split('\n');
                    return (
                      <div key={i} className="mb-[14px]">
                        {lines.map((line, j) => {
                          if (line.trim().startsWith('•')) {
                            return (
                              <div key={j} className="flex items-start gap-2 ml-2 mb-[6px]">
                                <span className="text-[#C27230]" style={{ marginTop: '0.4rem' }}>
                                  <svg className="w-[10px] h-[10px]" fill="currentColor" viewBox="0 0 12 12">
                                    <circle cx="6" cy="6" r="3" />
                                  </svg>
                                </span>
                                <span 
                                  className="text-[#3A3A3A]" 
                                  style={{ fontSize: '14.5px', lineHeight: 1.85, fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                                >
                                  {line.replace('• ', '').trim()}
                                </span>
                              </div>
                            );
                          }
                          return (
                            <p key={j} className="text-[#3A3A3A] mb-[6px]" style={{ fontSize: '14.5px', lineHeight: 1.85, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                              {line}
                            </p>
                          );
                        })}
                      </div>
                    );
                  }
                  return (
                    <p 
                      key={i} 
                      className="text-[#3A3A3A]" 
                      style={{ fontSize: '14.5px', lineHeight: 1.85, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '14px' }}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

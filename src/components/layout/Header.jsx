import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Qui suis-je', href: '#qui-suis-je' },
  { label: 'Accompagnements', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via Intersection Observer
  useEffect(() => {
    const sectionIds = ['accueil', 'qui-suis-je', 'services', 'tarifs', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle smooth scroll with offset for fixed header
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg-surface)]/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(143,74,5,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#accueil" onClick={(e) => handleNavClick(e, '#accueil')} className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="L'Alchimie des Étoiles"
              className="h-12 lg:h-14 w-auto object-contain rounded-lg"
            />
            <span className="hidden sm:inline font-[var(--font-heading)] text-lg lg:text-xl font-light text-[var(--color-copper)] tracking-tight italic">
              L'Alchimie des Étoiles
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[var(--color-copper)] after:transition-all after:duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--color-copper)] after:w-full'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-copper)] after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="text-sm px-6 py-2.5" onClick={(e) => handleNavClick(e, '#contact')}>
              Prendre rendez-vous
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[60] flex flex-col justify-center items-center w-12 h-12 gap-1.5 cursor-pointer touch-manipulation"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--color-copper)] block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[var(--color-copper)] block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--color-copper)] block"
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--color-bg-surface)]/95 backdrop-blur-xl border-t border-[var(--color-outline-light)]/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-lg font-[var(--font-heading)] py-2 ${
                    activeSection === item.href.slice(1)
                      ? 'text-[var(--color-copper)]'
                      : 'text-[var(--color-text-dark)] hover:text-[var(--color-copper)]'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button href="#contact" variant="primary" className="mt-2 w-full text-center" onClick={(e) => handleNavClick(e, '#contact')}>
                Prendre rendez-vous
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

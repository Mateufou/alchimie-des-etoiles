import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Sacred geometry + botanical background */}
      <div className="hero-sacred-bg"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Compass-star sacred geometry */}
        <svg className="absolute top-16 right-0 w-[500px] h-[500px] text-[var(--color-teal)] opacity-[0.03]" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="250" cy="250" r="170" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="250" cy="250" r="70" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M250 30L250 470M30 250L470 250" stroke="currentColor" strokeWidth="0.3"/>
          <path d="M95 95L405 405M405 95L95 405" stroke="currentColor" strokeWidth="0.3"/>
          {/* 8-pointed star */}
          <path d="M250 30L270 220L470 250L270 280L250 470L230 280L30 250L230 220Z" stroke="currentColor" strokeWidth="0.4" opacity="0.7"/>
        </svg>
        {/* Botanical leaf left */}
        <svg className="absolute bottom-16 left-8 w-72 h-72 text-[var(--color-sage)] opacity-[0.04]" viewBox="0 0 200 200" fill="none">
          <path d="M100 10C100 10 130 50 130 100C130 150 100 190 100 190C100 190 70 150 70 100C70 50 100 10 100 10Z" stroke="currentColor" strokeWidth="0.8"/>
          <path d="M100 40C100 40 115 60 118 80C120 100 110 130 100 150" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M100 40C100 40 85 60 82 80C80 100 90 130 100 150" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M75 55C75 55 90 70 100 75C110 70 125 55 125 55" stroke="currentColor" strokeWidth="0.4"/>
          <path d="M72 85C72 85 88 95 100 98C112 95 128 85 128 85" stroke="currentColor" strokeWidth="0.4"/>
          <path d="M76 115C76 115 90 120 100 122C110 120 124 115 124 115" stroke="currentColor" strokeWidth="0.4"/>
        </svg>
        {/* Watercolor splash effect — top right */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-[var(--color-teal)]/[0.025] via-[var(--color-sage)]/[0.015] to-transparent rounded-full blur-3xl"></div>
        {/* Watercolor splash effect — bottom left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-gradient-to-tr from-[var(--color-copper)]/[0.02] via-[var(--color-gold)]/[0.015] to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[var(--color-bg-surface-low)] rounded-full px-4 py-2 mb-8"
            >
              <svg className="w-4 h-4 text-[var(--color-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm text-[var(--color-text-muted)] font-medium">
                La Brairie, Terre d'Étoiles — Bocage Vendéen
              </span>
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[var(--color-copper)] mb-4 italic tracking-tight"
            >
              L'Alchimie des Étoiles
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-[var(--font-heading)] text-xl sm:text-2xl text-[var(--color-teal-dark)] font-semibold mb-2"
            >
              Accompagnement holistique Corps / Âme / Esprit
            </motion.p>

            {/* Motto */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-[var(--font-heading)] text-lg text-[var(--color-gold-dark)] italic mb-6"
            >
              « Fusionner l'ombre et la lumière »
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-lg text-[var(--color-text)] leading-relaxed mb-10 max-w-xl"
            >
              J'accompagne les personnes perdues et épuisées dont la boussole interne est brisée en révélant les clés qui débloquent votre potentiel caché, pour enfin vivre une existence authentique alignée à votre véritable nature.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="#contact" variant="primary">
                Prendre rendez-vous
              </Button>
              <Button href="#qui-suis-je" variant="secondary">
                Découvrir mon approche
              </Button>
            </motion.div>
          </div>

          {/* Photo area — REAL PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Photo container */}
              <div 
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                style={{ boxShadow: '0 12px 32px rgba(194, 114, 48, 0.15)' }}
              >
                <img
                  src="/images/fg-tambour.jpg"
                  alt="Frédérique Guyot — Accompagnatrice holistique"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-4 -left-4 bg-[var(--color-bg-surface)]/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-[0_8px_24px_rgba(143,74,5,0.08)] z-10"
              >
                <p className="font-[var(--font-heading)] text-sm font-medium text-[var(--color-copper)]">Frédérique Guyot</p>
                <p className="text-xs text-[var(--color-text-muted)]">Accompagnatrice holistique</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--color-text-muted)] tracking-widest uppercase">Défiler</span>
        <svg className="w-5 h-5 text-[var(--color-copper)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

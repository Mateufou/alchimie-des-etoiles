import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutSection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section id="qui-suis-je" className="py-20 bg-[var(--color-bg-secondary)] section-divider min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
          
          {/* Photo — REAL close-up */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative">
              <div 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden"
                style={{ boxShadow: '0 12px 32px rgba(194, 114, 48, 0.15)' }}
              >
                <img
                  src="/images/hero-fg.jpg"
                  alt="Frédérique Guyot à La Brairie"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              
              {/* Small caption */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-0 right-0 bg-[var(--color-bg-surface)]/95 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg border border-[var(--color-bg-surface-low)]"
              >
                <p className="text-sm font-medium text-[var(--color-text-muted)] italic">
                  À La Brairie, avec mes compagnons
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text & Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-light text-[var(--color-copper)] mb-6">
              Qui suis-je
            </h1>

            {/* Intro text */}
            <p className="text-lg text-[var(--color-text-dark)] leading-relaxed mb-4">
              Hello, moi c'est Frédérique. Je suis accompagnatrice holistique depuis 15 ans, j'habite dans le bocage Vendéen. J'habite et j'exerce dans un lieu magique : « la Brairie Terre d'étoiles », entourée de ma famille et de mes animaux.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[var(--color-copper)]/20">
              <img
                src="/images/portrait-fg.jpg"
                alt="Frédérique Guyot"
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              <div>
                <p className="font-[var(--font-heading)] text-lg italic text-[var(--color-copper)] leading-tight">
                  Frédérique, 52 ans
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-tight">Accompagnatrice holistique</p>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {/* Parcour */}
              <div className="border border-[var(--color-copper)]/15 rounded-2xl bg-white/50 overflow-hidden">
                <button 
                  onClick={() => toggleSection(1)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)]/40 transition-colors hover:bg-white/70 cursor-pointer"
                >
                  <h3 className="font-[var(--font-heading)] text-[1.15rem] font-semibold text-[var(--color-copper)]">
                    Mon Parcours : De l'Enseignement à l'Accompagnement Holistique
                  </h3>
                  <motion.svg 
                    animate={{ rotate: openSection === 1 ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[var(--color-copper)] ml-4 shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openSection === 1 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-[0.95rem] text-[var(--color-text)] leading-[1.6]">
                        Après une carrière épanouissante comme directrice d'école maternelle, ma vie a pris un tournant inattendu avec le diagnostic d'une fibromyalgie. Face à l'impasse des traitements conventionnels et mon intolérance à de nombreux médicaments, j'ai dû accepter une retraite anticipée pour invalidité. Plongée dans les abysses de la douleur chronique et de la dépression, j'ai découvert une voie alternative grâce à ma rencontre avec une magnétiseuse. Cette expérience a ouvert une nouvelle perspective et a éveillé mes capacités intuitives et énergétiques.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Démarche */}
              <div className="border border-[var(--color-copper)]/15 rounded-2xl bg-white/50 overflow-hidden">
                <button 
                  onClick={() => toggleSection(2)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)]/40 transition-colors hover:bg-white/70 cursor-pointer"
                >
                  <h3 className="font-[var(--font-heading)] text-[1.15rem] font-semibold text-[var(--color-copper)]">
                    Ma Démarche : Une Approche Personnalisée et Évolutive
                  </h3>
                  <motion.svg 
                    animate={{ rotate: openSection === 2 ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[var(--color-copper)] ml-4 shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openSection === 2 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-[0.95rem] text-[var(--color-text)] leading-[1.6]">
                        Guidée par mon propre cheminement vers la guérison, j'ai développé un système d'accompagnement holistique unique qui continue d'évoluer. Je me suis formée à diverses pratiques : Energétique, Hypnose, Astrologie védique, Décodage alchimique des prénoms, Techniques de massage, Travail avec les runes, les cartes, le tambour, Communication animale. Aujourd'hui, j'intègre également une méthode de dessin originale créée par un artiste peintre, Pimabo.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Philosophie */}
              <div className="border border-[var(--color-copper)]/15 rounded-2xl bg-white/50 overflow-hidden">
                <button 
                  onClick={() => toggleSection(3)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)]/40 transition-colors hover:bg-white/70 cursor-pointer"
                >
                  <h3 className="font-[var(--font-heading)] text-[1.15rem] font-semibold text-[var(--color-copper)]">
                    Ma Philosophie : Transmuter l'Épreuve en Force
                  </h3>
                  <motion.svg 
                    animate={{ rotate: openSection === 3 ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[var(--color-copper)] ml-4 shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openSection === 3 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-[0.95rem] text-[var(--color-text)] leading-[1.6]">
                        Mon parcours m'a enseigné que nos plus grandes difficultés peuvent devenir nos plus grandes forces. Chaque épreuve m'a obligée à plonger profondément en moi pour découvrir et débloquer les clés de ma propre guérison. C'est cette sagesse acquise dans l'adversité que je partage aujourd'hui. Je mets mes capacités, savoirs et expériences au service des autres, avec la profonde compréhension de leurs défis pour les avoir moi-même traversés.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

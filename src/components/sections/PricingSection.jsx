import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pricingData = [
  {
    title: "Séance Découverte",
    desc: "(1h d'échange et soin)",
    price: "60€",
    highlight: false
  },
  {
    title: "Séance Approfondie",
    desc: "(1h30 d'accompagnement)",
    price: "90€",
    highlight: true
  },
  {
    title: "Voyage Transformation",
    desc: "(2h d'alchimie profonde)",
    price: "120€",
    highlight: false
  },
  {
    title: "Parcours Renaissance",
    desc: "Forfait 4 Séances",
    price: "300€",
    highlight: true,
    hasModal: true
  }
];

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="tarifs" className="py-24 lg:py-32 bg-transparent section-divider overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text and Pricing cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col max-w-2xl"
          >
            <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-[var(--color-copper)] mb-6 font-light tracking-tight">
              Investir dans votre Éveil
            </h2>
            <p className="text-[var(--color-text)] italic leading-relaxed mb-12 max-w-lg font-[var(--font-heading)] text-[1.1rem] opacity-90">
              Chaque séance est une porte ouverte vers votre véritable nature. Je propose des formats adaptés à la profondeur de votre exploration.
            </p>

            <div className="flex flex-col gap-5">
              {pricingData.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className={`relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 sm:px-8 sm:py-6 rounded-3xl transition-all duration-300 gap-4 sm:gap-0 ${
                    plan.highlight 
                      ? 'bg-white/90 shadow-[0_12px_40px_rgba(45,107,95,0.08)] border border-[var(--color-teal)]/10' 
                      : 'bg-white/50 backdrop-blur-sm shadow-sm border border-white/60 hover:bg-white/80'
                  }`}
                >
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[var(--color-copper)]">
                      {plan.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-[0.9rem] sm:text-sm font-medium">
                      {plan.desc}
                    </p>
                    {plan.hasModal && (
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="mt-2 text-[0.75rem] font-bold uppercase tracking-wider text-[var(--color-teal)] border border-[var(--color-teal)] rounded-full px-4 py-1.5 hover:bg-[var(--color-teal)] hover:text-white transition-colors cursor-pointer"
                      >
                        Découvrir le parcours
                      </button>
                    )}
                  </div>
                  
                  <div className={`font-[var(--font-heading)] text-3xl sm:text-4xl font-bold italic tracking-tight ${
                    plan.highlight ? 'text-[var(--color-teal)]' : 'text-[var(--color-copper)]'
                  }`}>
                    {plan.price}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="text-sm text-[var(--color-text-muted)] mt-10 italic opacity-80">
              Paiement par chèque ou espèces · Possibilité de forfait personnalisé sur demande
            </p>
          </motion.div>

          {/* Right Column: Photo Area in striking Arch format */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center items-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-[24rem]">
              {/* Arch Photo Frame */}
              <div 
                className="relative overflow-hidden w-full aspect-[2/3] rounded-t-full rounded-b-[4rem] shadow-[0_24px_50px_rgba(194,114,48,0.12)] border-[8px] border-white/80"
              >
                <img 
                  src="/images/tambour-niwa.jpg" 
                  alt="Tambour chamanique pour séance de vibrations sonores et soins énergétiques Vendée" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>
              
              {/* Subtle decorative accents near frame */}
              <img 
                src="/assets/decorative/compass-star.svg" 
                alt="" 
                className="absolute -top-6 -right-6 w-24 h-24 opacity-30 rotate-[35deg] pointer-events-none"
              />
              <img 
                src="/assets/decorative/botanical-leaf-2.svg" 
                alt="" 
                className="absolute -bottom-10 -left-10 w-40 h-auto opacity-20 -rotate-[25deg] pointer-events-none"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Package Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[var(--color-teal)]/20 flex items-center justify-center text-[var(--color-teal)] hover:bg-[var(--color-teal)]/10 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--color-copper)] mb-2">Renaître à Soi</h3>
              <p className="text-[var(--color-teal)] font-medium mb-6">Forfait Transformation en 4 Séances</p>
              
              <div className="text-[var(--color-text)] space-y-4 mb-8 text-[0.95rem] sm:text-base leading-relaxed">
                <p>Un accompagnement sur-mesure pour te libérer de ce qui t'alourdit et retrouver ta pleine puissance.</p>
                <p>Ce forfait est fait pour toi si tu sens qu'il est temps de tourner une page, de te délester de ce qui te freine — sans toujours savoir exactement quoi — et de reprendre les rênes de ta vie avec clarté et confiance.</p>
                <p>En quatre séances progressives, nous allons ensemble identifier, libérer et intégrer, pour que tu repartes non seulement soulagé(e), mais véritablement outillé(e) pour avancer en autonomie.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#C27230]/10">
                  <h4 className="font-bold text-[var(--color-copper)] text-lg mb-1">Séance 1 — Reconnexion à soi <span className="text-sm font-normal text-[var(--color-text-muted)] ml-2 whitespace-nowrap">| 1h30</span></h4>
                  <p className="text-sm leading-relaxed mb-3">Avant de libérer, on pose les fondations. Cette première séance est un espace pour te voir tel(le) que tu es vraiment — ton essence, ton fonctionnement, ton potentiel. À travers une lecture intuitive, le human design, le décodage alchimique et une première libération énergétique, nous commençons à dénouer les couches et à te reconnecter à l'essentiel.</p>
                  <p className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-teal)]">Intention : poser les bases, revenir à soi</p>
                </div>
                
                <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#C27230]/10">
                  <h4 className="font-bold text-[var(--color-copper)] text-lg mb-1">Séance 2 — Libération des blocages <span className="text-sm font-normal text-[var(--color-text-muted)] ml-2 whitespace-nowrap">| 1h30</span></h4>
                  <p className="text-sm leading-relaxed mb-3">Le cœur de l'œuvre. Nous plongeons dans ce qui freine — blocages émotionnels, schémas hérités, mémoires transgénérationnelles. Ce qui a été identifié est mis en conscience, puis libéré à travers un rituel et une séance énergétique profonde.</p>
                  <p className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-teal)]">Intention : nettoyer en profondeur, se délester</p>
                </div>
                
                <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#C27230]/10">
                  <h4 className="font-bold text-[var(--color-copper)] text-lg mb-1">Séance 3 — Ajustement & nettoyage <span className="text-sm font-normal text-[var(--color-text-muted)] ml-2 whitespace-nowrap">| 1h15-1h30</span></h4>
                  <p className="text-sm leading-relaxed mb-3">La transformation demande parfois plusieurs passages. Cette séance revient sur les effets de la précédente, identifie les résistances encore présentes et, si nécessaire, effectue un nouveau rituel ciblé. Un rééquilibrage énergétique vient stabiliser et consolider l'œuvre accomplie.</p>
                  <p className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-teal)]">Intention : ancrer et stabiliser les libérations</p>
                </div>
                
                <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#C27230]/10">
                  <h4 className="font-bold text-[var(--color-copper)] text-lg mb-1">Séance 4 — Autonomie & intégration <span className="text-sm font-normal text-[var(--color-text-muted)] ml-2 whitespace-nowrap">| 1h15</span></h4>
                  <p className="text-sm leading-relaxed mb-3">La dernière séance est celle de l'envol. Je te transmets des outils personnalisés — énergétiques, pratiques, intuitifs — adaptés à qui tu es. Une lecture avec les cartes offre une guidance pour la suite, et un réajustement final vient ancrer toutes les transformations vécues.</p>
                  <p className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-teal)]">Intention : repartir libre, ancré(e) et autonome</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

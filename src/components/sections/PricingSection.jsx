import { motion } from 'framer-motion';

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
  }
];

export default function PricingSection() {
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
                  className={`relative overflow-hidden flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6 rounded-3xl transition-all duration-300 ${
                    plan.highlight 
                      ? 'bg-white/90 shadow-[0_12px_40px_rgba(45,107,95,0.08)] border border-[var(--color-teal)]/10' 
                      : 'bg-white/50 backdrop-blur-sm shadow-sm border border-white/60 hover:bg-white/80'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[var(--color-copper)]">
                      {plan.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-[0.9rem] sm:text-sm font-medium">
                      {plan.desc}
                    </p>
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
                  alt="Tambour chamanique de la séance" 
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
    </section>
  );
}

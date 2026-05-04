import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Une femme d'une grande douceur, adorable et très attentive à vos mots et vos maux. Les séances se déroulent dans la bienveillance, le respect et sans aucun jugement. Si vous êtes perdu et que vous souhaitez retrouver votre chemin quel que soit je vous recommande l'Alchimie des Etoiles vous serez ravi.",
    name: "Fabienne"
  },
  {
    text: "J'ai rencontré Frédérique il y a une douzaine d'années. Son accompagnement m'a permis d'évoluer sur ma voie. Frédérique n'a jamais hésité à alterner douceur et fermeté, pour mon plus grand bien. Être bousculée parfois m'a permis de passer des paliers me semblant, à l'époque, infranchissables. Merci à toi Frédérique.",
    name: "Sylvie"
  },
  {
    text: "Des séances d'une grande qualité. Frédérique est très professionnelle, à l'écoute. Son approche personnalisée et bienveillante s'est parfaitement adaptée à mes besoins et a donné très rapidement des résultats. Je recommande.",
    name: "Brigitte"
  },
  {
    text: "Grâce à Frédérique j'ai réussi à retrouver la personne que je suis. Merci beaucoup ma chère amie de cœur.",
    name: "Hélène"
  },
  {
    text: "Grâce à Frédérique, j'ai pu laisser quelques gros boulets derrière moi. Ça m'a été bénéfique. Je revis. Qu'est-ce que ça a fait du bien !!!!! Merci",
    name: "Nadine"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds as requested
    
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-24 lg:py-28 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-[var(--color-teal-dark)] mb-4">
            Témoignages
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Les retours de celles et ceux qui ont cheminé avec moi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-[var(--color-bg-surface)] rounded-[2.5rem] p-8 md:p-14 text-center shadow-sm border border-[var(--color-teal)]/10 relative overflow-hidden flex flex-col justify-center min-h-[350px] md:min-h-[400px]">
            {/* Quote mark decorative */}
            <span className="absolute top-6 left-8 font-[var(--font-heading)] text-7xl text-[var(--color-copper)]/10 leading-none pointer-events-none">
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative z-10 px-4"
              >
                <p className="font-[var(--font-heading)] text-xl md:text-2xl lg:text-[1.7rem] text-[var(--color-text)] leading-relaxed italic mb-10">
                  {testimonials[currentIndex].text}
                </p>
                <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--color-copper)] to-[var(--color-gold)] mx-auto mb-4"></div>
                <p className="font-semibold text-[var(--color-copper)] text-lg tracking-wide uppercase">
                  {testimonials[currentIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Voir le témoignage ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === currentIndex 
                      ? 'bg-[var(--color-copper)] w-8' 
                      : 'bg-[var(--color-copper)]/20 w-2 hover:bg-[var(--color-copper)]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const placeholderTestimonials = [
  {
    text: "Vos témoignages sont précieux et seront ajoutés ici prochainement.",
    name: "Vos retours",
    context: "Votre expérience compte",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-28 bg-[var(--color-bg-secondary)]">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[var(--color-bg-surface)] rounded-3xl p-10 lg:p-14 text-center relative">
            {/* Quote mark */}
            <span className="absolute top-6 left-8 font-[var(--font-heading)] text-7xl text-[var(--color-copper)]/10 leading-none">
              "
            </span>

            <p className="font-[var(--font-heading)] text-xl lg:text-2xl text-[var(--color-text)] leading-relaxed italic mb-8">
              Cet espace est réservé aux témoignages de mes consultantes et consultants. Chaque parcours est unique, et vos retours d'expérience enrichissent et éclairent le chemin de ceux qui hésitent encore.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--color-copper)] to-[var(--color-gold)] mx-auto mb-4"></div>
            <p className="font-semibold text-[var(--color-copper)]">
              Bientôt vos voix ici
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Envoyez votre témoignage à alchimiedesetoiles@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

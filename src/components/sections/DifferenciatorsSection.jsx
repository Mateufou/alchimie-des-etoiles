import { motion } from 'framer-motion';

const pillars = [
  {
    number: '15',
    unit: 'ans',
    title: "d'expérience vécue",
    description: "Pas seulement théorique — un parcours personnel de guérison et de transformation qui nourrit chaque accompagnement.",
    accentColor: 'var(--color-copper)',
    textColor: 'text-[var(--color-copper)]',
  },
  {
    number: '12+',
    unit: '',
    title: 'techniques intégrées',
    description: "Une approche évolutive unique combinant énergétique, hypnose, astrologie védique, runes, massage, vibrations sonores, et plus encore.",
    accentColor: 'var(--color-teal)',
    textColor: 'text-[var(--color-teal-dark)]',
  },
  {
    number: '1',
    unit: '',
    title: 'lieu magique en Vendée',
    description: "La Brairie, Terre d'Étoiles — un espace de sérénité au cœur du bocage vendéen, entouré de nature et d'animaux.",
    accentColor: 'var(--color-sage)',
    textColor: 'text-[var(--color-sage)]',
  },
];

export default function DifferenciatorsSection() {
  return (
    <section className="py-24 lg:py-28 bg-[var(--color-bg-primary)] section-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-[var(--color-teal-dark)] mb-4">
            Pourquoi me choisir
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Trois piliers qui fondent mon approche unique d'accompagnement holistique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(143, 74, 5, 0.08)' }}
              className="text-center p-8 rounded-3xl bg-[#FAF7F2] transition-all duration-300"
              style={{ borderTop: `3px solid ${pillar.accentColor}` }}
            >
              <div className={`font-[var(--font-heading)] text-5xl lg:text-6xl font-light ${pillar.textColor} mb-1`}>
                {pillar.number}
                {pillar.unit && <span className="text-2xl ml-1">{pillar.unit}</span>}
              </div>
              <h3 className={`font-[var(--font-heading)] text-xl font-medium ${pillar.textColor} mb-4`}>
                {pillar.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

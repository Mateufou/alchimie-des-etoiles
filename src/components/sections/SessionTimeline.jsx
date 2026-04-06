import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Prise de contact',
    description: 'Un premier échange personnalisé pour comprendre votre parcours, vos besoins et définir ensemble l\'approche la plus adaptée.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h32M8 12v24a4 4 0 004 4h24a4 4 0 004-4V12M8 12l16 14 16-14"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'La séance',
    description: 'En présentiel à La Brairie ou à distance, une séance approfondie et bienveillante adaptée à vos besoins du moment.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="24" cy="24" r="16"/>
        <path strokeLinecap="round" d="M24 14v10l7 7"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Le suivi',
    description: 'Un suivi bienveillant et personnalisé après la séance pour ancrer les transformations et ajuster le parcours.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M36 24c0 6.627-5.373 12-12 12S12 30.627 12 24s5.373-12 12-12"/>
        <path strokeLinecap="round" d="M24 12V8M24 12h4"/>
        <path strokeLinecap="round" d="M20 28l4-4 4 4"/>
      </svg>
    ),
  },
];

export default function SessionTimeline() {
  return (
    <section className="py-24 lg:py-28 bg-transparent section-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-[var(--color-teal-dark)] mb-4">
            Déroulement d'une séance
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Un parcours simple et bienveillant en trois étapes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-[var(--color-copper)]/30 via-[var(--color-teal)]/30 to-[var(--color-gold)]/30"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center relative"
            >
              {/* Step circle */}
              <div className="w-20 h-20 rounded-full bg-[var(--color-bg-secondary)] border-2 border-[var(--color-copper)]/20 flex items-center justify-center mx-auto mb-6 relative z-10 text-[var(--color-copper)]">
                {step.icon}
              </div>

              {/* Number */}
              <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-gold-dark)] uppercase mb-2 block">
                Étape {step.number}
              </span>

              <h3 className="font-[var(--font-heading)] text-xl font-medium text-[var(--color-copper)] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

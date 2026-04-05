import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { pricing } from '../../data/services';

export default function PricingSection() {
  return (
    <section id="tarifs" className="py-24 lg:py-28 bg-[var(--color-bg-primary)] section-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-[var(--color-teal-dark)] mb-4">
            Tarifs
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Des formules transparentes et accessibles pour chaque besoin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-end">
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, boxShadow: plan.featured ? '0 16px 48px rgba(143, 74, 5, 0.2)' : '0 12px 32px rgba(143, 74, 5, 0.08)' }}
              className={`rounded-3xl p-8 text-center transition-all duration-300 ${
                plan.featured
                  ? 'bg-[var(--color-copper)] text-white shadow-none relative pb-10'
                  : 'bg-[var(--color-bg-secondary)]'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-gold)] text-[var(--color-gold-dark)] text-xs font-bold px-4 py-1 rounded-full">
                  Populaire
                </span>
              )}

              <h3 className={`font-[var(--font-heading)] text-lg font-medium mb-2 ${
                plan.featured ? 'text-white/90' : 'text-[var(--color-copper)]'
              }`}>
                Séance de {plan.duration}
              </h3>

              <div className={`font-[var(--font-heading)] text-5xl font-light my-6 ${
                plan.featured ? 'text-white' : 'text-[var(--color-copper)]'
              }`}>
                {plan.price}
              </div>

              <p className={`text-sm mb-8 ${
                plan.featured ? 'text-white/75' : 'text-[var(--color-text-muted)]'
              }`}>
                {plan.description}
              </p>

              <Button
                href="#contact"
                variant={plan.featured ? 'secondary' : 'primary'}
                className={`w-full text-sm ${
                  plan.featured
                    ? '!bg-white !text-[var(--color-copper-dark)] hover:!bg-white/90 !border-none'
                    : ''
                }`}
              >
                Prendre rendez-vous
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-[var(--color-text-muted)] mt-10"
        >
          Paiement par chèque ou espèces · Possibilité de forfait personnalisé sur demande
        </motion.p>
      </div>
    </section>
  );
}

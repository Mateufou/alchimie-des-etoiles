import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import ServiceModal from '../ui/ServiceModal';
import { services } from '../../data/services';

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="services" className="py-24 lg:py-32 bg-[var(--color-bg-surface-container)] section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-semibold text-[var(--color-teal-dark)] mb-4">
              Mes Accompagnements
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto mb-2">
              Un voyage énergétique en 4 étapes : Découverte, Libération, Transformation et Expression
            </p>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {[
              { name: 'Découverte', color: 'bg-[var(--color-teal-container)]/40 text-[var(--color-teal-dark)]' },
              { name: 'Libération', color: 'bg-[var(--color-copper-faded)] text-[var(--color-copper)]' },
              { name: 'Transformation', color: 'bg-[var(--color-gold-faded)]/60 text-[var(--color-gold-dark)]' },
              { name: 'Expression', color: 'bg-[var(--color-sage)]/15 text-[var(--color-sage)]' },
            ].map((cat) => (
              <span
                key={cat.name}
                className={`text-sm font-medium px-4 py-1.5 rounded-full ${cat.color}`}
              >
                {cat.name}
              </span>
            ))}
          </motion.div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                onOpenModal={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}

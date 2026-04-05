import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--color-outline-light)] border-opacity-40">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="font-[var(--font-heading)] text-lg font-medium text-[var(--color-text-dark)] group-hover:text-[var(--color-copper)] transition-colors duration-200 pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-bg-surface-low)] text-[var(--color-gold-dark)]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-2 pb-5 text-[var(--color-text-muted)] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

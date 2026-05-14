import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', href, onClick, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-[var(--font-body)] font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-[var(--color-copper)] !text-white hover:bg-[var(--color-copper-dark)] animate-breathe hover:shadow-[0_12px_32px_rgba(143,74,5,0.15)]',
    secondary: 'border-2 border-[var(--color-teal)] text-[var(--color-teal-dark)] hover:bg-[var(--color-teal)] hover:text-white',
    ghost: 'text-[var(--color-teal-dark)] hover:text-[var(--color-copper)] underline underline-offset-4',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </Component>
  );
}

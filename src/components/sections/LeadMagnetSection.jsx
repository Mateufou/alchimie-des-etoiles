import { motion } from 'framer-motion';

export default function LeadMagnetSection() {
  return (
    <section className="py-24 lg:py-28 relative overflow-hidden bg-transparent">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-[#78BEB5] opacity-[0.03] rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-[#C27230] opacity-[0.03] rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_rgba(45,107,95,0.05)] border border-[var(--color-teal)]/10 text-center"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-[var(--color-copper)] mb-4">
            Un cadeau pour votre chemin
          </h2>
          <p className="text-[var(--color-text-muted)] text-[1.1rem] mb-10 max-w-2xl mx-auto italic font-[var(--font-heading)]">
            Recevez gratuitement mon guide d'accompagnement. Entrez votre email ci-dessous pour le recevoir directement dans votre boîte de réception.
          </p>
          
          <div className="w-full flex justify-center">
            <iframe 
              width="700" 
              height="500" 
              src="https://e73bf181.sibforms.com/serve/MUIFAHZdYn1jYXcUYoEN0fekF_MwcwJmKLXAzFPS35leKEj_3ninaj41X9mXvU454dOIQxsRI1dqH2k0I2lu7w7NZ3MWmyBpwGIN6_LGD_VY8o8DS-KoqQGWpnBs6yWnlM-87XCrfC7D_gG2EGvoHPcFjiMT-bKi4MhyT0HIP8D0KMGsroaaaaPCFAAFOz14DVOnpi5x4HSy2gW64w==" 
              frameBorder="0" 
              scrolling="auto" 
              allowFullScreen 
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', border: 'none' }}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import DifferenciatorsSection from './components/sections/DifferenciatorsSection';
import ServicesGrid from './components/sections/ServicesGrid';
import SessionTimeline from './components/sections/SessionTimeline';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import ScrollToTop from './components/ui/ScrollToTop';
import BiophilicBackground from './components/layout/BiophilicBackground';

const SectionSeparator = () => (
  <div style={{ textAlign: 'center', padding: '24px 0', opacity: 0.15 }} className="relative z-10">
    <img src="/assets/decorative/compass-star.svg" alt="" width="40" className="mx-auto" />
  </div>
);

export default function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <BiophilicBackground />
        <HeroSection />
        <AboutSection />
        <SectionSeparator />
        <DifferenciatorsSection />
        <ServicesGrid />
        <SectionSeparator />
        <SessionTimeline />
        <TestimonialsSection />
        <PricingSection />
        <SectionSeparator />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

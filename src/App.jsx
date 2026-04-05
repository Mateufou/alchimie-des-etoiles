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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DifferenciatorsSection />
        <ServicesGrid />
        <SessionTimeline />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

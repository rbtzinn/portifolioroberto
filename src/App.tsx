import { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import LanguageSwitcher from './components/LanguageSwitcher';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
        <LanguageSwitcher lang={lang} setLang={setLang} />
        <HeroSection lang={lang} />
        <MarqueeSection />
        <AboutSection lang={lang} />
        <ServicesSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactSection lang={lang} />
      </div>
    </ErrorBoundary>
  );
}

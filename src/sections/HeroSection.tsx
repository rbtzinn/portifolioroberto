import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

interface HeroSectionProps {
  lang: 'pt' | 'en';
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const navLinks = lang === 'pt' 
    ? [
        { label: 'Sobre', href: '#about' },
        { label: 'Serviços', href: '#price' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Contato', href: '#contact' }
      ]
    : [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#price' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ];

  return (
    <section
      id="hero"
      className="h-auto sm:h-[100svh] flex flex-col relative overflow-hidden bg-[#0C0C0C] pb-8 sm:pb-0 pt-4 sm:pt-0"
    >
      {/* Navbar (Top) */}
      <FadeIn delay={0} y={-20} as="nav" className="shrink-0">
        <nav className="flex justify-between px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 w-full max-w-7xl mx-auto z-30 relative">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 text-[9px] xs:text-[10px] sm:text-sm md:text-lg lg:text-[1.3rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="shrink-0 mt-6 sm:mt-12 z-20 relative">
        <FadeIn delay={0.15} y={40}>
          <h1 className="font-black uppercase tracking-tight leading-[0.8] text-center w-full flex flex-col items-center">
            <span className="text-[#D7E2EA]/50 text-[3.5vw] sm:text-[2.2vw] tracking-widest font-light mb-2">
              {lang === 'pt' ? 'OLÁ, EU SOU O' : "HI, I'M"}
            </span>
            <span className="hero-heading text-[12vw] sm:text-[10vw] md:text-[9.5vw] lg:text-[10.5vw] leading-none block">
              ROBERTO
            </span>
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait — Flexible Middle Space */}
      <div className="h-[240px] xs:h-[280px] sm:h-auto flex-none sm:flex-1 min-h-0 flex items-center justify-center w-full z-10 relative mt-4 xs:mt-6 sm:mt-0">
        <FadeIn delay={0.6} y={30} className="h-full flex justify-center items-center">
          <Magnet
            padding={120}
            strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="flex justify-center items-center h-full"
          >
            <img
              src="/avatar.png"
              alt="Roberto Miranda — Frontend Developer portrait"
              className="w-auto h-full object-contain object-center select-none pointer-events-none mx-auto max-w-[80vw] sm:max-w-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="shrink-0 flex justify-between items-end px-4 sm:px-6 md:px-10 pb-0 sm:pb-8 md:pb-10 w-full max-w-7xl mx-auto z-30 relative pointer-events-none mt-6 xs:mt-8 sm:mt-0">
        {/* Left — descriptor text */}
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-tight
              max-w-[140px] xs:max-w-[160px] sm:max-w-[220px] md:max-w-[340px] text-[8px] xs:text-[9px] sm:text-xs md:text-base drop-shadow-md bg-black/20 sm:bg-transparent p-1.5 sm:p-0 rounded-lg backdrop-blur-sm sm:backdrop-blur-none"
          >
            {lang === 'pt' 
              ? 'desenvolvedor frontend focado em construir aplicações escaláveis e com design excepcional'
              : 'a frontend developer driven by building scalable and beautifully designed applications'}
          </p>
        </FadeIn>

        {/* Right — Contact Button */}
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton lang={lang} />
        </FadeIn>
      </div>
    </section>
  );
}

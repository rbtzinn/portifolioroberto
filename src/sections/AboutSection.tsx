import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

interface AboutSectionProps {
  lang: 'pt' | 'en';
}

const aboutTextPt =
  'Sou Desenvolvedor Frontend Júnior com formação em Ciência da Computação e experiência prática em projetos reais — de e-commerce a dashboards analíticos governamentais. Domínio sólido em React, TypeScript e Next.js, com vivência em Mobile (Flutter/Android), integração de APIs REST e entrega de interfaces escaláveis e bem projetadas. Autodidata, orientado a resultados e com capacidade comprovada de atuar do levantamento de requisitos até o deploy. Vamos construir algo incrível juntos!';

const aboutTextEn =
  'I am a Junior Frontend Developer with a degree in Computer Science and hands-on experience building real-world applications—from e-commerce platforms to government analytical dashboards. With solid expertise in React, TypeScript, and Next.js, alongside mobile experience with Flutter and Android, I love crafting clean, highly-interactive, and scalable user interfaces. I am a self-taught, result-oriented professional eager to turn complex designs into stunning digital experiences. Let’s build something incredible together!';

const decorativeImages = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon 3D icon',
    position: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    size: 'w-[80px] sm:w-[120px] md:w-[180px]',
    fadeIn: { delay: 0.1, x: -80, y: 0 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D decorative object',
    position: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    size: 'w-[70px] sm:w-[100px] md:w-[150px]',
    fadeIn: { delay: 0.25, x: -80, y: 0 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego 3D icon',
    position: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    size: 'w-[80px] sm:w-[120px] md:w-[180px]',
    fadeIn: { delay: 0.15, x: 80, y: 0 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group object',
    position: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    size: 'w-[90px] sm:w-[120px] md:w-[180px]',
    fadeIn: { delay: 0.3, x: 80, y: 0 },
  },
];

export default function AboutSection({ lang }: AboutSectionProps) {
  const currentText = lang === 'pt' ? aboutTextPt : aboutTextEn;
  const currentTitle = lang === 'pt' ? 'Sobre mim' : 'About me';

  return (
    <section
      id="about"
      className="relative min-h-screen md:h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
      aria-labelledby="about-heading"
    >
      {/* Decorative 3D images in corners (hidden on mobile for cleanliness and performance) */}
      {decorativeImages.map((img, i) => (
        <FadeIn
          key={i}
          delay={img.fadeIn.delay}
          x={img.fadeIn.x}
          y={img.fadeIn.y}
          duration={0.9}
          className={`absolute ${img.position} ${img.size} pointer-events-none select-none z-0 hidden xs:block`}
        >
          <img src={img.src} alt={img.alt} className="w-full h-auto object-contain opacity-40 sm:opacity-100" loading="lazy" />
        </FadeIn>
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 120px)' }}
          >
            {currentTitle}
          </h2>
        </FadeIn>

        {/* Gap between heading and text block */}
        <div className="mt-8 sm:mt-12 md:mt-14 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full">
          {/* Animated paragraph */}
          <AnimatedText
            text={currentText}
            className="text-[#D7E2EA] font-light leading-relaxed max-w-[720px] px-2 sm:px-4"
            style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.25rem)' }}
          />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <ContactButton lang={lang} />
            <a
              href="/Roberto_Miranda_CV.pdf"
              download="Roberto_Miranda_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-5 rounded-[30px] border border-white/20 text-white font-black tracking-widest text-xs uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              {lang === 'pt' ? 'Baixar CV' : 'Download CV'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import luxe1 from '../assets/projects/luxe-1.png';
import luxe2 from '../assets/projects/luxe-2.png';
import luxe3 from '../assets/projects/luxe-3.png';
import luxe4 from '../assets/projects/luxe-4.png';
import luxe5 from '../assets/projects/luxe-5.png';

import stream1 from '../assets/projects/stream-1.png';
import stream2 from '../assets/projects/stream-2.png';
import stream3 from '../assets/projects/stream-3.png';
import stream4 from '../assets/projects/stream-4.png';
import stream5 from '../assets/projects/stream-5.png';

import dash1 from '../assets/projects/dash-1.png';
import dash2 from '../assets/projects/dash-2.png';
import dash3 from '../assets/projects/dash-3.png';
import dash4 from '../assets/projects/dash-4.png';
import dash5 from '../assets/projects/dash-5.png';

import fleet1 from '../assets/projects/fleet-1.jpeg';
import fleet2 from '../assets/projects/fleet-2.jpeg';
import fleet3 from '../assets/projects/fleet-3.jpeg';
import fleet4 from '../assets/projects/fleet-4.jpeg';
import fleet5 from '../assets/projects/fleet-5.jpeg';
import fleet6 from '../assets/projects/fleet-6.jpeg';
import fleet7 from '../assets/projects/fleet-7.jpeg';
import fleet8 from '../assets/projects/fleet-8.jpeg';
import fleet9 from '../assets/projects/fleet-9.jpeg';
import fleet10 from '../assets/projects/fleet-10.jpeg';
import fleet11 from '../assets/projects/fleet-11.jpeg';
import fleet12 from '../assets/projects/fleet-12.jpeg';
import fleet13 from '../assets/projects/fleet-13.jpeg';

import nexcrm1 from '../assets/projects/nexcrm-1.jpeg';
import nexcrm2 from '../assets/projects/nexcrm-2.jpeg';
import nexcrm3 from '../assets/projects/nexcrm-3.jpeg';
import nexcrm4 from '../assets/projects/nexcrm-4.jpeg';

import bike1 from '../assets/projects/bike-1.png';
import bike2 from '../assets/projects/bike-2.png';
import bike3 from '../assets/projects/bike-3.png';
import bike4 from '../assets/projects/bike-4.png';
import bike5 from '../assets/projects/bike-5.png';

import rfid1 from '../assets/projects/rfid-1.jpeg';
import rfid2 from '../assets/projects/rfid-2.jpeg';
import rfid3 from '../assets/projects/rfid-3.jpeg';
import rfid4 from '../assets/projects/rfid-4.jpeg';
import rfid5 from '../assets/projects/rfid-5.jpeg';
import rfid6 from '../assets/projects/rfid-6.jpeg';
import rfid7 from '../assets/projects/rfid-7.jpeg';
import rfid8 from '../assets/projects/rfid-8.jpeg';
import rfid9 from '../assets/projects/rfid-9.jpeg';

gsap.registerPlugin(ScrollTrigger);

function RfidCarousel() {
  const images = [rfid1, rfid2, rfid3, rfid4, rfid5, rfid6, rfid7, rfid8, rfid9];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10 group bg-[#000] flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Leitor RFID ${i}`}
          className={`absolute w-full h-full object-contain p-2 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

function BikeCarousel() {
  const images = [bike1, bike2, bike3, bike4, bike5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10 group bg-[#000] flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Rolê de Bike ${i}`}
          className={`absolute w-full h-full object-contain p-2 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

function NexCrmCarousel() {
  const images = [nexcrm1, nexcrm2, nexcrm3, nexcrm4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10 group bg-[#000] flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`NexCRM ${i}`}
          className={`absolute w-full h-full object-contain p-2 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

function FleetCarousel() {
  const images = [
    fleet1, fleet2, fleet3, fleet4, fleet5, fleet6, fleet7, fleet8, fleet9, fleet10, fleet11, fleet12, fleet13
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10 group bg-[#000] flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`App de Frotas ${i}`}
          className={`absolute w-full h-full object-contain p-2 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

function DashCarousel() {
  const images = [dash1, dash2, dash3, dash4, dash5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10 group bg-[#000] flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Dashboard Cultural ${i}`}
          className={`absolute w-full h-full object-contain p-2 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

function StreamCarousel() {
  const images = [stream1, stream2, stream3, stream4, stream5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10 group bg-[#000] flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`StreamVibe ${i}`}
          className={`absolute w-full h-full object-contain p-2 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

function LuxeCarousel() {
  const images = [luxe1, luxe2, luxe3, luxe4, luxe5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10 group bg-[#000] flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Luxe Store ${i}`}
          className={`absolute w-full h-full object-contain p-2 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

interface ProjectsSectionProps {
  lang: 'pt' | 'en';
}

const getProjects = (lang: 'pt' | 'en') => [
  {
    num: '01',
    category: lang === 'pt' ? 'PLATAFORMA E-COMMERCE' : 'E-COMMERCE PLATFORM',
    name: 'LUXE Store',
    tech: 'React · TypeScript · Tailwind CSS · shadcn/ui · Zustand · i18n · DummyJSON API',
    desc: lang === 'pt'
      ? 'Loja online premium com catálogo dinâmico, carrinho e lista de desejos persistentes, suporte completo a múltiplos idiomas (PT-BR/EN), reset de rolagem nas rotas e um painel administrativo altamente refinado.'
      : 'Premium online store featuring a dynamic catalog, persistent shopping cart and wishlist, comprehensive multi-language support (PT-BR/EN), routing scroll resets, and a highly polished administrative dashboard.',
    link: 'https://luxestore-eight.vercel.app',
  },
  {
    num: '02',
    category: lang === 'pt' ? 'SERVIÇO DE STREAMING' : 'STREAMING SERVICES',
    name: 'StreamVibe',
    tech: 'React · TypeScript · Tailwind CSS · TMDB API · Vite · Framer Motion',
    desc: lang === 'pt'
      ? 'Interface cinematográfica inspirada em plataformas de streaming modernas. Inclui sincronização de filmes em tempo real via TMDB API, carrosséis dinâmicos por gênero, busca por palavras-chave e layout escuro com skeleton loaders responsivos.'
      : 'Cinematic streaming layout inspired by modern platforms. Includes real-time movie & show synchronization via TMDB API, dynamic category carrousels, comprehensive keyword search, dark cinematic UI, and responsive loading skeleton layers.',
    link: 'https://films-port.vercel.app',
  },
  {
    num: '03',
    category: lang === 'pt' ? 'TRANSPARÊNCIA GOVERNAMENTAL' : 'GOVERNMENT TRANSPARENCY',
    name: 'Dashboard Cultural',
    tech: 'React.js · Tailwind CSS · D3.js · Tremor · PapaParse · REST APIs',
    desc: lang === 'pt'
      ? 'Painel oficial de análise de dados implantado no portal de transparência da EMPETUR (Empresa de Turismo de Pernambuco). Oferece mapas de calor geográficos interativos em SVG com zoom suave, limpeza de grandes volumes de dados não estruturados e rastreadores de KPIs em tempo real.'
      : 'Official data analytics dashboard deployed on the transparency portal of EMPETUR (Pernambuco State Tourism Board). Offers interactive geographic SVG heatmaps with smooth zooming, complex unstructured dataset cleaning, and real-time operational KPI trackers.',
    link: 'https://empetur-painel.vercel.app',
  },
  {
    num: '04',
    category: lang === 'pt' ? 'APLICATIVO DE LOGÍSTICA' : 'LOGISTICS MOBILE APP',
    name: 'App de Frotas',
    tech: 'Flutter · Dart · Google Apps Script · Material 3 · HTTP REST',
    desc: lang === 'pt'
      ? 'Aplicativo móvel para gestão de frotas com coleta de assinaturas digitais offline via elemento Canvas, armazenamento local instantâneo, sincronização automática e integração direta com o Google Sheets como banco de dados de baixo custo.'
      : 'Logistics fleet management application featuring off-line signature acquisition via Canvas elements, instant offline storage, automated synchronization, and direct Google Sheets integrations as a secure low-cost data ledger.',
    link: 'https://frotasapp.vercel.app',
  },
  {
    num: '05',
    category: lang === 'pt' ? 'AUTOMAÇÃO INDUSTRIAL' : 'INDUSTRIAL AUTOMATION',
    name: 'Leitor RFID — Novo Atacarejo',
    tech: 'Android SDK · Java · RFID Antennas · SQLite · CSV Engine',
    desc: lang === 'pt'
      ? 'Sistema de inventário industrial pronto para produção implantado nos supermercados Novo Atacarejo. Permite leitura em tempo real e alta velocidade de centenas de tags RFID simultaneamente, integrado com banco de dados SQLite local e geração de relatórios CSV.'
      : 'Production-ready industrial inventory system deployed inside Novo Atacarejo supermarkets. Facilitates high-speed, real-time scanning of hundreds of RFID tags simultaneously, directly interfaceable with embedded databases and seamless CSV report logging.',
  },
  {
    num: '06',
    category: lang === 'pt' ? 'CRM & FULLSTACK' : 'CRM & FULLSTACK',
    name: 'NexCRM',
    tech: 'React 19 · React Query · Tailwind CSS · FastAPI · MongoDB Atlas · JWT Auth',
    desc: lang === 'pt'
      ? 'Visão técnica e estrutural do NexCRM, arquitetado com camadas separadas para interface (SPA com rotas protegidas e i18n), API (CRUD via FastAPI e autenticação JWT) e persistência centralizada. Pensado como case de ponta-a-ponta para demonstração pública com deploy seguro na Vercel.'
      : 'Technical and structural showcase of NexCRM, architected with distinct layers for the interface (SPA with protected routes and i18n), API (FastAPI CRUD and JWT auth), and centralized persistence. Built as an end-to-end portfolio case demonstrating public product deployment securely on Vercel.',
    link: 'https://nexcrm-web.vercel.app/login',
  },
  {
    num: '07',
    category: lang === 'pt' ? 'EVENTO & COMUNIDADE' : 'EVENT & COMMUNITY',
    name: 'Rolê de Bike',
    tech: 'Next.js · Tailwind CSS · Framer Motion · Vercel',
    desc: lang === 'pt'
      ? 'Landing page interativa e dinâmica criada especialmente para divulgar um evento de ciclismo organizado para minha irmã. Foco em tipografia forte, micro-interações fluidas e usabilidade ágil para mobile, visando engajamento direto da comunidade.'
      : 'Interactive and dynamic landing page built specifically to promote a local cycling event organized for my sister. Emphasizes bold typography, fluid micro-interactions, and snappy mobile usability to drive direct community engagement.',
    link: 'https://roledebike.vercel.app',
  },
];

const renderMockup = (num: string) => {
  switch (num) {
    case '01': // LUXE Store (E-Commerce)
      return <LuxeCarousel />;
    case '02': // StreamVibe (Streaming)
      return <StreamCarousel />;

    case '03': // Dashboard Cultural (GovTech)
      return <DashCarousel />;

    case '04': // App de Frotas (Logistics)
      return <FleetCarousel />;

    case '05': // Leitor RFID (Novo Atacarejo)
      return <RfidCarousel />;

    case '06': // NexCRM
      return <NexCrmCarousel />;

    case '07': // Rolê de Bike
      return <BikeCarousel />;

    default:
      return <div className="w-full h-full bg-zinc-900 rounded-2xl"></div>;
  }
};

interface ProjectCardProps {
  project: ReturnType<typeof getProjects>[0];
  index: number;
  total: number;
  lang: 'pt' | 'en';
}

function ProjectCard({ project, index, total, lang }: ProjectCardProps) {
  const borderRadius = 'clamp(28px, 4vw, 50px)';
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !cardRef.current || index === total - 1) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        animation: gsap.to(cardRef.current, {
          scale: 0.9,
          ease: 'none',
        }),
      });
    });

    return () => ctx.revert();
  }, [index, total]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8"
      style={{
        zIndex: index + 1,
      }}
    >
      <div
        ref={cardRef}
        className="w-full h-[90vh] sm:h-[85vh] md:h-[80vh] border border-[#D7E2EA]/30 p-5 sm:p-7 md:p-9 flex flex-col md:flex-row gap-6 md:gap-10 overflow-y-auto md:overflow-hidden"
        style={{
          background: '#0C0C0C',
          borderRadius,
        }}
      >
        {/* Left Column: Details (45% width on desktop) */}
        <div className="flex flex-col justify-between flex-[1.2] min-w-0">
          <div>
            {/* Top row: Number + Category */}
            <div className="flex items-center gap-4 mb-4">
              <span
                className="font-black text-[#D7E2EA] leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
              >
                {project.num}
              </span>
              <div className="flex flex-col">
                <span
                  className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[9px] sm:text-xs"
                >
                  {project.category}
                </span>
                <span
                  className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-base sm:text-xl md:text-2xl mt-0.5"
                >
                  {project.name}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[#D7E2EA]/85 font-light leading-relaxed mb-6 text-xs sm:text-sm md:text-base"
            >
              {project.desc}
            </p>
          </div>

          {/* Tech Stack + Button */}
          <div className="mt-auto">
            <div className="mb-5 sm:mb-6">
              <div className="text-[9px] uppercase tracking-wider text-[#D7E2EA]/40 font-semibold mb-2">
                {lang === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.split(' · ').map((t) => (
                  <span
                    key={t}
                    className="text-[#D7E2EA] bg-[#D7E2EA]/10 border border-[#D7E2EA]/15 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-medium tracking-wide uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <LiveProjectButton lang={lang} link={(project as any).link} />
          </div>
        </div>

        {/* Right Column: Visual Mockup (55% width on desktop) */}
        <div className="flex-1 flex items-center justify-center bg-zinc-950/30 rounded-[20px] border border-white/5 p-4 sm:p-6 overflow-hidden min-h-[240px] xs:min-h-[280px] sm:min-h-[320px] md:min-h-0 relative">
          {/* Ambient Glow */}
          <div className="absolute -inset-10 bg-radial-gradient(from_center,_rgba(255,255,255,0.03)_0%,_transparent_70%) pointer-events-none"></div>
          <div className="w-full h-full flex items-center justify-center scale-[0.85] xs:scale-[0.9] sm:scale-100 origin-center">
            {renderMockup(project.num)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ lang }: ProjectsSectionProps) {
  const projects = getProjects(lang);
  const currentTitle = lang === 'pt' ? 'Projetos' : 'Projects';
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative animate-fade-in"
      style={{ background: '#0C0C0C' }}
      aria-labelledby="projects-heading"
    >
      {/* Heading — outside the sticky scroll area */}
      <div className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-16">
        <FadeIn delay={0} y={40}>
          <h2
            id="projects-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 12vw, 160px)' }}
          >
            {currentTitle}
          </h2>
        </FadeIn>
      </div>

      {/* Cards stack via sticky positioning naturally (Desktop) */}
      <div className="hidden md:block relative">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            total={projects.length}
            lang={lang}
          />
        ))}
      </div>

      {/* Mobile Horizontal Swiper */}
      <div className="block md:hidden px-4 pb-16">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-2">
          {projects.map((project) => (
            <div
              key={project.num}
              onClick={() => setSelectedProject(project)}
              className="snap-center flex-shrink-0 w-[80vw] xs:w-[280px] bg-[#161616] border border-white/10 rounded-[24px] p-5 flex flex-col justify-between cursor-pointer hover:border-white/20 transition-all select-none active:scale-[0.98]"
            >
              <div>
                {/* Image Preview / Mockup thumbnail */}
                <div className="w-full h-[150px] bg-zinc-950/40 rounded-[16px] border border-white/5 p-2 overflow-hidden mb-4 flex items-center justify-center relative">
                  <div className="scale-[0.6] w-full h-full flex items-center justify-center origin-center pointer-events-none select-none">
                    {renderMockup(project.num)}
                  </div>
                </div>

                {/* Number & Category */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-2xl font-black text-[#D7E2EA] leading-none">
                    {project.num}
                  </span>
                  <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[8px]">
                    {project.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-base mb-2">
                  {project.name}
                </h3>

                {/* Brief description snippet */}
                <p className="text-[#D7E2EA]/70 font-light text-xs line-clamp-3 mb-4 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* View details CTA button */}
              <div className="mt-auto pt-2 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-wider text-[#D7E2EA]/40 font-semibold transition-colors">
                <span>{lang === 'pt' ? 'Ver Detalhes' : 'View Details'}</span>
                <span className="text-xs">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-[500px] max-h-[85vh] bg-[#0C0C0C] border border-[#D7E2EA]/30 rounded-[32px] overflow-hidden flex flex-col z-[260] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full border border-white/10 bg-[#161616]/80 text-[#D7E2EA] hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto w-full h-full p-6 scrollbar-none flex flex-col">
                {/* Visual Mockup Container (Image Carousel) */}
                <div className="w-full h-[220px] bg-zinc-950/30 rounded-[20px] border border-white/5 p-4 overflow-hidden relative mb-6 mt-4 flex items-center justify-center">
                  <div className="absolute -inset-10 bg-radial-gradient(from_center,_rgba(255,255,255,0.03)_0%,_transparent_70%) pointer-events-none"></div>
                  <div className="w-full h-full flex items-center justify-center origin-center">
                    {renderMockup(selectedProject.num)}
                  </div>
                </div>

                {/* Info Column */}
                <div className="flex flex-col flex-1">
                  {/* Number + Category + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-black text-[#D7E2EA] leading-none text-4xl">
                      {selectedProject.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[9px]">
                        {selectedProject.category}
                      </span>
                      <span className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-lg mt-0.5">
                        {selectedProject.name}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#D7E2EA]/85 font-light leading-relaxed mb-6 text-xs xs:text-sm">
                    {selectedProject.desc}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6 mt-auto">
                    <div className="text-[9px] uppercase tracking-wider text-[#D7E2EA]/40 font-semibold mb-2">
                      {lang === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.split(' · ').map((t: string) => (
                        <span
                          key={t}
                          className="text-[#D7E2EA] bg-[#D7E2EA]/10 border border-[#D7E2EA]/15 rounded-full px-2.5 py-1 text-[8px] xs:text-[9px] font-medium tracking-wide uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Redirect / View Demo Button */}
                  <div className="mt-2 pointer-events-auto">
                    <LiveProjectButton lang={lang} link={selectedProject.link} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom padding after cards */}
      <div className="pb-16 sm:pb-20 md:pb-28" />
    </section>
  );
}

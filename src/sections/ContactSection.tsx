import { Mail, Phone, MapPin } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface ContactSectionProps {
  lang: 'pt' | 'en';
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const content = {
    pt: {
      title: 'Contato',
      subtitle: 'Vamos construir algo incrível juntos',
      desc: 'Sinta-se à vontade para entrar em contato se estiver procurando um desenvolvedor frontend dedicado para integrar seu time ou para realizar um projeto sob medida.',
      location: 'Recife, PE (Disponível para Remoto ou Híbrido)',
      phone: '(81) 98331-2369',
      copied: 'E-mail copiado!',
      copy: 'Copiar e-mail',
    },
    en: {
      title: 'Contact',
      subtitle: "Let's build something incredible together",
      desc: 'Feel free to reach out if you are looking for a dedicated frontend developer to join your team or to build a tailored solution from scratch.',
      location: 'Recife, PE, Brazil (Open for Remote or Hybrid)',
      phone: '+55 (81) 98331-2369',
      copied: 'Email copied!',
      copy: 'Copy email',
    },
  };

  const current = content[lang];

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] flex flex-col justify-between px-5 sm:px-8 md:px-16 py-20 bg-zinc-950/20 border-t border-white/5"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-radial-gradient(from_center,_rgba(119,33,177,0.02)_0%,_transparent_70%) pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Heading and Info */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <FadeIn delay={0} y={30}>
              <span className="text-cyan-400 font-semibold tracking-widest text-xs sm:text-sm uppercase">
                {current.subtitle}
              </span>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight mt-2"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 120px)' }}
              >
                {current.title}
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} y={30}>
              <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-lg text-sm sm:text-base md:text-lg">
                {current.desc}
              </p>
            </FadeIn>

            <div className="flex flex-col gap-4 mt-4">
              {/* Location */}
              <FadeIn delay={0.2} y={20} className="flex items-center gap-3 text-[#D7E2EA]/80 text-xs sm:text-sm md:text-base">
                <MapPin className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                <span>{current.location}</span>
              </FadeIn>

              {/* Phone */}
              <FadeIn delay={0.3} y={20} className="flex items-center gap-3 text-[#D7E2EA]/80 text-xs sm:text-sm md:text-base">
                <Phone className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                <a href={`tel:5581983312369`} className="hover:text-cyan-300 transition-colors font-medium">
                  {current.phone}
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Clickable Big Interactive Links */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full">
            {/* Email Box */}
            <FadeIn delay={0.4} y={30}>
              <a
                href="mailto:rbtgabriel04@gmail.com"
                className="group relative w-full flex items-center justify-between p-5 sm:p-7 bg-[#111] hover:bg-[#151515] border border-white/5 hover:border-cyan-500/30 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 sm:gap-6 z-10 min-w-0">
                  <div className="p-3 sm:p-4 bg-cyan-500/10 text-cyan-400 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] sm:text-xs text-white/40 tracking-wider uppercase font-semibold">EMAIL</span>
                    <span className="text-sm sm:text-lg md:text-xl font-medium text-[#D7E2EA] group-hover:text-white transition-colors mt-0.5 truncate max-w-[200px] sm:max-w-none">
                      rbtgabriel04@gmail.com
                    </span>
                  </div>
                </div>
                <span className="text-cyan-400 font-bold text-xs group-hover:translate-x-1 transition-transform z-10 select-none flex-shrink-0">
                  →
                </span>
              </a>
            </FadeIn>

            {/* LinkedIn Box */}
            <FadeIn delay={0.5} y={30}>
              <a
                href="https://www.linkedin.com/in/roberto-gabriel-araújo-miranda/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full flex items-center justify-between p-5 sm:p-7 bg-[#111] hover:bg-[#151515] border border-white/5 hover:border-indigo-500/30 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 sm:gap-6 z-10 min-w-0">
                  <div className="p-3 sm:p-4 bg-indigo-500/10 text-indigo-400 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] sm:text-xs text-white/40 tracking-wider uppercase font-semibold">LINKEDIN</span>
                    <span className="text-sm sm:text-lg md:text-xl font-medium text-[#D7E2EA] group-hover:text-white transition-colors mt-0.5 truncate max-w-[200px] sm:max-w-[280px] md:max-w-none" title="linkedin.com/in/roberto-gabriel-araújo-miranda">
                      linkedin.com/in/roberto-gabriel...
                    </span>
                  </div>
                </div>
                <span className="text-indigo-400 font-bold text-xs group-hover:translate-x-1 transition-transform z-10 select-none flex-shrink-0">
                  →
                </span>
              </a>
            </FadeIn>

            {/* GitHub Box */}
            <FadeIn delay={0.6} y={30}>
              <a
                href="https://github.com/rbtzinn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full flex items-center justify-between p-5 sm:p-7 bg-[#111] hover:bg-[#151515] border border-white/5 hover:border-white/20 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 sm:gap-6 z-10 min-w-0">
                  <div className="p-3 sm:p-4 bg-white/10 text-white rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] sm:text-xs text-white/40 tracking-wider uppercase font-semibold">GITHUB</span>
                    <span className="text-sm sm:text-lg md:text-xl font-medium text-[#D7E2EA] group-hover:text-white transition-colors mt-0.5">
                      github.com/rbtzinn
                    </span>
                  </div>
                </div>
                <span className="text-white font-bold text-xs group-hover:translate-x-1 transition-transform z-10 select-none flex-shrink-0">
                  →
                </span>
              </a>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Footer copyright */}
      <div className="max-w-6xl mx-auto w-full border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-white/40">
        <span>© {new Date().getFullYear()} Roberto Miranda. Recife, PE.</span>
        <span className="font-light uppercase tracking-wider">Frontend Specialist Portfolio</span>
      </div>
    </section>
  );
}

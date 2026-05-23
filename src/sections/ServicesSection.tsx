import FadeIn from '../components/FadeIn';

interface ServicesSectionProps {
  lang: 'pt' | 'en';
}

const servicesPt = [
  {
    num: '01',
    name: 'Desenvolvimento Frontend',
    desc: 'Criação de interfaces modernas, responsivas e altamente interativas usando React, TypeScript e Next.js. Desenvolvimento de componentes limpos e reutilizáveis com Tailwind CSS.',
  },
  {
    num: '02',
    name: 'Desenvolvimento Mobile',
    desc: 'Criação de aplicativos móveis nativos e multiplataforma com Flutter e Android SDK (Kotlin/Java), incluindo sincronização offline e integrações de hardware.',
  },
  {
    num: '03',
    name: 'APIs & Serviços de Backend',
    desc: 'Desenvolvimento de APIs RESTful seguras e escaláveis e lógica de backend com Node.js, Express e bancos de dados estruturados como PostgreSQL, MySQL e SQLite.',
  },
  {
    num: '04',
    name: 'Visualização de Dados',
    desc: 'Transformação de conjuntos de dados brutos e complexos em dashboards analíticos interativos e gráficos impressionantes usando D3.js, Recharts e Tremor.',
  },
  {
    num: '05',
    name: 'Alinhamento UI/UX Design',
    desc: 'Tradução de wireframes complexos, histórias de usuário e designs do Figma em elementos web perfeitos, mantendo consistência de design e microanimações suaves.',
  },
];

const servicesEn = [
  {
    num: '01',
    name: 'Frontend Development',
    desc: 'Crafting modern, responsive, and highly interactive user interfaces using React, TypeScript, and Next.js. Building clean, reusable components with Tailwind CSS.',
  },
  {
    num: '02',
    name: 'Mobile App Development',
    desc: 'Creating intuitive, high-performance cross-platform and native mobile apps using Flutter and Android SDK (Kotlin/Java) with offline sync and hardware integrations.',
  },
  {
    num: '03',
    name: 'APIs & Backend Services',
    desc: 'Developing secure and scalable RESTful APIs and backend logic with Node.js, Express, and structured databases like PostgreSQL, MySQL, and SQLite.',
  },
  {
    num: '04',
    name: 'Data Visualization',
    desc: 'Transforming complex, raw datasets into stunning, interactive analytical dashboards, charts, and heatmaps using D3.js, Recharts, and Tremor.',
  },
  {
    num: '05',
    name: 'UI/UX Design Alignment',
    desc: 'Translating complex wireframes, user stories, and Figma designs into pixel-perfect web elements, maintaining strict design consistency and smooth micro-animations.',
  },
];

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const services = lang === 'pt' ? servicesPt : servicesEn;
  const currentTitle = lang === 'pt' ? 'Serviços' : 'Services';

  return (
    <section
      id="price"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          id="services-heading"
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.8rem, 12vw, 160px)', lineHeight: 1 }}
        >
          {currentTitle}
        </h2>
      </FadeIn>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
                aria-hidden="true"
              >
                {service.num}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col justify-center pt-1 sm:pt-2 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl mt-1"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                    color: '#0C0C0C',
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}

        {/* Bottom border */}
        <div style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }} />
      </div>
    </section>
  );
}

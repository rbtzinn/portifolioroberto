interface LanguageSwitcherProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

export default function LanguageSwitcher({ lang, setLang }: LanguageSwitcherProps) {
  return (
    <div className="fixed bottom-24 right-6 sm:bottom-auto sm:top-6 sm:right-6 z-[150] flex gap-1 p-1 rounded-full border border-white/10 backdrop-blur-md bg-zinc-950/40 select-none shadow-2xl">
      <button
        onClick={() => setLang('pt')}
        className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
          lang === 'pt'
            ? 'bg-[#D7E2EA] text-zinc-950 shadow-lg scale-105'
            : 'text-[#D7E2EA] hover:text-white'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
          lang === 'en'
            ? 'bg-[#D7E2EA] text-zinc-950 shadow-lg scale-105'
            : 'text-[#D7E2EA] hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}

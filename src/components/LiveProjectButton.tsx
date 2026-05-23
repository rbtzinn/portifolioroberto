import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

interface LiveProjectButtonProps {
  lang?: 'pt' | 'en';
  link?: string;
}

export default function LiveProjectButton({ lang = 'pt', link }: LiveProjectButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const text = lang === 'pt' ? 'Ver Projeto' : 'Live Project';

  const modalContent = {
    pt: {
      title: 'Acessar Projeto de Demonstração',
      desc: 'Você será redirecionado(a) para uma nova aba contendo o projeto de demonstração ao vivo. Deseja continuar?',
      cancel: 'Cancelar',
      confirm: 'Sim, continuar',
    },
    en: {
      title: 'Access Live Demo',
      desc: 'You are about to be redirected to a new tab containing the live demonstration project. Do you want to continue?',
      cancel: 'Cancel',
      confirm: 'Yes, continue',
    },
  };

  if (!link) return null;

  const content = modalContent[lang];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm text-center"
      >
        {text}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#0C0C0C] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />
              
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center mt-2">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                  <ExternalLink className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3">
                  {content.title}
                </h3>
                
                <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed mb-8">
                  {content.desc}
                </p>

                <div className="flex flex-col sm:flex-row w-full gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3.5 px-6 rounded-2xl border border-white/10 text-white/70 font-medium uppercase tracking-wider text-xs hover:bg-white/5 hover:text-white transition-all"
                  >
                    {content.cancel}
                  </button>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3.5 px-6 rounded-2xl bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                  >
                    {content.confirm}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

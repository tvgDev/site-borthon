import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".footer-item", 
      { opacity: 0, y: 30, filter: "blur(10px)" },
      { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)", 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power1.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, { scope: footerRef });

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-white font-['Montserrat']">
      
      {/* HEADER */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 lg:px-16 py-8 bg-transparent"
      >
        
        {/* Esquerda: Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <img src="/assets/brand/logo_borthon.png" alt="Borthon Logo" className="w-10 h-10 object-contain" />
          <img src="/assets/brand/header_logo.png" alt="BORTHON" className="h-8 mt-1 object-contain" />
        </div>

        {/* Direita: Menu (Desktop) */}
        <nav className="hidden md:flex gap-8 text-xs font-medium tracking-[0.2em] uppercase text-neutral-300 mt-1 lg:mr-[20%]">
          <a href="#about" className="hover:text-white transition-colors">Quem Somos</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Projetos</a>
          <a href="#gallery" className="hover:text-white transition-colors">Galeria</a>
          <a href="#footer" className="hover:text-white transition-colors">Redes</a>
        </nav>

        {/* Direita: Hamburger (Mobile) */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span 
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} 
            className="w-6 h-[2px] bg-white mb-1.5 block origin-center"
          />
          <motion.span 
            animate={{ opacity: isMenuOpen ? 0 : 1 }} 
            className="w-6 h-[2px] bg-white mb-1.5 block"
          />
          <motion.span 
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} 
            className="w-6 h-[2px] bg-white block origin-center"
          />
        </button>

      </motion.header>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col gap-10 text-xl font-light tracking-[0.3em] uppercase text-center text-neutral-400">
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors"
              >
                Quem Somos
              </motion.a>
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors"
              >
                Projetos
              </motion.a>
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors"
              >
                Galeria
              </motion.a>
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="#footer" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors"
              >
                Redes
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER MINIMALISTA (TEMA CLARO) */}
      <footer 
        id="footer"
        ref={footerRef}
        className="relative bg-[#F9F9F9] py-16 border-t-[6px] border-[#1a1a1a] overflow-hidden"
      >
        
        {/* Background bg2.jpg */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <img src="/assets/bg2.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>

        {/* Container em Grid para alinhar perfeitamente (3 colunas no Desktop) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center px-8 lg:px-16">
          
          {/* Esquerda: Logo */}
          <div className="footer-item flex items-center justify-center md:justify-start gap-4">
            <img src="/assets/brand/logo_borthon.png" alt="Borthon Logo" className="w-16 h-16 lg:w-20 lg:h-20 object-contain invert" />
            <img src="/assets/brand/header_logo.png" alt="BORTHON" className="h-8 lg:h-10 object-contain invert" />
          </div>

          {/* Centro: Contato */}
          <div className="footer-item flex flex-col items-center text-black/80 text-xs lg:text-sm font-medium tracking-widest uppercase text-center gap-1">
            <p className="mb-2 text-black font-semibold">Contato</p>
            <p>contato@borthon.com</p>
            <p>Tel: (19) 99725-7372</p>
            <p className="mt-2">Rua Manoel da Nóbrega, 676</p>
            <p>Paraíso, São Paulo - SP</p>
          </div>

          {/* Direita: Redes Sociais e @BORTHONENG */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="footer-item flex gap-5 text-black">
              {/* X (Twitter) */}
              <a href="#" className="hover:text-neutral-600 transition-colors">
                <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 3.916H5.078z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-neutral-600 transition-colors">
                <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-neutral-600 transition-colors">
                <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.67 2.67 0 0 0-1.884-1.884C18.04 3.84 12 3.84 12 3.84s-6.04 0-7.698.462a2.67 2.67 0 0 0-1.884 1.884C1.956 7.844 1.956 12 1.956 12s0 4.156.462 5.814a2.67 2.67 0 0 0 1.884 1.884C5.96 20.16 12 20.16 12 20.16s6.04 0 7.698-.462a2.67 2.67 0 0 0 1.884-1.884C22.044 16.156 22.044 12 22.044 12s0-4.156-.462-5.814zM9.956 15.115V8.885l5.96 3.115-5.96 3.115z"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="hover:text-neutral-600 transition-colors">
                <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.52 3.25-1.5 4.54-1.01 1.34-2.5 2.22-4.14 2.51-1.74.31-3.57-.02-5.04-1.02-1.45-1-2.43-2.58-2.65-4.3-.23-1.79.25-3.64 1.37-5.02 1.11-1.37 2.74-2.23 4.51-2.43v4.06c-.85.12-1.7.6-2.22 1.25-.51.64-.7 1.5-.54 2.3.17.84.73 1.55 1.48 1.9.77.37 1.72.37 2.47-.04.75-.42 1.24-1.18 1.32-2.04V.02h.85z"/></svg>
              </a>
            </div>
            <span className="footer-item text-lg lg:text-2xl font-semibold uppercase tracking-widest text-black">@BORTHONENG</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="relative text-white py-32 px-8 lg:px-24 overflow-hidden border-t border-white/5">
      
      {/* Imagem de Fundo bg3.jpg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/bg3.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Row 1: MISSÃO (Texto Esquerda, Imagem Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto MISSÃO */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-right lg:pr-12"
          >
            <h3 className="text-2xl font-light tracking-widest uppercase mb-6">Missão</h3>
            <p className="text-neutral-300 font-light leading-relaxed text-lg lg:text-xl">
              Transformar a experiência<br />
              de construir em um processo seguro,<br />
              transparente e bem conduzido,<br />
              entregando obras de alto padrão<br />
              com precisão e confiança.
            </p>
          </motion.div>
          
          {/* Imagem MISSÃO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full aspect-[16/9] bg-[#222] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
          >
            <img src="/assets/portfolio/jml.png" alt="Missão Interior" className="w-full h-full object-cover" />
          </motion.div>

        </div>

        {/* Row 2: VISÃO (Imagem Esquerda, Texto Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem VISÃO (Ordem 1 no desktop, 2 no mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 w-full aspect-[16/9] bg-[#222] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
          >
            <img src="/assets/portfolio/the_gables.png" alt="Visão Interior" className="w-full h-full object-cover" />
          </motion.div>

          {/* Texto VISÃO (Ordem 2 no desktop, 1 no mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col text-left lg:pl-12"
          >
            <h3 className="text-2xl font-light tracking-widest uppercase mb-6">Visão</h3>
            <p className="text-neutral-300 font-light leading-relaxed text-lg lg:text-xl">
              Ser reconhecida como a principal referência<br />
              nacional na execução e gestão de obras<br />
              comerciais, residenciais e corporativas<br />
              de alta complexidade, sendo a escolha<br />
              natural de arquitetos e clientes que<br />
              demandam excelência, exclusividade
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

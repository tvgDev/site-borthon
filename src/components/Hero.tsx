import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0B0B0B] overflow-hidden">
      
      {/* Background Interior (Agora ocupa 100% da tela) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero/bg.png" 
          alt="Interior Borthon" 
          className="w-full h-full object-cover object-[center_65%] opacity-60 grayscale blur-[4px]"
        />
        {/* Máscara de escurecimento pesada */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 w-full h-full flex">
        {/* Esquerda: Textos/Logo */}
        <div className="w-full lg:w-[85%] h-full flex flex-col items-center justify-center px-4">
          
          {/* Logo de Imagem */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            <img 
              src="/assets/hero/hero_logo.png" 
              alt="Borthon Soluções Personalizadas" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>

        {/* Direita: Padrão Lateral (Controle preciso via absolute e right) */}
        {/* Altere o valor de right-[-18px] para mais ou menos pixels conforme necessário */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="hidden lg:block absolute top-0 right-[-18px] w-[15%] h-full"
        >
          <img 
            src="/assets/hero/PNG1.png" 
            alt="Borthon Detalhe Lateral" 
            className="w-full h-full object-cover object-center scale-y-[1.1]"
          />
        </motion.div>
      </div>

    </section>
  );
}

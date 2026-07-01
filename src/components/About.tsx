import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-white text-neutral-900 overflow-hidden">
      
      {/* Background bg2_invertido.jpg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/bg2_invertido.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
      </div>


      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Coluna Esquerda: Imagem com Máscara Zebra */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[60vh] lg:h-auto w-full overflow-hidden"
        >
          {/* Imagem de Fundo da Seção About */}
          <img 
            src="/assets/about/1.jpg" 
            alt="Borthon Engenharia" 
            className="absolute inset-0 w-full h-full object-cover"
          />

        </motion.div>

        {/* Coluna Direita: Textos */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center px-8 py-20 lg:px-24 lg:py-32"
        >
          
          <h2 className="text-5xl lg:text-6xl font-light tracking-[0.15em] uppercase text-neutral-900 mb-12">
            BORTHON
          </h2>
          
          <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base text-justify">
            Borthon é uma empresa de engenharia estratégica comprometida em executar e gerenciar projetos de alto padrão que refletem a essência, os valores e as aspirações de seus clientes. Desde a análise inicial até a entrega final, a Borthon oferece uma experiência completa e exclusiva, onde cada detalhe da obra é cuidadosamente planejado para garantir construções que unem sofisticação, inovação e funcionalidade. A Borthon dedica-se a entender com precisão as necessidades, expectativas e a história de cada cliente, traduzindo essas visões em projetos que valorizam o legado, a qualidade e a singularidade. Cada projeto da Borthon é pensado para criar uma conexão emocional e uma experiência única com os espaços, estabelecendo uma identidade que se destaca pela excelência e pela capacidade de gerar um impacto duradouro no segmento de alto padrão. O objetivo é garantir que cada construção, além de se destacar pela qualidade e inovação, crie experiências imersivas e duradouras, proporcionando aos clientes um legado que vai além da arquitetura, tocando as vidas das pessoas e criando ambientes que resistem ao tempo.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

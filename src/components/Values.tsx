import React from 'react';
import { motion } from 'framer-motion';

export default function Values() {
  const values = [
    {
      title: "Experiência do cliente",
      description: "Colocamos o cliente no centro, garantindo atendimento cuidadoso, atenção, escuta ativa e um acompanhamento próximo em todas as etapas da obra."
    },
    {
      title: "Previsibilidade e controle",
      description: "Garantimos organização, planejamento e acompanhamento rigoroso para dar segurança em prazos, custos e execução."
    },
    {
      title: "Ética e transparência",
      description: "Atuamos com integridade, clareza e responsabilidade em todas as relações, garantindo confiança em cada decisão, orçamento e entrega."
    },
    {
      title: "Excelência na execução",
      description: "Entregamos obras com alto padrão técnico, atenção aos detalhes e rigor na qualidade da mão de obra e dos processos."
    },
    {
      title: "Comprometimento com o que foi prometido",
      description: "Cumprimos acordos e assumimos responsabilidade por cada entrega, garantindo consistência e credibilidade."
    },
    {
      title: "Ambiente de respeito e parceria",
      description: "Construímos relações de respeito dentro e fora da obra, valorizando pessoas e promovendo um ambiente colaborativo e produtivo."
    }
  ];

  return (
    <section className="relative bg-white text-neutral-900 overflow-hidden">
      


      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Coluna Esquerda: Textos dos Valores */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-24 lg:py-32">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-light tracking-[0.15em] uppercase text-neutral-900 mb-12"
          >
            VALORES
          </motion.h2>
          
          <div className="flex flex-col gap-8">
            {values.map((val, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col"
              >
                <h4 className="text-base lg:text-lg text-neutral-800 font-medium mb-1">
                  <span className="mr-2 text-neutral-400">•</span>
                  {val.title}
                </h4>
                <p className="text-neutral-500 font-light text-sm lg:text-base leading-relaxed pl-4">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Coluna Direita: Imagem Preto e Branco com Máscara Zebra */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative h-[60vh] lg:h-auto w-full overflow-hidden bg-white"
        >
          {/* Imagem de Fundo (nova imagem 3.jpg em Preto e Branco) */}
          <img 
            src="/assets/3.jpg" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

        </motion.div>

      </div>
    </section>
  );
}

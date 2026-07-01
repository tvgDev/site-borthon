import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    tl.fromTo(".values-title", 
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power1.out" }
      )
      .fromTo(".value-item", 
        { opacity: 0, x: -30, filter: "blur(5px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", stagger: 0.2, duration: 0.5, ease: "power1.out" }, "-=0.2"
      )
      .fromTo(".values-img", 
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0
      )
      .fromTo(".values-img img", 
        { scale: 1.4 },
        { scale: 1, duration: 1, ease: "power1.out" }, 0
      );
  }, { scope: container });
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
    <section ref={container} className="relative bg-white text-neutral-900 overflow-hidden">
      


      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Coluna Esquerda: Textos dos Valores */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-24 lg:py-32">
          
          <h2 
            className="values-title text-4xl lg:text-5xl font-light tracking-[0.15em] uppercase text-neutral-900 mb-12"
          >
            VALORES
          </h2>
          
          <div className="flex flex-col gap-8">
            {values.map((val, index) => (
              <div 
                key={index} 
                className="value-item flex flex-col"
              >
                <h4 className="text-base lg:text-lg text-neutral-800 font-medium mb-1">
                  <span className="mr-2 text-neutral-400">•</span>
                  {val.title}
                </h4>
                <p className="text-neutral-500 font-light text-sm lg:text-base leading-relaxed pl-4">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Coluna Direita: Imagem Preto e Branco com Máscara Zebra */}
        <div 
          className="values-img relative h-[60vh] lg:h-auto w-full overflow-hidden bg-white"
        >
          {/* Imagem de Fundo (nova imagem 3.jpg em Preto e Branco) */}
          <img 
            src="/assets/3.jpg" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

        </div>

      </div>
    </section>
  );
}

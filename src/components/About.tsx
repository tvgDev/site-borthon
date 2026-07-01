import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Animação da Imagem: Clip-Path (Cortina abrindo) + Zoom-out (Parallax)
    tl.fromTo(".about-left", 
      { clipPath: "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", ease: "power1.inOut" }, 0
    )
    .fromTo(".about-left img", 
      { scale: 1.4 }, 
      { scale: 1, ease: "power1.out" }, 0
    )
    
    // Animação do Texto: Blur In + Subida
    .fromTo(".about-right", 
      { opacity: 0, y: 50, filter: "blur(20px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", ease: "power1.out" }, 0.2
    );
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative bg-white text-neutral-900 overflow-hidden">
      
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
        <div 
          className="about-left relative h-[60vh] lg:h-auto w-full overflow-hidden"
        >
          {/* Imagem de Fundo da Seção About */}
          <img 
            src="/assets/about/1.jpg" 
            alt="Borthon Engenharia" 
            className="absolute inset-0 w-full h-full object-cover"
          />

        </div>

        {/* Coluna Direita: Textos */}
        <div 
          className="about-right flex flex-col justify-center px-8 py-20 lg:px-24 lg:py-32"
        >
          
          <h2 className="text-5xl lg:text-6xl font-light tracking-[0.15em] uppercase text-neutral-900 mb-12">
            BORTHON
          </h2>
          
          <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base text-justify">
            Borthon é uma empresa de engenharia estratégica comprometida em executar e gerenciar projetos de alto padrão que refletem a essência, os valores e as aspirações de seus clientes. Desde a análise inicial até a entrega final, a Borthon oferece uma experiência completa e exclusiva, onde cada detalhe da obra é cuidadosamente planejado para garantir construções que unem sofisticação, inovação e funcionalidade. A Borthon dedica-se a entender com precisão as necessidades, expectativas e a história de cada cliente, traduzindo essas visões em projetos que valorizam o legado, a qualidade e a singularidade. Cada projeto da Borthon é pensado para criar uma conexão emocional e uma experiência única com os espaços, estabelecendo uma identidade que se destaca pela excelência e pela capacidade de gerar um impacto duradouro no segmento de alto padrão. O objetivo é garantir que cada construção, além de se destacar pela qualidade e inovação, crie experiências imersivas e duradouras, proporcionando aos clientes um legado que vai além da arquitetura, tocando as vidas das pessoas e criando ambientes que resistem ao tempo.
          </p>

        </div>

      </div>
    </section>
  );
}

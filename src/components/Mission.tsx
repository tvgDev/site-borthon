import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Missão: Texto
    tl.fromTo(".mission-text-1", 
      { opacity: 0, y: 50, filter: "blur(15px)", rotateX: -10 },
      { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0, duration: 1, ease: "power1.out" }, 0
    )
    // Missão: Imagem
    .fromTo(".mission-img-1", 
      { clipPath: "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0.2
    )
    .fromTo(".mission-img-1 img", 
      { scale: 1.4 },
      { scale: 1, duration: 1, ease: "power1.out" }, 0.2
    )

    // Visão: Imagem
    .fromTo(".mission-img-2", 
      { clipPath: "inset(0% 0% 0% 100%)" }, // Cortina vindo da direita
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0.5
    )
    .fromTo(".mission-img-2 img", 
      { scale: 1.4 },
      { scale: 1, duration: 1, ease: "power1.out" }, 0.5
    )
    // Visão: Texto
    .fromTo(".mission-text-2", 
      { opacity: 0, y: 50, filter: "blur(15px)", rotateX: -10 },
      { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0, duration: 1, ease: "power1.out" }, 0.7
    );

  }, { scope: container });

  return (
    <section ref={container} className="relative text-white py-32 px-8 lg:px-24 overflow-hidden border-t border-white/5">
      
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
          <div 
            className="mission-text-1 flex flex-col text-right lg:pr-12"
          >
            <h3 className="text-2xl font-light tracking-widest uppercase mb-6">Missão</h3>
            <p className="text-neutral-300 font-light leading-relaxed text-lg lg:text-xl">
              Transformar a experiência<br />
              de construir em um processo seguro,<br />
              transparente e bem conduzido,<br />
              entregando obras de alto padrão<br />
              com precisão e confiança.
            </p>
          </div>
          
          {/* Imagem MISSÃO */}
          <div 
            className="mission-img-1 w-full aspect-[16/9] bg-[#222] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
          >
            <img src="/assets/portfolio/jml.png" alt="Missão Interior" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Row 2: VISÃO (Imagem Esquerda, Texto Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem VISÃO (Ordem 1 no desktop, 2 no mobile) */}
          <div 
            className="mission-img-2 order-2 lg:order-1 w-full aspect-[16/9] bg-[#222] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
          >
            <img src="/assets/portfolio/the_gables.png" alt="Visão Interior" className="w-full h-full object-cover" />
          </div>

          {/* Texto VISÃO (Ordem 2 no desktop, 1 no mobile) */}
          <div 
            className="mission-text-2 order-1 lg:order-2 flex flex-col text-left lg:pl-12"
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
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Main
    tl.fromTo(".gallery-main", { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0)
      .fromTo(".gallery-main > img", { scale: 1.4 }, { scale: 1, duration: 1, ease: "power1.out" }, 0)
      
    // Top Right
      .fromTo(".gallery-top-right", { clipPath: "inset(0% 0% 0% 100%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0.2)
      .fromTo(".gallery-top-right img", { scale: 1.4 }, { scale: 1, duration: 1, ease: "power1.out" }, 0.2)
      
    // Bottom Right
      .fromTo(".gallery-bot-right", { clipPath: "inset(0% 0% 0% 100%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0.4)
      .fromTo(".gallery-bot-right img", { scale: 1.4 }, { scale: 1, duration: 1, ease: "power1.out" }, 0.4)
      
    // Overlay Bottom Right of Main
      .fromTo(".gallery-overlay", { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0.4)
      .fromTo(".gallery-overlay img", { scale: 1.4 }, { scale: 1, duration: 1, ease: "power1.out" }, 0.4);
  }, { scope: container });

  return (
    <section id="gallery" ref={container} className="w-full flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:h-[90vh]">
      
      {/* Bloco Esquerdo Principal (Mobile: altura fixa, Desktop: 2 colunas e 2 linhas) */}
      <div 
        className="gallery-main h-[50vh] lg:h-auto lg:col-span-2 lg:row-span-2 relative"
      >
        <img 
          src="/assets/gallery/image_1.png" 
          alt="Gallery Image 1" 
          className="w-full h-full object-cover" 
        />
        
        {/* Imagem Sobreposta (Canto inferior direito) */}
        <div 
          className="gallery-overlay absolute bottom-0 right-0 w-1/2 h-1/2 border-t-4 border-l-4 border-transparent"
        >
          <img 
            src="/assets/gallery/image_2.png" 
            alt="Gallery Image 2" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Bloco Direito Cima (Mobile: altura fixa, Desktop: 1 linha) */}
      <div 
        className="gallery-top-right h-[30vh] lg:h-auto lg:col-span-2 lg:row-span-1 lg:border-l-4 lg:border-transparent mt-1 lg:mt-0"
      >
        <img 
          src="/assets/gallery/image_3.png" 
          alt="Gallery Image 3" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Bloco Direito Baixo (Mobile: altura fixa, Desktop: 1 linha) */}
      <div 
        className="gallery-bot-right h-[30vh] lg:h-auto lg:col-span-2 lg:row-span-1 lg:border-t-4 lg:border-l-4 lg:border-transparent mt-1 lg:mt-0"
      >
        <img 
          src="/assets/gallery/image_4.png" 
          alt="Gallery Image 4" 
          className="w-full h-full object-cover" 
        />
      </div>

    </section>
  );
}

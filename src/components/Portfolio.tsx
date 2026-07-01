import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const container = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".portfolio-item");

    items.forEach((item: any) => {
      const title = item.querySelector("h4");
      const imgWrapper = item.querySelector(".img-wrapper");
      const img = item.querySelector("img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      tl.fromTo(imgWrapper, 
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power1.inOut" }, 0
      )
      .fromTo(img, 
        { scale: 1.4 },
        { scale: 1, duration: 1, ease: "power1.out" }, 0
      )
      .fromTo(title, 
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power1.out" }, 0.2
      );
    });
  }, { scope: container });
  const projects = [
    { title: "THE GABLES", image: "/assets/portfolio/the_gables.png" },
    { title: "PEGASUS", image: "/assets/portfolio/pegasus.png" },
    { title: "JML", image: "/assets/portfolio/jml.png" },
    { title: "ALAMEDA FRANCA", image: "/assets/portfolio/alameda_franca.png" },
    { title: "OFFICINA 7", image: "/assets/portfolio/officina_7.png" },
    { title: "MIRAGE 32", image: "/assets/portfolio/mirage_32.png" },
  ];

  return (
    <section id="portfolio" ref={container} className="relative bg-[#F9F9F9] text-neutral-900 py-20 px-8 lg:px-16 overflow-hidden">
      
      {/* Background bg2.jpg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/bg2.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
      </div>


      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Grid do Portfólio: 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="portfolio-item flex flex-col items-center"
            >
              
              {/* Título Acima da Imagem */}
              <h4 className="text-sm lg:text-base font-light tracking-[0.1em] text-neutral-700 uppercase mb-6">
                {project.title}
              </h4>
              
              {/* Imagem do Projeto (Altamente Arredondada e Quadrada) */}
              <div className="img-wrapper w-full aspect-square bg-[#E5E5E5] rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden shadow-sm">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

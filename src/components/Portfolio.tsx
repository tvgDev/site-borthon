import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    { title: "THE GABLES", image: "/assets/portfolio/the_gables.png" },
    { title: "PEGASUS", image: "/assets/portfolio/pegasus.png" },
    { title: "JML", image: "/assets/portfolio/jml.png" },
    { title: "ALAMEDA FRANCA", image: "/assets/portfolio/alameda_franca.png" },
    { title: "OFFICINA 7", image: "/assets/portfolio/officina_7.png" },
    { title: "MIRAGE 32", image: "/assets/portfolio/mirage_32.png" },
  ];

  return (
    <section id="portfolio" className="relative bg-[#F9F9F9] text-neutral-900 py-20 px-8 lg:px-16 overflow-hidden">
      
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
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              
              {/* Título Acima da Imagem */}
              <h4 className="text-sm lg:text-base font-light tracking-[0.1em] text-neutral-700 uppercase mb-6">
                {project.title}
              </h4>
              
              {/* Imagem do Projeto (Altamente Arredondada e Quadrada) */}
              <div className="w-full aspect-square bg-[#E5E5E5] rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden shadow-sm">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

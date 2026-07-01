import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "THE GABLES 191",
    details: [
      { label: "Local", value: "Higienópolis - SP" },
      { label: "Metragem", value: "345 M²" },
      { label: "Tempo de obra", value: "8 meses" }
    ],
    image: "/assets/projects/the_gables.png"
  },
  {
    title: "STUDIO PEGASUS PILATES",
    details: [
      { label: "Local", value: "Vila Nova Conceição - SP" },
      { label: "Metragem", value: "500 M²" },
      { label: "Tempo de obra", value: "6 meses" },
      { label: "Arquitetura", value: "Greta Arquitetura" }
    ],
    image: "/assets/projects/pegasus.png"
  },
  {
    title: "JML 62",
    details: [
      { label: "Local", value: "Jardim Paulista - SP" },
      { label: "Metragem", value: "250 M²" },
      { label: "Tempo de obra", value: "em andamento" },
      { label: "Arquitetura", value: "Giovanna Mangiocca" }
    ],
    image: "/assets/projects/jml.png"
  },
  {
    title: "ALF 729",
    details: [
      { label: "Local", value: "Jardim Paulista - SP" },
      { label: "Metragem", value: "630 M²" },
      { label: "Tempo de obra", value: "8 meses" },
      { label: "Arquitetura", value: "Greta arquitetura" }
    ],
    image: "/assets/projects/alameda_franca.png"
  },
  {
    title: "OFFICINA 7",
    details: [
      { label: "Local", value: "Cerqueira César - SP" },
      { label: "Metragem", value: "120 M²" },
      { label: "Tempo de obra", value: "45 dias" },
      { label: "Arquitetura", value: "Luci Correa & Eliane Medeiros" }
    ],
    image: "/assets/projects/officina_7.png"
  },
  {
    title: "MIRAGE 32",
    details: [
      { label: "Local", value: "Perdizes - SP" },
      { label: "Metragem", value: "315 M²" },
      { label: "Tempo de obra", value: "em andamento" },
      { label: "Arquitetura", value: "Luciano Coelho Estúdio de Arquitetura" }
    ],
    image: "/assets/projects/mirage_32.png"
  }
];

export default function ProjectsDetail() {
  // Dividir os projetos em pares (chunks de 2)
  const chunks = [];
  for (let i = 0; i < projects.length; i += 2) {
    chunks.push(projects.slice(i, i + 2));
  }

  return (
    <>
      {chunks.map((pair, chunkIndex) => {
        // Intercalar: Preto (0), Branco (1), Preto (2)
        const isDark = chunkIndex % 2 === 0;
        
        // Cores baseadas no tema da seção
        const sectionBg = isDark ? "bg-transparent" : "bg-[#F9F9F9]";
        const textColor = isDark ? "text-white" : "text-neutral-900";
        const subtitleColor = isDark ? "text-neutral-300" : "text-neutral-600";
        const borderColor = isDark ? "border-white/5" : "border-black/5";
        const imgBg = isDark ? "bg-[#1a1a1a]" : "bg-neutral-200";

        return (
          <section key={chunkIndex} className={`relative ${sectionBg} ${textColor} py-24 overflow-hidden`}>
            
            {/* Background image baseada no tema da seção */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src={isDark ? "/assets/bg3.jpg" : "/assets/bg2.jpg"} 
                alt="Background" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-24 px-8 lg:px-16">
              
              {pair.map((project, idx) => {
                // O índice global determina se a imagem fica na esquerda ou direita
                const globalIndex = chunkIndex * 2 + idx;
                const isEven = globalIndex % 2 === 0;

                return (
                  <div 
                    key={globalIndex} 
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    
                    {/* Bloco de Texto */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`w-full lg:w-1/3 flex flex-col justify-center ${isEven ? 'text-left lg:text-right' : 'text-left'} order-2 lg:order-none`}
                    >
                      <h3 className={`text-2xl font-medium tracking-wider uppercase mb-4 ${textColor}`}>
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-col gap-1">
                        {project.details.map((detail, dIndex) => (
                          <p key={dIndex} className={`${subtitleColor} font-light text-lg`}>
                            {detail.label}: {detail.value}
                          </p>
                        ))}
                      </div>
                    </motion.div>

                    {/* Imagem (Colagem) */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className={`w-full lg:w-2/3 order-1 lg:order-none rounded-[3rem] overflow-hidden shadow-2xl border ${borderColor} ${imgBg} h-[300px] lg:h-[380px]`}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>

                  </div>
                );
              })}

            </div>
          </section>
        );
      })}
    </>
  );
}

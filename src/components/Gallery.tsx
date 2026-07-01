import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section id="gallery" className="w-full flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:h-[90vh]">
      
      {/* Bloco Esquerdo Principal (Mobile: altura fixa, Desktop: 2 colunas e 2 linhas) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[50vh] lg:h-auto lg:col-span-2 lg:row-span-2 relative"
      >
        <img 
          src="/assets/gallery/image_1.png" 
          alt="Gallery Image 1" 
          className="w-full h-full object-cover" 
        />
        
        {/* Imagem Sobreposta (Canto inferior direito) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t-4 border-l-4 border-transparent"
        >
          <img 
            src="/assets/gallery/image_2.png" 
            alt="Gallery Image 2" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </motion.div>

      {/* Bloco Direito Cima (Mobile: altura fixa, Desktop: 1 linha) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="h-[30vh] lg:h-auto lg:col-span-2 lg:row-span-1 lg:border-l-4 lg:border-transparent mt-1 lg:mt-0"
      >
        <img 
          src="/assets/gallery/image_3.png" 
          alt="Gallery Image 3" 
          className="w-full h-full object-cover" 
        />
      </motion.div>

      {/* Bloco Direito Baixo (Mobile: altura fixa, Desktop: 1 linha) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="h-[30vh] lg:h-auto lg:col-span-2 lg:row-span-1 lg:border-t-4 lg:border-l-4 lg:border-transparent mt-1 lg:mt-0"
      >
        <img 
          src="/assets/gallery/image_4.png" 
          alt="Gallery Image 4" 
          className="w-full h-full object-cover" 
        />
      </motion.div>

    </section>
  );
}

import React from 'react';
import { LazyImage } from './LazyImage';

export const Products: React.FC = () => {
  return (
    <section id="produtos" className="bg-[#f0f0f0] py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
             <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full border-2 border-digli-black transform translate-x-4 translate-y-4"></div>
                <div className="relative z-10 shadow-lg">
                  <LazyImage 
                    src="https://picsum.photos/id/20/800/800" 
                    alt="Álbum Fine Art" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-digli-black mb-6">
              Boutique de <br/>
              <span className="text-gray-400 italic">Memórias</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 font-light">
              Sua história merece sair da tela do celular. Nossos álbuns são produzidos manualmente com materiais de conservação museológica.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-digli-gold rounded-full"></span>
                <span className="text-gray-600">Álbuns Panorâmicos em Linho</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-digli-gold rounded-full"></span>
                <span className="text-gray-600">Quadros com vidro anti-reflexo</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-digli-gold rounded-full"></span>
                <span className="text-gray-600">Caixas Personalizadas em Madeira</span>
              </li>
            </ul>

            <a href="#contato" className="inline-block bg-digli-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-digli-gold hover:text-digli-black transition-all duration-300">
              Quero Tangibilizar meu Legado
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
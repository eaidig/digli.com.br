import React from 'react';
import { ArrowDown } from 'lucide-react';
import { LazyImage } from './LazyImage';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-digli-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LazyImage 
          src="https://picsum.photos/id/1027/1920/1080?grayscale" 
          alt="Momento emocional em família" 
          className="w-full h-full object-cover opacity-60"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-digli-black via-digli-black/40 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center mt-10">
        
        {/* Brand Stamp */}
        <div className="mb-6 flex justify-center">
          <img 
            src="https://digli.com.br/logo_digli_redondo.png" 
            alt="DigLi Estúdio Logo" 
            className="w-20 h-20 md:w-24 md:h-24 opacity-90 drop-shadow-lg"
          />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
          <span className="text-digli-gold text-5xl md:text-7xl lg:text-8xl font-light inline-block transform -translate-y-2">[</span>
          <span className="mx-4">Transformamos momentos em legado</span>
          <span className="text-digli-gold text-5xl md:text-7xl lg:text-8xl font-light inline-block transform -translate-y-2">]</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide mb-10">
          Fotografia com alma, guiada por <span className="text-white font-medium">Rodrigo</span> e <span className="text-white font-medium">Lilian Fontoura</span>.
        </p>

        <div className="flex justify-center">
          <a 
            href="#sobre" 
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-digli-gold transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Descubra</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
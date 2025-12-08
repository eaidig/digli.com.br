import React from 'react';
import { SERVICES } from '../constants';
import { Camera, Heart, Briefcase } from 'lucide-react';
import { LazyImage } from './LazyImage';

const icons = {
  heart: Heart,
  briefcase: Briefcase,
  frame: Camera
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="bg-digli-black py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Áreas de <span className="text-digli-gold">Atuação</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cada sessão é única e planejada exclusivamente para o seu momento de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = icons[service.iconName];
            return (
              <div key={service.id} className="group relative bg-[#1a1a1a] border border-gray-800 hover:border-digli-gold transition-all duration-500 overflow-hidden rounded-sm h-96">
                
                {/* Image Background (Hidden initially, visible on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0">
                  <LazyImage 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-black border border-gray-700 flex items-center justify-center mb-6 group-hover:border-digli-gold group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-white group-hover:text-digli-gold" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-digli-gold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <span className="text-xs font-bold text-digli-gold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Saiba Mais
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
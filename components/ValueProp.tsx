import React from 'react';
import { Heart } from 'lucide-react';
import { LazyImage } from './LazyImage';

export const ValueProp: React.FC = () => {
  return (
    <section id="sobre" className="bg-digli-white text-digli-black py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-digli-gold"></span>
              <span className="uppercase text-sm font-bold tracking-widest text-gray-500">Nossa Filosofia</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Mais que pixels,<br />
              <span className="text-digli-gold relative inline-block">
                Curadoria de Memórias
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-digli-gold opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Vivemos em um mundo onde todos fotografam tudo, mas poucas imagens sobrevivem ao tempo. No DigLi Estúdio, nós paramos o relógio.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Nossa missão não é apenas clicar o obturador, mas criar um ambiente de 
              <span className="inline-flex items-center gap-1 mx-1 font-bold text-digli-black">
                Afeto <Heart size={14} className="text-digli-gold fill-digli-gold" />
              </span> 
              e 
              <span className="inline-flex items-center gap-1 mx-1 font-bold text-digli-black">
                Cuidado
              </span>,
              onde sua verdadeira essência possa se revelar. Entregamos heranças visuais para as próximas gerações.
            </p>

            <a href="#servicos" className="text-digli-black font-bold border-b-2 border-digli-gold hover:text-digli-gold transition-colors inline-block pb-1">
              Conheça nossos serviços
            </a>
          </div>

          {/* Image/Visual */}
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <div className="relative z-10 shadow-2xl rounded overflow-hidden">
              <LazyImage 
                src="https://picsum.photos/id/453/600/600" 
                alt="Rodrigo e Lilian trabalhando" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Brackets behind image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-digli-gold z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-digli-gold z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { EXPERIENCE_STEPS } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-digli-gold font-bold tracking-widest uppercase text-sm">O Diferencial</span>
          <h2 className="text-3xl md:text-4xl font-serif text-digli-black mt-2">A Experiência DigLi</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {EXPERIENCE_STEPS.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                {/* Number Bubble */}
                <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 relative group">
                   <span className="text-4xl font-serif font-bold text-gray-300 group-hover:text-digli-gold transition-colors duration-300">
                     {step.step}
                   </span>
                   {/* Active ring effect */}
                   <div className="absolute inset-0 rounded-full border border-digli-gold scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                <h3 className="text-xl font-bold text-digli-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base px-4">
                  {step.description}
                </p>

                {step.step === 2 && (
                  <span className="mt-4 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                    Destaque: Direção Completa
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-500 italic">"Você não precisa saber posar. Você só precisa estar lá."</p>
        </div>
      </div>
    </section>
  );
};
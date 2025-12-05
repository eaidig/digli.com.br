import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';
import { X, Quote } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openModal = (item: PortfolioItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section id="portfolio" className="bg-digli-black py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12 border-b border-gray-800 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Histórias <span className="text-digli-gold italic">Reais</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Clique na foto para ler a memória por trás do clique.</p>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative cursor-pointer overflow-hidden aspect-[3/4] md:aspect-auto"
              onClick={() => openModal(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-digli-gold text-xs font-bold uppercase tracking-widest mb-1 block">
                  [{item.category}]
                </span>
                <h3 className="text-white text-xl font-serif font-medium group-hover:text-digli-gold transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Storytelling Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="relative bg-white w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-3/5 h-[40vh] md:h-auto">
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#FDFDFD]">
              <span className="text-digli-gold font-bold uppercase tracking-widest text-xs mb-4">
                {selectedItem.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-digli-black mb-6 leading-tight">
                {selectedItem.title}
              </h3>
              
              <div className="relative">
                <Quote className="text-gray-200 absolute -top-4 -left-4 w-12 h-12 transform -scale-x-100" />
                <p className="text-gray-600 leading-relaxed italic relative z-10 text-lg">
                  "{selectedItem.story}"
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button 
                  onClick={closeModal} 
                  className="text-sm font-bold text-digli-black hover:text-digli-gold transition-colors uppercase tracking-wider"
                >
                  Fechar História
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
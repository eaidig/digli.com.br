import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '555199272928';
    const message = encodeURIComponent('Olá! Vim através do site e gostaria de saber mais informações.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-digli-gold selection:text-digli-black">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ValueProp />
        <Services />
        <Experience />
        <Portfolio />
        <Products />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-digli-gold text-digli-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2} />
        <span className="absolute right-full mr-3 bg-white text-digli-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Agende sua experiência
        </span>
      </button>
    </div>
  );
};

export default App;
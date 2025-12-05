import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-digli-black/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="block cursor-pointer">
          <img 
            src="https://digli.com.br/logo-digli-estudio-fotografico-esteio-letra-branca.png" 
            alt="DigLi Estúdio" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-digli-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-digli-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-digli-gold text-digli-black px-6 py-2 text-sm font-bold uppercase tracking-wide rounded hover:bg-white transition-colors duration-300"
          >
            Agendar Experiência
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-digli-black border-t border-gray-800 p-6 flex flex-col gap-6 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg text-center text-white hover:text-digli-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-digli-gold text-digli-black px-6 py-3 text-center font-bold uppercase rounded"
          >
            Agendar Experiência
          </a>
        </div>
      )}
    </header>
  );
};
import React from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/555199272928?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <footer id="contato" className="bg-digli-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="mb-4">
              <img 
                src="https://digli.com.br/logo-digli-estudio-fotografico-esteio-letra-branca.png" 
                alt="DigLi Estúdio" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fotografia afetiva para quem entende que o tempo passa rápido, mas as memórias podem ser eternas.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/digliestudiofotografico" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-digli-gold hover:bg-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/DigLiEstudioFotografico/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-digli-gold hover:bg-black transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-digli-gold font-bold uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                <MapPin size={20} className="text-digli-gold shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/WZQBdNY8sR9TH9jy9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group-hover:text-digli-gold transition-colors"
                >
                  Centro, Esteio - RS<br/>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400">Atendemos Canoas e Porto Alegre</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={20} className="text-digli-gold shrink-0" />
                <a href="tel:+555199272928" className="hover:text-digli-gold transition-colors">
                  (51) 9927-2928
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={20} className="text-digli-gold shrink-0" />
                <a href="mailto:contato@digliestudio.com.br" className="hover:text-digli-gold transition-colors">
                  contato@digliestudio.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-digli-gold font-bold uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-gray-400 hover:text-digli-gold transition-colors">O Estúdio</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-digli-gold transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-digli-gold transition-colors">Portfólio</a></li>
              <li><a href="#produtos" className="text-gray-400 hover:text-digli-gold transition-colors">Produtos</a></li>
            </ul>
          </div>

          {/* CTA Area */}
          <div className="space-y-6">
             <h3 className="text-digli-gold font-bold uppercase tracking-wider text-sm">Vamos conversar?</h3>
             <p className="text-gray-500 text-sm">
               Agende uma visita ao nosso estúdio e venha tomar um café conosco.
             </p>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-center border border-digli-gold text-digli-gold py-3 font-bold hover:bg-digli-gold hover:text-digli-black transition-all">
               Chamar no WhatsApp
             </a>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} DigLi Estúdio Fotográfico. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Desenvolvido com <Heart size={10} className="inline text-digli-gold mx-1" /> para memórias eternas.
          </p>
        </div>
      </div>
    </footer>
  );
};
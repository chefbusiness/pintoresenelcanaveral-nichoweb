import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pintores El Cañaveral</h3>
            <p className="text-gray-400 mb-4">
              Servicios profesionales de pintura en El Cañaveral, Madrid y alrededores.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Servicios Particulares</h3>
            <div className="space-y-2 text-gray-400">
              <p><Link to="/servicios/garajes" className="hover:text-white transition-colors">Pintores de Garajes</Link></p>
              <p><Link to="/servicios/fachadas" className="hover:text-white transition-colors">Pintores de Fachadas</Link></p>
              <p><Link to="/servicios/comunidades" className="hover:text-white transition-colors">Pintores de Comunidades</Link></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:744717942">744 717 942</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@pintoreselcanaveral.pro">info@pintoreselcanaveral.pro</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                El Cañaveral, Madrid - 28052
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <div className="space-y-2 text-gray-400">
              <p><Link to="/" className="hover:text-white transition-colors">Inicio</Link></p>
              <p><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></p>
              <p><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></p>
              <p>
                <a 
                  href="https://blog.pintoreselcanaveral.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Pintores El Cañaveral. Todos los derechos reservados.</span>
            <span className="flex items-center gap-1">
              Desarrollado con muchos <Coffee size={16} className="inline" /> por{' '}
              <a 
                href="https://localseoads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LocalSEOAds.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const MobileMenu = ({ isOpen, onLinkClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="px-4 py-3 space-y-3">
          <Link 
            to="/" 
            className="block font-medium hover:text-primary transition-colors"
            onClick={onLinkClick}
          >
            Inicio
          </Link>
          <div className="space-y-2">
            <div className="font-medium">Servicios</div>
            <Link to="/servicios/pintura-garajes" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Garajes
            </Link>
            <Link to="/servicios/pintura-fachadas" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Fachadas
            </Link>
            <Link to="/servicios/pintura-comunidades" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Comunidades
            </Link>
            <Link to="/servicios/pintura-oficinas" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Oficinas
            </Link>
            <Link to="/servicios/pintura-comercial" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Locales Comerciales
            </Link>
            <Link to="/servicios/pintura-industrial" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Naves Industriales
            </Link>
            <Link to="/servicios/pintura-restaurantes" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Restaurantes
            </Link>
            <Link to="/servicios/pintura-apartamentos" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Pisos
            </Link>
            <Link to="/servicios/pintura-casas" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Viviendas
            </Link>
            <Link to="/servicios/pintura-adosados" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Adosados
            </Link>
            <Link to="/servicios/pintura-chalets" className="block pl-4 py-2 hover:text-primary" onClick={onLinkClick}>
              Pintores de Chalets
            </Link>
          </div>
          <a 
            href="https://blog.pintoreselcanaveral.pro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block font-medium hover:text-primary transition-colors"
            onClick={onLinkClick}
          >
            Blog
          </a>
          <Link 
            to="/contacto" 
            className="block btn-primary text-center"
            onClick={onLinkClick}
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MobileMenu;
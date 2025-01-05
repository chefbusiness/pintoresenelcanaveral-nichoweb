import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DesktopServicesMenuProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  onLinkClick: () => void;
}

const DesktopServicesMenu = ({ isOpen, onOpenChange, onLinkClick }: DesktopServicesMenuProps) => {
  return (
    <NavigationMenu 
      value={isOpen ? "open" : undefined}
      onValueChange={(value) => onOpenChange(value === "open")}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className="h-[400px]">
              <div className="grid w-[400px] gap-3 p-4 bg-white border rounded-lg shadow-lg">
                <Link to="/servicios/pintura-garajes" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Garajes
                </Link>
                <Link to="/servicios/pintura-fachadas" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Fachadas
                </Link>
                <Link to="/servicios/pintura-comunidades" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Comunidades
                </Link>
                <Link to="/servicios/pintura-oficinas" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Oficinas
                </Link>
                <Link to="/servicios/pintura-comercial" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Locales Comerciales
                </Link>
                <Link to="/servicios/pintura-industrial" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Naves Industriales
                </Link>
                <Link to="/servicios/pintura-restaurantes" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Restaurantes
                </Link>
                <Link to="/servicios/pintura-apartamentos" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Pisos
                </Link>
                <Link to="/servicios/pintura-casas" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Viviendas
                </Link>
                <Link to="/servicios/pintura-adosados" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Adosados
                </Link>
                <Link to="/servicios/pintura-chalets" className="block p-3 hover:bg-gray-100 rounded-lg" onClick={onLinkClick}>
                  Pintores de Chalets
                </Link>
              </div>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopServicesMenu;
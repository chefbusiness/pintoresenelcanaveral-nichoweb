import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-primary">
            Pintores El Cañaveral
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg md:hidden`}>
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <div className="px-4 py-3 space-y-3">
                <Link 
                  to="/" 
                  className="block font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Inicio
                </Link>
                <div className="space-y-2">
                  <div className="font-medium">Servicios</div>
                  <Link 
                    to="/servicios/garajes" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Garajes
                  </Link>
                  <Link 
                    to="/servicios/fachadas" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Fachadas
                  </Link>
                  <Link 
                    to="/servicios/comunidades" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Comunidades
                  </Link>
                  <Link 
                    to="/servicios/oficinas" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Oficinas
                  </Link>
                  <Link 
                    to="/servicios/locales" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Locales Comerciales
                  </Link>
                  <Link 
                    to="/servicios/naves" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Naves Industriales
                  </Link>
                  <Link 
                    to="/servicios/restaurantes" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Restaurantes
                  </Link>
                  <Link 
                    to="/servicios/pisos" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Pisos
                  </Link>
                  <Link 
                    to="/servicios/viviendas" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Viviendas
                  </Link>
                  <Link 
                    to="/servicios/adosados" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Adosados
                  </Link>
                  <Link 
                    to="/servicios/chalets" 
                    className="block pl-4 py-2 hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Pintores de Chalets
                  </Link>
                </div>
                <Link 
                  to="/contacto" 
                  className="block btn-primary text-center"
                  onClick={handleLinkClick}
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </ScrollArea>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ScrollArea className="h-[400px]">
                      <div className="grid w-[400px] gap-3 p-4 bg-white border rounded-lg shadow-lg">
                        <Link to="/servicios/garajes" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Garajes
                        </Link>
                        <Link to="/servicios/fachadas" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Fachadas
                        </Link>
                        <Link to="/servicios/comunidades" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Comunidades
                        </Link>
                        <Link to="/servicios/oficinas" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Oficinas
                        </Link>
                        <Link to="/servicios/locales" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Locales Comerciales
                        </Link>
                        <Link to="/servicios/naves" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Naves Industriales
                        </Link>
                        <Link to="/servicios/restaurantes" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Restaurantes
                        </Link>
                        <Link to="/servicios/pisos" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Pisos
                        </Link>
                        <Link to="/servicios/viviendas" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Viviendas
                        </Link>
                        <Link to="/servicios/adosados" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Adosados
                        </Link>
                        <Link to="/servicios/chalets" className="block p-3 hover:bg-gray-100 rounded-lg">
                          Pintores de Chalets
                        </Link>
                      </div>
                    </ScrollArea>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/contacto" className="btn-primary">
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
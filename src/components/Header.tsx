import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-primary">
            Pintores El Cañaveral
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
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
                    </div>
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
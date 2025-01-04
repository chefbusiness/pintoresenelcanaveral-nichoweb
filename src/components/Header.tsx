import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import MobileMenu from './header/MobileMenu';
import DesktopServicesMenu from './header/DesktopServicesMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
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
          <MobileMenu isOpen={isMenuOpen} onLinkClick={handleLinkClick} />

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <DesktopServicesMenu 
              isOpen={isServicesOpen}
              onOpenChange={setIsServicesOpen}
              onLinkClick={handleLinkClick}
            />
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
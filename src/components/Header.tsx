import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-primary">
            Pintores El Cañaveral
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Inicio</Link>
            <Link to="/servicios" className="font-medium hover:text-primary transition-colors">Servicios</Link>
            <Link to="/contacto" className="btn-primary">Solicitar Presupuesto</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import { SprayCanIcon, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExteriorPaintingSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
        <img 
          src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg" 
          alt="Pintura exterior profesional"
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="order-1 md:order-2 space-y-6">
        <div className="flex items-center gap-3">
          <SprayCanIcon className="text-primary h-8 w-8" />
          <h2 className="text-3xl font-bold">Pintura Exterior</h2>
        </div>
        <p className="text-gray-600">
          Protegemos y embellecemos las fachadas con materiales de alta calidad resistentes a la intemperie.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Pintura de fachadas
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Impermeabilización
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Reparación de grietas
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Tratamientos anti-humedad
          </li>
        </ul>
        <Link to="/contacto" className="btn-primary inline-block">
          Solicitar Presupuesto
        </Link>
      </div>
    </div>
  );
};

export default ExteriorPaintingSection;
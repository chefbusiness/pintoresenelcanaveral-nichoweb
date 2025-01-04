import { PaintBucket, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteriorPaintingSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <PaintBucket className="text-primary h-8 w-8" />
          <h2 className="text-3xl font-bold">Pintura Interior</h2>
        </div>
        <p className="text-gray-600">
          Transformamos los espacios interiores de tu hogar o negocio con acabados profesionales y duraderos.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Pintura de paredes y techos
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Tratamiento de humedades
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Alisado de paredes
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Aplicación de esmaltes
          </li>
        </ul>
        <Link to="/contacto" className="btn-primary inline-block">
          Solicitar Presupuesto
        </Link>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src="https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg" 
          alt="Pintura interior profesional"
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default InteriorPaintingSection;
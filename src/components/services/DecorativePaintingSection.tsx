import { Palette, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

const DecorativePaintingSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Palette className="text-primary h-8 w-8" />
          <h2 className="text-3xl font-bold">Pintura Decorativa</h2>
        </div>
        <p className="text-gray-600">
          Creamos ambientes únicos con técnicas decorativas especiales y acabados personalizados.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Efectos decorativos
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Papel pintado
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Veladuras
          </li>
          <li className="flex items-center gap-2">
            <Brush className="text-primary h-5 w-5" />
            Estuco veneciano
          </li>
        </ul>
        <Link to="/contacto" className="btn-primary inline-block">
          Solicitar Presupuesto
        </Link>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg" 
          alt="Pintura decorativa profesional"
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default DecorativePaintingSection;
import { PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';

const HousesServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestros Servicios para Viviendas</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Servicios Incluidos</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Pintura de interiores</span>
              </li>
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Pintura de exteriores</span>
              </li>
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Tratamientos especiales</span>
              </li>
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Reparación de superficies</span>
              </li>
            </ul>
            <Link to="/contacto" className="btn-primary inline-block mt-4">
              Solicitar Presupuesto
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Interior de vivienda moderna recién pintada"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousesServices;
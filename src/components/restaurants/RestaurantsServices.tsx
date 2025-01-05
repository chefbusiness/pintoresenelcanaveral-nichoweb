import { PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantsServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestros Servicios para Restaurantes</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Servicios Incluidos</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Pintura de paredes y techos</span>
              </li>
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Pintura de zonas de servicio</span>
              </li>
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Renovación de espacios gastronómicos</span>
              </li>
              <li className="flex items-center gap-3">
                <PaintBucket className="text-primary h-6 w-6" />
                <span>Tratamientos especiales para cocinas</span>
              </li>
            </ul>
            <Link to="/contacto" className="btn-primary inline-block mt-4">
              Solicitar Presupuesto
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/7519f617-f007-4160-b60d-1e2fd36138e6.png"
              alt="Interior de restaurante moderno con iluminación y decoración profesional"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsServices;
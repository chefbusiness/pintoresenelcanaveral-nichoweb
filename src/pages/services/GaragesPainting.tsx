import { Warehouse } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';

const GaragesPainting = () => {
  return (
    <div className="animate-fade-in">
      <ServiceDetailHero
        title="Pintores de Garajes en El Cañaveral"
        description="Servicio profesional de pintura para garajes y parkings en El Cañaveral. Especialistas en suelos antideslizantes y señalización."
        Icon={Warehouse}
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nuestros servicios de pintura para garajes incluyen:</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Pintura epoxy para suelos de garaje
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Señalización de plazas de aparcamiento
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Pintura antideslizante
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Numeración de plazas
                </li>
              </ul>
              <Link to="/contacto" className="btn-primary inline-block mt-6">
                Solicitar Presupuesto
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg"
                alt="Pintura de garajes en El Cañaveral"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GaragesPainting;
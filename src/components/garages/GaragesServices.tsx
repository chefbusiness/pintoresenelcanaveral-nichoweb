import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const GaragesServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de Pintura para Garajes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">¿Qué incluye nuestro servicio?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary h-6 w-6" />
                <span>Pintura epoxy de alta resistencia</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary h-6 w-6" />
                <span>Señalización de plazas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary h-6 w-6" />
                <span>Tratamiento antideslizante</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-primary h-6 w-6" />
                <span>Numeración de plazas</span>
              </li>
            </ul>
            <Link to="/contacto" className="btn-primary inline-block mt-4">
              Solicitar Presupuesto
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/b8b03596-24d6-46a6-b868-68ede6448942.png"
              alt="Aplicación profesional de pintura epoxy en garaje"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaragesServices;
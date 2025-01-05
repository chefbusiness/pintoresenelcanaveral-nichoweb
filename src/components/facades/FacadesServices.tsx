import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacadesServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestros Servicios de Pintura de Fachadas</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Servicios Incluidos</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Building2 className="text-primary h-6 w-6" />
                <span>Pintura exterior de edificios</span>
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="text-primary h-6 w-6" />
                <span>Rehabilitación de fachadas</span>
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="text-primary h-6 w-6" />
                <span>Impermeabilización</span>
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="text-primary h-6 w-6" />
                <span>Tratamiento de grietas</span>
              </li>
            </ul>
            <Link to="/contacto" className="btn-primary inline-block mt-4">
              Solicitar Presupuesto
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/52141531-7a33-4f7d-b834-3b5d9891ac16.png"
              alt="Pintura de fachadas profesional"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacadesServices;
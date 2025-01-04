import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pintores Profesionales en El Cañaveral
            </h1>
            <p className="text-xl mb-8">
              Transformamos espacios con calidad y profesionalidad en El Cañaveral, Madrid y alrededores
            </p>
            <Link to="/contacto" className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Solicitar Presupuesto Gratuito
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pintura Interior</h3>
              <p className="text-gray-600 mb-4">
                Renovamos el interior de tu hogar con las últimas tendencias y acabados de calidad.
              </p>
              <Link to="/servicios" className="text-primary hover:text-primary-dark font-medium">
                Saber más →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pintura Exterior</h3>
              <p className="text-gray-600 mb-4">
                Protegemos y embellecemos la fachada de tu vivienda con materiales duraderos.
              </p>
              <Link to="/servicios" className="text-primary hover:text-primary-dark font-medium">
                Saber más →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pintura Decorativa</h3>
              <p className="text-gray-600 mb-4">
                Creamos espacios únicos con técnicas decorativas especiales.
              </p>
              <Link to="/servicios" className="text-primary hover:text-primary-dark font-medium">
                Saber más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              {[
                "Más de 10 años de experiencia",
                "Presupuestos sin compromiso",
                "Materiales de primera calidad",
                "Garantía en todos los trabajos",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Equipo profesional cualificado",
                "Puntualidad y compromiso",
                "Limpieza tras el trabajo",
                "Precios competitivos",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas un presupuesto para tu proyecto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y te ofreceremos un presupuesto detallado sin compromiso
          </p>
          <Link to="/contacto" className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
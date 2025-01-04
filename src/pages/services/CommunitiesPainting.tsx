import { Users, CheckCircle2, Clock, PaintBucket } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';
import SEO from '@/components/SEO';

const CommunitiesPainting = () => {
  const benefits = [
    {
      title: "Experiencia en Comunidades",
      description: "Amplia experiencia trabajando con comunidades de vecinos en El Cañaveral"
    },
    {
      title: "Mínimas Molestias",
      description: "Planificamos el trabajo para minimizar las molestias a los vecinos"
    },
    {
      title: "Presupuestos Detallados",
      description: "Presupuestos claros y detallados para la aprobación de la comunidad"
    }
  ];

  const testimonials = [
    {
      name: "Pedro Sánchez",
      rating: 5,
      text: "Excelente trabajo en la pintura de todas las zonas comunes de nuestra comunidad. Muy profesionales y organizados.",
      service: "Pintura de Zonas Comunes"
    },
    {
      name: "María López",
      rating: 5,
      text: "Pintaron todos los pasillos y escaleras de nuestra comunidad. El resultado es espectacular y el precio muy competitivo.",
      service: "Pintura de Escaleras"
    }
  ];

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Pintores de Comunidades en El Cañaveral"
        description="Especialistas en pintura de zonas comunes, escaleras, portales y garajes comunitarios en El Cañaveral, Madrid. Servicio profesional adaptado a las necesidades de su comunidad. Solicite presupuesto gratuito."
      />
      
      <ServiceDetailHero
        title="Pintores de Comunidades en El Cañaveral"
        description="Especialistas en pintura de zonas comunes, escaleras, portales y garajes comunitarios. Servicio profesional adaptado a las necesidades de su comunidad."
        Icon={Users}
      />
      
      {/* Servicios Específicos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Nuestros Servicios para Comunidades</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Servicios Incluidos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de zonas comunes</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de escaleras y pasillos</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de portales</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de garajes comunitarios</span>
                </li>
              </ul>
              <Link to="/contacto" className="btn-primary inline-block mt-4">
                Solicitar Presupuesto
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg"
                alt="Pintura de comunidades profesional"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Nuestro Proceso de Trabajo</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Visita y Evaluación</h3>
              <p className="text-gray-600">Evaluación detallada de las necesidades de la comunidad</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Presupuesto</h3>
              <p className="text-gray-600">Presupuesto detallado para la aprobación</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Planificación</h3>
              <p className="text-gray-600">Organización del trabajo por fases</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Ejecución</h3>
              <p className="text-gray-600">Realización del trabajo con mínimas molestias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita pintar las zonas comunes de su comunidad en El Cañaveral?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacte con nosotros para obtener un presupuesto personalizado sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Solicitar Presupuesto
            </Link>
            <a href="tel:744717942" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunitiesPainting;

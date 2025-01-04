import { Building2 } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';

const FacadesPainting = () => {
  const testimonials = [
    {
      name: "Laura Martínez",
      rating: 5,
      text: "Excelente trabajo en la fachada de nuestra comunidad. El equipo fue muy profesional y el resultado es espectacular.",
      service: "Pintura de Fachada"
    },
    {
      name: "Antonio Ruiz",
      rating: 5,
      text: "Transformaron por completo el aspecto exterior de nuestro edificio. Muy satisfecho con el acabado y la limpieza.",
      service: "Rehabilitación de Fachada"
    }
  ];

  return (
    <div className="animate-fade-in">
      <ServiceDetailHero
        title="Pintores de Fachadas en El Cañaveral"
        description="Especialistas en pintura y rehabilitación de fachadas. Mejoramos el aspecto y la protección de tu edificio con acabados profesionales y duraderos."
        Icon={Building2}
      />
      
      {/* Servicios Específicos */}
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
                src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg"
                alt="Pintura de fachadas profesional"
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
              <h3 className="font-semibold mb-2">Inspección</h3>
              <p className="text-gray-600">Evaluación detallada del estado de la fachada</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Preparación</h3>
              <p className="text-gray-600">Limpieza y reparación de superficies</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Ejecución</h3>
              <p className="text-gray-600">Aplicación de pinturas de alta calidad</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Acabado</h3>
              <p className="text-gray-600">Revisión final y garantía del trabajo</p>
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
            ¿Necesitas pintar la fachada de tu edificio en El Cañaveral?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para obtener un presupuesto personalizado sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Solicitar Presupuesto
            </Link>
            <a href="tel:+34600000000" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacadesPainting;
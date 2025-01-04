import { Home, CheckCircle2 } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';

const TownhousesPainting = () => {
  const benefits = [
    {
      title: "Experiencia en Adosados",
      description: "Amplia experiencia en pintura de casas adosadas"
    },
    {
      title: "Coordinación Vecinal",
      description: "Gestión eficiente con comunidades de vecinos"
    },
    {
      title: "Acabados Uniformes",
      description: "Consistencia en acabados entre viviendas"
    }
  ];

  const testimonials = [
    {
      name: "Roberto Fernández",
      rating: 5,
      text: "Excelente trabajo en la pintura de nuestro adosado. Perfecta coordinación con los vecinos.",
      service: "Pintura de Adosado"
    },
    {
      name: "Isabel Martín",
      rating: 5,
      text: "Muy satisfechos con el resultado. El equipo fue muy profesional y respetuoso.",
      service: "Renovación de Adosado"
    }
  ];

  return (
    <div className="animate-fade-in">
      <ServiceDetailHero
        title="Pintores de Adosados en El Cañaveral"
        description="Servicios profesionales de pintura para casas adosadas. Coordinación eficiente y acabados uniformes."
        Icon={Home}
      />
      
      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Beneficios de Nuestro Servicio</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow-md">
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
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
            ¿Necesita pintar su adosado en El Cañaveral?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacte con nosotros para obtener un presupuesto personalizado sin compromiso
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

export default TownhousesPainting;
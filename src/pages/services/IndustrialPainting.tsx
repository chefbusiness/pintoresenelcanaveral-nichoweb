import { Building2, PaintBucket, CheckCircle2, Clock } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';

const IndustrialPainting = () => {
  const benefits = [
    {
      title: "Experiencia Industrial",
      description: "Amplia experiencia en pintura de naves industriales y espacios de gran formato"
    },
    {
      title: "Equipamiento Especializado",
      description: "Contamos con maquinaria y herramientas específicas para trabajos industriales"
    },
    {
      title: "Acabados Duraderos",
      description: "Utilizamos pinturas industriales de alta resistencia y durabilidad"
    }
  ];

  const testimonials = [
    {
      name: "Roberto García",
      rating: 5,
      text: "Excelente trabajo en nuestra nave industrial. El equipo fue muy profesional y cumplió con todos los plazos establecidos.",
      service: "Pintura Industrial Completa"
    },
    {
      name: "María Sánchez",
      rating: 5,
      text: "La calidad del acabado en nuestra nave es excepcional. Muy satisfechos con el servicio y la atención recibida.",
      service: "Renovación Industrial"
    }
  ];

  return (
    <div className="animate-fade-in">
      <ServiceDetailHero
        title="Pintores de Naves Industriales en El Cañaveral"
        description="Servicios profesionales de pintura para naves industriales y espacios de gran formato. Soluciones duraderas y de alta calidad para su negocio."
        Icon={Building2}
      />
      
      {/* Servicios Específicos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Nuestros Servicios para Naves Industriales</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Servicios Incluidos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de estructuras metálicas</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Recubrimientos industriales</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de suelos industriales</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Señalización industrial</span>
                </li>
              </ul>
              <Link to="/contacto" className="btn-primary inline-block mt-4">
                Solicitar Presupuesto
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                alt="Pintura industrial profesional"
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
              <h3 className="font-semibold mb-2">Evaluación</h3>
              <p className="text-gray-600">Análisis detallado del proyecto</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Planificación</h3>
              <p className="text-gray-600">Programación y logística</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Ejecución</h3>
              <p className="text-gray-600">Trabajo profesional y eficiente</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Entrega</h3>
              <p className="text-gray-600">Control de calidad y garantía</p>
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
            ¿Necesita pintar su nave industrial en El Cañaveral?
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

export default IndustrialPainting;
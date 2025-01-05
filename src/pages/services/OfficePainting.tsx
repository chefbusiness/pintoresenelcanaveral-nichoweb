import { Building2 } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import TestimonialCard from '@/components/TestimonialCard';
import OfficeSEO from '@/components/office/OfficeSEO';
import OfficeServices from '@/components/office/OfficeServices';
import OfficeWorkProcess from '@/components/office/OfficeWorkProcess';
import OfficeCTA from '@/components/office/OfficeCTA';

const OfficePainting = () => {
  const testimonials = [
    {
      name: "Carlos Martínez",
      rating: 5,
      text: "Excelente trabajo en la renovación de nuestra oficina. El equipo fue muy profesional y respetó nuestros horarios de trabajo.",
      service: "Pintura de Oficina Completa"
    },
    {
      name: "Laura Sánchez",
      rating: 5,
      text: "Transformaron completamente nuestro espacio de trabajo. El resultado es increíble y el proceso fue muy profesional.",
      service: "Renovación de Oficinas"
    }
  ];

  return (
    <div className="animate-fade-in">
      <OfficeSEO />
      <ServiceDetailHero
        title="Pintores de Oficinas en El Cañaveral"
        description="Servicios profesionales de pintura para oficinas y espacios de trabajo. Transformamos su entorno laboral con acabados de calidad y mínima interrupción."
        Icon={Building2}
      />
      <OfficeServices />
      <OfficeWorkProcess />
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
      <OfficeCTA />
    </div>
  );
};

export default OfficePainting;
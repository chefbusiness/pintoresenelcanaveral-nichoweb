import { Building2 } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import TestimonialCard from '@/components/TestimonialCard';
import IndustrialSEO from '@/components/industrial/IndustrialSEO';
import IndustrialServices from '@/components/industrial/IndustrialServices';
import WorkProcess from '@/components/industrial/WorkProcess';
import IndustrialCTA from '@/components/industrial/IndustrialCTA';

const IndustrialPainting = () => {
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
      <IndustrialSEO />
      
      <ServiceDetailHero
        title="Pintores de Naves Industriales en El Cañaveral"
        description="Servicios profesionales de pintura para naves industriales y espacios de gran formato. Soluciones duraderas y de alta calidad para su negocio."
        Icon={Building2}
      />
      
      <IndustrialServices />
      <WorkProcess />

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

      <IndustrialCTA />
    </div>
  );
};

export default IndustrialPainting;
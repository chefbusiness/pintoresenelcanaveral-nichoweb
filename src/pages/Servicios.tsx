import ServicesHero from '@/components/services/ServicesHero';
import InteriorPaintingSection from '@/components/services/InteriorPaintingSection';
import ExteriorPaintingSection from '@/components/services/ExteriorPaintingSection';
import DecorativePaintingSection from '@/components/services/DecorativePaintingSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import ServicesCTA from '@/components/services/ServicesCTA';

const Servicios = () => {
  return (
    <div className="animate-fade-in">
      <ServicesHero />
      
      {/* Servicios Detallados */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <InteriorPaintingSection />
            <ExteriorPaintingSection />
            <DecorativePaintingSection />
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ServicesCTA />
    </div>
  );
};

export default Servicios;
import ServicesHero from '@/components/services/ServicesHero';
import InteriorPaintingSection from '@/components/services/InteriorPaintingSection';
import ExteriorPaintingSection from '@/components/services/ExteriorPaintingSection';
import DecorativePaintingSection from '@/components/services/DecorativePaintingSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import ServicesCTA from '@/components/services/ServicesCTA';
import SEO from '@/components/SEO';

const Servicios = () => {
  return (
    <div className="animate-fade-in">
      <SEO 
        title="Servicios de Pintura en El Cañaveral"
        description="Descubra nuestra amplia gama de servicios de pintura en El Cañaveral, Madrid. Pintura interior, exterior, decorativa y más. Profesionalidad y calidad garantizada."
      />
      <ServicesHero />
      <div className="py-16 space-y-32">
        <InteriorPaintingSection />
        <ExteriorPaintingSection />
        <DecorativePaintingSection />
        <TestimonialsSection />
      </div>
      <ServicesCTA />
    </div>
  );
};

export default Servicios;
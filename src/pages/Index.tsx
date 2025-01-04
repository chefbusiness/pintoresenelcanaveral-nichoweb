import ServiceList from '@/components/ServiceList';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="animate-fade-in">
      <SEO 
        title="Pintores Profesionales en El Cañaveral"
        description="Servicios de pintura profesional en El Cañaveral, Madrid. Especialistas en pintura de viviendas, locales comerciales, comunidades y más. Calidad y profesionalidad garantizada."
      />
      <ServiceList />
    </div>
  );
};

export default Index;
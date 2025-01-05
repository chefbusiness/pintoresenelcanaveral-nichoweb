import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Users } from 'lucide-react';

const CommunitiesHero = () => {
  return (
    <ServiceDetailHero
      title="Pintores de Comunidades en El Cañaveral"
      description="Especialistas en pintura de zonas comunes, escaleras, portales y garajes comunitarios. Servicio profesional adaptado a las necesidades de su comunidad."
      Icon={Users}
    />
  );
};

export default CommunitiesHero;
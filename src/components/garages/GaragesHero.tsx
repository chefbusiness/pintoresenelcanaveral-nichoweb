import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Warehouse } from 'lucide-react';

const GaragesHero = () => {
  return (
    <ServiceDetailHero
      title="Pintores de Garajes en El Cañaveral"
      description="Especialistas en pintura de garajes comunitarios y particulares. Servicio profesional con los mejores materiales y acabados."
      Icon={Warehouse}
    />
  );
};

export default GaragesHero;
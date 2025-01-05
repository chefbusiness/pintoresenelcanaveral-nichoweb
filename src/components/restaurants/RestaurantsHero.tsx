import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Utensils } from 'lucide-react';

const RestaurantsHero = () => {
  return (
    <ServiceDetailHero
      title="Pintores de Restaurantes en El Cañaveral"
      description="Servicios profesionales de pintura para restaurantes. Transformamos su espacio gastronómico con acabados de calidad y mínima interrupción."
      Icon={Utensils}
    />
  );
};

export default RestaurantsHero;
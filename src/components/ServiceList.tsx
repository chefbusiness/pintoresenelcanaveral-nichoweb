import { PaintBucket, Brush, Palette, SprayCanIcon } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Pintura Interior",
    description: "Transformamos espacios interiores con acabados profesionales y duraderos.",
    Icon: PaintBucket,
    link: "/servicios#interior"
  },
  {
    title: "Pintura Exterior",
    description: "Protegemos y embellecemos fachadas con materiales de alta calidad.",
    Icon: SprayCanIcon,
    link: "/servicios#exterior"
  },
  {
    title: "Pintura Decorativa",
    description: "Creamos ambientes únicos con técnicas decorativas especiales.",
    Icon: Palette,
    link: "/servicios#decorativa"
  },
  {
    title: "Papel Pintado",
    description: "Instalación profesional de papel pintado y fotomurales.",
    Icon: Brush,
    link: "/servicios#papel-pintado"
  }
];

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;
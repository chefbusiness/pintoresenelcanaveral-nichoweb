import { LucideIcon } from 'lucide-react';

interface ServiceDetailHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceDetailHero = ({ title, description, Icon }: ServiceDetailHeroProps) => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-6">
          <Icon className="h-12 w-12" />
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        </div>
        <p className="text-xl max-w-3xl">{description}</p>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
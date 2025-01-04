import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, Icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-primary h-8 w-8" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-primary hover:text-primary-dark font-medium">
        Saber más →
      </Link>
    </div>
  );
};

export default ServiceCard;
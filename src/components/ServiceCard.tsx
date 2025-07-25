
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 gradient-card border border-gray-100">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;

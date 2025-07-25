
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 overflow-hidden">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Large colorful icon */}
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
          <Icon className="h-10 w-10 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed text-base">
          {description}
        </p>
        
        {features && (
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl"></div>
    </div>
  );
};

export default ServiceCard;

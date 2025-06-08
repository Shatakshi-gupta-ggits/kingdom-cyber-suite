
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
  category?: string;
}

const ServiceCard = ({ icon: Icon, title, description, href, gradient, category }: ServiceCardProps) => {
  const getCardStyle = () => {
    switch (category) {
      case "featured":
        return "glass-effect hover-glow p-6 text-center group cursor-pointer h-full transition-all duration-500 hover:scale-105 transform border-2 border-primary/20 hover:border-primary/40";
      case "premium":
        return "glass-effect hover-glow p-6 text-center group cursor-pointer h-full transition-all duration-500 hover:scale-105 transform border-2 border-accent/30 hover:border-accent/60 bg-gradient-to-br from-primary/5 to-transparent";
      case "personal":
        return "glass-effect hover-glow p-6 text-center group cursor-pointer h-full transition-all duration-500 hover:scale-105 transform border-2 border-accent/20 hover:border-accent/40";
      case "hub":
        return "glass-effect hover-glow p-6 text-center group cursor-pointer h-full transition-all duration-500 hover:scale-105 transform border border-border/50 hover:border-border";
      default:
        return "glass-effect hover-glow p-6 text-center group cursor-pointer h-full transition-all duration-500 hover:scale-105 transform";
    }
  };

  const getIconStyle = () => {
    switch (category) {
      case "featured":
        return `w-16 h-16 ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/25`;
      case "premium":
        return `w-16 h-16 ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110 shadow-xl shadow-accent/30 border-2 border-accent/20`;
      case "personal":
        return `w-16 h-16 ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110 shadow-lg shadow-accent/20`;
      default:
        return `w-16 h-16 ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110`;
    }
  };

  const getTitleStyle = () => {
    switch (category) {
      case "featured":
        return "text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 glow-text";
      case "premium":
        return "text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 glow-text";
      default:
        return "text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300";
    }
  };

  return (
    <Link to={href}>
      <Card className={getCardStyle()}>
        <div className={getIconStyle()}>
          <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <h3 className={getTitleStyle()}>
          {title}
        </h3>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </Card>
    </Link>
  );
};

export default ServiceCard;

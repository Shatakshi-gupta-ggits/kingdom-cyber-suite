
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

const ServiceCard = ({ icon: Icon, title, description, href, gradient }: ServiceCardProps) => {
  return (
    <Link to={href}>
      <Card className="glass-effect hover-glow p-6 text-center group cursor-pointer h-full transition-all duration-500 hover:scale-105 transform">
        <div className={`w-16 h-16 ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110`}>
          <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
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

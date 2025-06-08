
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  comingSoon?: boolean;
  link?: string;
}

const ServiceCard = ({ title, description, icon: Icon, gradient, comingSoon }: ServiceCardProps) => {
  return (
    <Card className="relative group glass-effect hover-glow transition-all duration-300 overflow-hidden h-full">
      <div className={`absolute inset-0 opacity-10 ${gradient}`}></div>
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
          {comingSoon && (
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full border border-accent/30">
              COMING SOON
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground flex-grow text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-border">
          <div className="text-xs text-accent font-medium">
            {comingSoon ? "Coming Soon →" : "Click to Enter →"}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;

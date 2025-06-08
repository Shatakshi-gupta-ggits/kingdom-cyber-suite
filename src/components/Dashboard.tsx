
import { 
  Gamepad2, 
  Film, 
  Star, 
  Crown, 
  Download, 
  Heart,
  Palette,
  ShoppingCart
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Dashboard = () => {
  const services = [
    {
      icon: Download,
      title: "Latest Releases",
      description: "Get the newest mods and apps as soon as they're available",
      href: "/latest-releases",
      gradient: "gradient-purple-blue",
      delay: "delay-100"
    },
    {
      icon: Star,
      title: "Trending Mods",
      description: "Discover what's popular in the modding community",
      href: "/trending-mods",
      gradient: "gradient-orange-pink",
      delay: "delay-200"
    },
    {
      icon: Crown,
      title: "VIP Access",
      description: "Exclusive premium content and early access privileges",
      href: "/vip-access",
      gradient: "gradient-purple-blue",
      delay: "delay-300"
    },
    {
      icon: Heart,
      title: "Favorites",
      description: "Your saved mods and content in one place",
      href: "/favorites",
      gradient: "gradient-orange-pink",
      delay: "delay-400"
    },
    {
      icon: Gamepad2,
      title: "App Mod Hub",
      description: "Premium modded applications and games collection",
      href: "/app-mod-hub",
      gradient: "gradient-purple-blue",
      delay: "delay-500"
    },
    {
      icon: Film,
      title: "Media Library",
      description: "Movies, shows, and entertainment content",
      href: "/media-library",
      gradient: "gradient-orange-pink",
      delay: "delay-600"
    },
    {
      icon: Palette,
      title: "Creative Suite",
      description: "Professional creative tools and resources",
      href: "#",
      gradient: "gradient-purple-blue",
      delay: "delay-700"
    },
    {
      icon: ShoppingCart,
      title: "King Wholesale",
      description: "Bulk purchasing and wholesale opportunities",
      href: "#",
      gradient: "gradient-orange-pink",
      delay: "delay-800"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent glow-text">
            Kingdom Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our premium collection of mods, apps, and exclusive content
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`animate-fade-in-up ${service.delay}`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

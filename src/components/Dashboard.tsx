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
  // Featured services (primary actions)
  const featuredServices = [
    {
      icon: Download,
      title: "Latest Releases",
      description: "Get the newest mods and apps as soon as they're available",
      href: "/latest-releases",
      gradient: "gradient-purple-blue",
      category: "featured"
    },
    {
      icon: Star,
      title: "Trending Mods",
      description: "Discover what's popular in the modding community",
      href: "/trending-mods",
      gradient: "gradient-orange-pink",
      category: "featured"
    },
    {
      icon: Crown,
      title: "VIP Access",
      description: "Exclusive premium content and early access privileges",
      href: "/vip-access",
      gradient: "gradient-purple-blue",
      category: "premium"
    },
    {
      icon: Heart,
      title: "Favorites",
      description: "Your saved mods and content in one place",
      href: "/favorites",
      gradient: "gradient-orange-pink",
      category: "personal"
    }
  ];

  // Other services (secondary actions)
  const otherServices = [
    {
      icon: Gamepad2,
      title: "App Mod Hub",
      description: "Premium modded applications and games collection",
      href: "/app-mod-hub",
      gradient: "gradient-purple-blue",
      category: "hub"
    },
    {
      icon: Film,
      title: "Media Library",
      description: "Movies, shows, and entertainment content",
      href: "/media-library",
      gradient: "gradient-orange-pink",
      category: "hub"
    },
    {
      icon: Palette,
      title: "Creative Suite",
      description: "Professional creative tools and resources",
      href: "#",
      gradient: "gradient-purple-blue",
      category: "tools"
    },
    {
      icon: ShoppingCart,
      title: "King Wholesale",
      description: "Bulk purchasing and wholesale opportunities",
      href: "#",
      gradient: "gradient-orange-pink",
      category: "business"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-background/95 to-primary/5 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent glow-text">
            Kingdom Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our premium collection of mods, apps, and exclusive content
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div 
                key={service.title}
                className={`animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Services Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-accent">More Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => (
              <div 
                key={service.title}
                className={`animate-fade-in-up delay-${(index + 5) * 100}`}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

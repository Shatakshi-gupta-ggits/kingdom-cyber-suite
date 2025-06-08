
import { GamepadIcon, Film, Edit3, ShoppingBag, Download, Zap, Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Dashboard = () => {
  const services = [
    {
      title: "App Mod Hub",
      description: "Premium modded apps, games, and utilities. Get exclusive access to the latest hacked APKs and iOS modifications with security verification.",
      icon: GamepadIcon,
      gradient: "gradient-purple-blue",
      link: "/app-mod-hub"
    },
    {
      title: "Media Library",
      description: "Latest movies, trending shows, and exclusive content. High-quality downloads with multiple format options and instant streaming.",
      icon: Film,
      gradient: "gradient-orange-pink",
      link: "/media-library"
    },
    {
      title: "Creative Suite",
      description: "Professional video and photo editing tools built right into your browser. No downloads needed - create stunning content instantly.",
      icon: Edit3,
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      comingSoon: true,
      link: "#"
    },
    {
      title: "King Wholesale",
      description: "Exclusive streetwear and gaming apparel. Limited edition drops designed by Ankit himself. Fresh gear for the gaming elite.",
      icon: ShoppingBag,
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      comingSoon: true,
      link: "#"
    },
  ];

  const quickActions = [
    { icon: Download, label: "Latest Releases", count: "12 New", link: "/latest-releases" },
    { icon: Zap, label: "Trending Mods", count: "Hot", link: "/trending-mods" },
    { icon: Crown, label: "VIP Access", count: "Elite", link: "/vip-access" },
    { icon: Star, label: "Favorites", count: "24", link: "/favorites" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Kingdom Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore the realm of premium content, exclusive tools, and gaming excellence
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {quickActions.map((action, index) => (
          <Link
            key={action.label}
            to={action.link}
            className="glass-effect p-4 rounded-lg hover-glow cursor-pointer group block"
          >
            <action.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-medium text-foreground">{action.label}</div>
            <div className="text-xs text-accent">{action.count}</div>
          </Link>
        ))}
      </div>

      {/* Main Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Link
            key={service.title}
            to={service.link}
            className={`cursor-pointer block ${service.comingSoon ? 'pointer-events-none' : ''}`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <ServiceCard {...service} />
          </Link>
        ))}
      </div>

      {/* Ankit's Signature */}
      <div className="mt-16 text-center">
        <div className="glass-effect p-6 rounded-lg inline-block">
          <p className="text-lg font-medium text-foreground mb-2">
            Proudly curated by <span className="text-primary font-bold">Ankit</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Level 100 Supplier | Gaming Legend | Kingdom Founder
          </p>
          <div className="flex justify-center items-center mt-3 space-x-2">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-accent font-medium">Elite Status: MAXIMUM</span>
            <Crown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;


import { GamepadIcon, Shield, Download, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AppModHub = () => {
  const categories = [
    { name: "Games", count: "150+", icon: GamepadIcon },
    { name: "Social Apps", count: "45+", icon: Shield },
    { name: "Utilities", count: "80+", icon: Download },
    { name: "Entertainment", count: "60+", icon: Star }
  ];

  const featuredMods = [
    {
      title: "Call of Duty Mobile Hack",
      category: "Action Game",
      version: "v2.1.4",
      size: "1.8 GB",
      downloads: "89.2K",
      rating: 4.9,
      verified: true,
      features: ["Unlimited Ammo", "Aimbot", "Wallhack", "No Recoil"]
    },
    {
      title: "Instagram Pro Max",
      category: "Social Media",
      version: "v3.2.1",
      size: "67 MB",
      downloads: "156.7K",
      rating: 4.8,
      verified: true,
      features: ["Download Stories", "No Ads", "Ghost Mode", "HD Upload"]
    },
    {
      title: "Subway Surfers Mega Mod",
      category: "Casual Game",
      version: "v1.9.3",
      size: "145 MB",
      downloads: "234.1K",
      rating: 4.7,
      verified: true,
      features: ["Unlimited Coins", "All Characters", "Infinite Keys", "No Ads"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <GamepadIcon className="w-16 h-16 text-primary animate-pulse-glow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
              App Mod Hub
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium modded apps, games, and utilities with security verification
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="glass-effect hover-glow cursor-pointer transition-all duration-300">
                <div className="p-6 text-center">
                  <category.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-accent">{category.count}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Mods */}
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Mods</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredMods.map((mod, index) => (
              <Card key={index} className="glass-effect hover-glow transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{mod.title}</h3>
                      <span className="text-sm text-accent">{mod.category}</span>
                    </div>
                    {mod.verified && (
                      <div className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        VERIFIED
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Version:</span>
                      <span>{mod.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span>{mod.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Downloads:</span>
                      <span>{mod.downloads}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-accent" />
                        <span>{mod.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {mod.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full gradient-purple-blue text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Mod
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Back to Kingdom Button */}
          <div className="flex justify-center mt-12">
            <Link to="/">
              <Button variant="outline" size="lg" className="neon-border">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Kingdom
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppModHub;

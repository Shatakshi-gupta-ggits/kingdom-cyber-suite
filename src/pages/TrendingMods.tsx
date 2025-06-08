
import { Zap, TrendingUp, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TrendingMods = () => {
  const trendingMods = [
    {
      title: "Among Us Mega Mod",
      trend: "🔥 VIRAL",
      downloads: "45.2K",
      growth: "+250%",
      rating: 4.9,
      category: "Game Mod"
    },
    {
      title: "Instagram Pro Max",
      trend: "⚡ HOT",
      downloads: "38.7K",
      growth: "+180%",
      rating: 4.8,
      category: "Social App"
    },
    {
      title: "PUBG Mobile Hack",
      trend: "🚀 RISING",
      downloads: "62.1K",
      growth: "+320%",
      rating: 4.7,
      category: "Game Mod"
    },
    {
      title: "Netflix Premium APK",
      trend: "💎 ELITE",
      downloads: "29.3K",
      growth: "+150%",
      rating: 4.9,
      category: "Streaming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="neon-border">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Kingdom
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-accent to-cyber-orange bg-clip-text text-transparent">
              Trending Mods
            </h1>
            <p className="text-xl text-muted-foreground">
              What's hot in the Kingdom - Most downloaded this week
            </p>
          </div>

          {/* Trending Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingMods.map((mod, index) => (
              <Card key={index} className="glass-effect hover-glow transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-2">{mod.title}</h3>
                      <span className="text-accent text-sm">{mod.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{mod.trend}</div>
                      <div className="text-sm text-primary">+{mod.growth}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm">{mod.downloads} downloads</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-accent" />
                      <span className="text-sm">{mod.rating}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 gradient-purple-blue text-white">
                      <Zap className="w-4 h-4 mr-2" />
                      Get Trending
                    </Button>
                    <Button variant="outline" className="neon-border">
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrendingMods;

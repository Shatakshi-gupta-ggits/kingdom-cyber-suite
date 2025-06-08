
import { Heart, Star, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = [
    {
      title: "Minecraft Ultimate Mod",
      category: "Game Mod",
      addedDate: "2024-06-01",
      rating: 4.9,
      size: "234 MB",
      type: "mod"
    },
    {
      title: "Avengers: Endgame (4K)",
      category: "Movie",
      addedDate: "2024-05-28",
      rating: 4.8,
      size: "6.2 GB",
      type: "media"
    },
    {
      title: "Spotify Premium",
      category: "Music App",
      addedDate: "2024-05-25",
      rating: 4.9,
      size: "89 MB",
      type: "app"
    },
    {
      title: "Breaking Bad Complete",
      category: "TV Series",
      addedDate: "2024-05-20",
      rating: 4.9,
      size: "45.7 GB",
      type: "media"
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
            <div className="flex justify-center mb-6">
              <Heart className="w-16 h-16 text-accent animate-pulse fill-current" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Your Favorites
            </h1>
            <p className="text-xl text-muted-foreground">
              Your handpicked collection from the Kingdom
            </p>
          </div>

          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item, index) => (
                <Card key={index} className="glass-effect hover-glow transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <span className="text-sm text-accent">{item.category}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-accent hover:text-accent/80"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </Button>
                    </div>

                    <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Added:</span>
                        <span>{item.addedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span>{item.size}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current text-accent" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 gradient-purple-blue text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" className="neon-border">
                        Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Heart className="w-24 h-24 text-muted-foreground/30 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">No favorites yet</h3>
              <p className="text-muted-foreground mb-8">
                Start exploring the Kingdom and add items to your favorites!
              </p>
              <Link to="/">
                <Button className="gradient-purple-blue text-white">
                  Explore Kingdom
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;

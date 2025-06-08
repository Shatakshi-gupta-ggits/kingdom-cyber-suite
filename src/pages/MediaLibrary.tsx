
import { Film, Download, Star, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MediaLibrary = () => {
  const categories = [
    { name: "Latest Movies", count: "500+", quality: "4K/HD" },
    { name: "TV Series", count: "200+", quality: "Complete Seasons" },
    { name: "Documentaries", count: "150+", quality: "HD" },
    { name: "Anime", count: "300+", quality: "Subbed/Dubbed" }
  ];

  const featuredMedia = [
    {
      title: "Avatar: The Way of Water",
      type: "Movie",
      year: "2022",
      quality: "4K UHD",
      size: "8.2 GB",
      rating: 4.8,
      duration: "3h 12min",
      genre: "Sci-Fi, Adventure"
    },
    {
      title: "The Last of Us",
      type: "TV Series",
      year: "2023",
      quality: "1080p",
      size: "24.5 GB",
      rating: 4.9,
      duration: "9 Episodes",
      genre: "Drama, Horror"
    },
    {
      title: "Top Gun: Maverick",
      type: "Movie",
      year: "2022",
      quality: "4K HDR",
      size: "6.8 GB",
      rating: 4.7,
      duration: "2h 11min",
      genre: "Action, Drama"
    },
    {
      title: "House of the Dragon",
      type: "TV Series",
      year: "2022",
      quality: "4K UHD",
      size: "45.2 GB",
      rating: 4.6,
      duration: "10 Episodes",
      genre: "Fantasy, Drama"
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
              <Film className="w-16 h-16 text-accent animate-pulse-glow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-accent to-cyber-orange bg-clip-text text-transparent">
              Media Library
            </h1>
            <p className="text-xl text-muted-foreground">
              Latest movies, trending shows, and exclusive content in high quality
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="glass-effect hover-glow cursor-pointer transition-all duration-300">
                <div className="p-6 text-center">
                  <Film className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-primary">{category.count}</p>
                  <p className="text-xs text-muted-foreground">{category.quality}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Content */}
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredMedia.map((media, index) => (
              <Card key={index} className="glass-effect hover-glow transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{media.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <span>{media.type}</span>
                        <span>•</span>
                        <span>{media.year}</span>
                      </div>
                    </div>
                    <div className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium">
                      {media.quality}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{media.genre}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <div className="font-medium">{media.duration}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Size:</span>
                      <div className="font-medium">{media.size}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-accent" />
                        <span className="font-medium">{media.rating}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Quality:</span>
                      <div className="font-medium">{media.quality}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 gradient-purple-blue text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="neon-border">
                      Stream
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

export default MediaLibrary;

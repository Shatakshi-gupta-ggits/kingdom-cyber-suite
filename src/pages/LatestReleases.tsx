
import { Download, Calendar, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const LatestReleases = () => {
  const releases = [
    {
      title: "GTA V Mobile Mod",
      category: "Game Mod",
      size: "2.1 GB",
      date: "2024-06-07",
      downloads: "15.2K",
      rating: 4.8,
      verified: true
    },
    {
      title: "Spotify Premium APK",
      category: "Music App",
      size: "89 MB",
      date: "2024-06-06",
      downloads: "8.7K",
      rating: 4.9,
      verified: true
    },
    {
      title: "Minecraft PE Ultimate",
      category: "Game Mod",
      size: "156 MB",
      date: "2024-06-05",
      downloads: "23.1K",
      rating: 4.7,
      verified: true
    },
    {
      title: "Adobe Photoshop Mobile",
      category: "Creative App",
      size: "267 MB",
      date: "2024-06-04",
      downloads: "12.3K",
      rating: 4.6,
      verified: true
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
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest Releases
            </h1>
            <p className="text-xl text-muted-foreground">
              Fresh drops from the Kingdom - Premium mods and apps
            </p>
          </div>

          {/* Releases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map((release, index) => (
              <Card key={index} className="glass-effect hover-glow transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{release.title}</h3>
                      <span className="text-sm text-accent">{release.category}</span>
                    </div>
                    {release.verified && (
                      <div className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                        VERIFIED
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span>{release.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Downloads:</span>
                      <span>{release.downloads}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-accent" />
                        <span>{release.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Released:</span>
                      <span>{release.date}</span>
                    </div>
                  </div>

                  <Button className="w-full gradient-purple-blue text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Now
                  </Button>
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

export default LatestReleases;

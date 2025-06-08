
import { Crown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Kingdom", href: "/" },
    { label: "App Hub", href: "/app-mod-hub" },
    { label: "Media", href: "/media-library" },
    { label: "Latest", href: "/latest-releases" },
    { label: "Trending", href: "/trending-mods" },
  ];

  const handleJoinElite = () => {
    window.open('https://t.me/ankitKingdom_prime', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border animate-slide-up">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Crown className="w-8 h-8 text-primary group-hover:animate-pulse transition-all duration-300 group-hover:scale-110" />
            <span className="text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
              ANKIT'S KINGDOM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left animate-fade-in-up delay-${index * 100}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in-up delay-500">
            <Link to="/login">
              <Button variant="outline" size="sm" className="neon-border transition-all duration-300 hover:scale-105">
                Login
              </Button>
            </Link>
            <Button 
              size="sm" 
              className="gradient-purple-blue text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25" 
              onClick={handleJoinElite}
            >
              Join Elite
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 rotate-180 transition-transform duration-300" /> : 
              <Menu className="w-6 h-6 transition-transform duration-300" />
            }
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border animate-scale-in">
            <div className="space-y-4 mt-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block text-foreground hover:text-primary transition-colors duration-300 font-medium animate-slide-in-left delay-${index * 100}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full neon-border transition-all duration-300 hover:scale-105 animate-slide-in-left delay-600">
                    Login
                  </Button>
                </Link>
                <Button 
                  className="w-full gradient-purple-blue text-white transition-all duration-300 hover:scale-105 animate-slide-in-left delay-700" 
                  onClick={handleJoinElite}
                >
                  Join Elite
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

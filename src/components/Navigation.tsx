
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Crown className="w-8 h-8 text-primary" />
            <span className="text-xl font-black text-foreground">
              ANKIT'S KINGDOM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="neon-border">
                Login
              </Button>
            </Link>
            <Button size="sm" className="gradient-purple-blue text-white" onClick={handleJoinElite}>
              Join Elite
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border">
            <div className="space-y-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full neon-border">
                    Login
                  </Button>
                </Link>
                <Button className="w-full gradient-purple-blue text-white" onClick={handleJoinElite}>
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

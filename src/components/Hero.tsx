
import { Crown, Zap, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="relative">
            <Crown className="w-24 h-24 text-primary animate-pulse-glow" />
            <div className="absolute inset-0 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in-up delay-200">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glow-text">
            ANKIT'S KINGDOM
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-300">
          Your ultimate destination for <span className="text-primary font-bold">premium apps</span>, 
          <span className="text-accent font-bold"> exclusive mods</span>, and 
          <span className="text-primary font-bold"> high-quality media</span>
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="glass-effect p-6 rounded-xl hover-glow animate-fade-in-up delay-400">
            <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground text-sm">Instant downloads with premium speeds</p>
          </div>
          <div className="glass-effect p-6 rounded-xl hover-glow animate-fade-in-up delay-500">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">100% Secure</h3>
            <p className="text-muted-foreground text-sm">Verified and tested for your safety</p>
          </div>
          <div className="glass-effect p-6 rounded-xl hover-glow animate-fade-in-up delay-600">
            <Download className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Always Updated</h3>
            <p className="text-muted-foreground text-sm">Latest versions and trending content</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
          <Link to="/app-mod-hub">
            <Button size="lg" className="gradient-purple-blue text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Explore Hub
            </Button>
          </Link>
          <Link to="/vip-access">
            <Button variant="outline" size="lg" className="neon-border text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
              <Crown className="w-5 h-5 mr-2" />
              Get VIP Access
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up delay-800">
          <div className="text-center">
            <div className="text-3xl font-black text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Premium Apps</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-accent mb-2">1M+</div>
            <div className="text-muted-foreground">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

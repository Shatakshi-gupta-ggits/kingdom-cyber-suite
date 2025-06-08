
import { Crown, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/20 to-cyan-950/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyber-blue rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-1 h-1 bg-cyber-orange rounded-full animate-pulse delay-1500"></div>
          <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Crown Logo */}
        <div className="mb-8 flex justify-center animate-slide-up">
          <div className="relative group">
            <Crown className="w-24 h-24 text-primary animate-pulse-glow transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Star className="w-8 h-8 text-accent animate-pulse delay-500" />
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-cyber-orange bg-clip-text text-transparent glow-text animate-slide-up delay-300">
          ANKIT'S
          <br />
          KINGDOM
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up delay-500 hover:text-foreground transition-colors duration-300">
          Level 100 Supplier | Premium Mods | Exclusive Content | Creative Tools
        </p>
        
        {/* Tagline */}
        <div className="mb-12 animate-slide-up delay-700">
          <p className="text-3xl md:text-4xl font-bold mb-4 text-foreground hover:glow-text transition-all duration-300">
            🎮 ENTER THE KINGDOM 🎮
          </p>
          <p className="text-lg text-accent animate-pulse">
            Where Gaming Meets Innovation
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-1000">
          <Button 
            size="lg" 
            className="gradient-purple-blue hover-glow text-white font-bold px-8 py-4 text-lg group transform transition-all duration-300 hover:scale-105"
          >
            <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse transition-transform group-hover:rotate-12" />
            Explore Kingdom
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="neon-border bg-transparent hover:bg-primary/10 font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Join the Elite
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up delay-1200">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Premium Mods</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">1000+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Movies & Shows</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-cyber-orange group-hover:scale-110 transition-transform duration-300">∞</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Creative Power</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-bounce delay-2000">
        <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-bounce delay-3000">
        <div className="w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-bounce delay-4000">
        <div className="w-3 h-3 bg-cyber-purple rounded-full animate-pulse delay-1500"></div>
      </div>
    </section>
  );
};

export default Hero;

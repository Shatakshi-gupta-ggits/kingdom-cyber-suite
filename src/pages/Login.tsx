
import { Crown, ArrowLeft, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  const handleJoinElite = () => {
    window.open('https://t.me/ankitKingdom_prime', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-md mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="neon-border">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Kingdom
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Crown className="w-16 h-16 text-primary animate-pulse-glow" />
            </div>
            <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Royal Login
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter the Kingdom with your credentials
            </p>
          </div>

          {/* Login Form */}
          <Card className="glass-effect hover-glow p-8 mb-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 neon-border"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 neon-border"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-purple-blue text-white font-bold"
              >
                Enter Kingdom
              </Button>
            </form>
          </Card>

          {/* VIP Access Promotion */}
          <Card className="glass-effect p-6 text-center mb-6">
            <h3 className="text-xl font-bold mb-2 text-foreground">
              Want Elite Access?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join our VIP membership for exclusive content and premium features
            </p>
            <div className="space-y-3">
              <Link to="/vip-access">
                <Button variant="outline" className="w-full neon-border">
                  View VIP Plans
                </Button>
              </Link>
              <Button 
                className="w-full bg-accent hover:bg-accent/80 text-black font-bold"
                onClick={handleJoinElite}
              >
                Join Elite Telegram
              </Button>
            </div>
          </Card>

          {/* Additional Options */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account? 
              <Button variant="link" className="text-primary p-0 ml-1">
                Sign up here
              </Button>
            </p>
            <Button variant="link" className="text-accent p-0">
              Forgot password?
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;

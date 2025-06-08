
import { Crown, Star, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const VipAccess = () => {
  const plans = [
    {
      name: "Kingdom Elite",
      price: "$9.99",
      period: "/month",
      features: [
        "Unlimited Purchases",
        "Priority Support",
        "Early Access to Mods",
        "Ad-Free Experience",
        "Exclusive Content"
      ],
      popular: false
    },
    {
      name: "Royal Crown",
      price: "$19.99",
      period: "/month",
      features: [
        "Everything in Elite",
        "Custom Mod Requests",
        "1-on-1 with Ankit",
        "Beta Testing Access",
        "VIP Discord Channel",
        "Monthly Merch Box"
      ],
      popular: true
    },
    {
      name: "Kingdom Founder",
      price: "$99.99",
      period: "/year",
      features: [
        "Everything in Royal Crown",
        "Lifetime Updates",
        "Co-create with Ankit",
        "Revenue Share Program",
        "Annual Kingdom Meet",
        "Custom Gaming Setup"
      ],
      popular: false
    }
  ];

  const handleJoinElite = () => {
    window.open('https://t.me/ankitKingdom_prime', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Crown className="w-16 h-16 text-primary animate-pulse-glow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VIP Access
            </h1>
            <p className="text-xl text-muted-foreground">
              Join the Elite - Unlock the full power of Ankit's Kingdom
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <Card key={index} className={`glass-effect hover-glow transition-all duration-300 overflow-hidden relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-black text-primary mb-1">
                      {plan.price}
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-purple-blue text-white' : 'neon-border'} font-bold`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={handleJoinElite}
                  >
                    {plan.popular && <Star className="w-4 h-4 mr-2" />}
                    Purchase {plan.name}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mb-8">
            <Button variant="outline" className="neon-border">
              Show More Plans
            </Button>
          </div>

          {/* Back to Kingdom Button */}
          <div className="text-center mb-12">
            <Link to="/">
              <Button variant="outline" size="lg" className="neon-border">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Kingdom
              </Button>
            </Link>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Go VIP?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect p-6 rounded-lg">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Exclusive Access</h3>
                <p className="text-sm text-muted-foreground">Get mods and content before anyone else</p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Premium Support</h3>
                <p className="text-sm text-muted-foreground">Direct line to Ankit and priority help</p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <Check className="w-12 h-12 text-cyber-orange mx-auto mb-4" />
                <h3 className="font-bold mb-2">No Limits</h3>
                <p className="text-sm text-muted-foreground">Unlimited purchases and ad-free experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VipAccess;

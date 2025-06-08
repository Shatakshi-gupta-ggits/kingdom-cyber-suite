
import { Crown, Github, Twitter, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-primary" />
              <span className="text-xl font-black text-foreground">
                ANKIT'S KINGDOM
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              The ultimate destination for premium mods, exclusive content, and gaming excellence.
            </p>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">App Mod Hub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Media Library</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Creative Suite</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">King Wholesale</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">DMCA</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Ankit's Kingdom. All rights reserved. Level 100 Supplier.
          </p>
          <p className="text-accent text-sm font-medium mt-2 md:mt-0">
            Built for the Gaming Elite 🎮
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

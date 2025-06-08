
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-travel-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">Travel Jo</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              Your gateway to discovering incredible destinations through trusted tour agencies.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Petra</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Istanbul</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dead Sea</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Amman</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">hello@traveljo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+962 6 123 4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-gray-300">Amman, Jordan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Travel Jo. All rights reserved. Made with ❤️ for Jordan travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="bg-primary p-2 rounded-lg"> */}
              <img src="/traveljologo-transparent.png" alt="Travel Jo Logo" className="h-14 w-14" />
            {/* </div> */}
            <span className="text-2xl font-bold text-travel-primary">Travel Jo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-travel-secondary hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-travel-secondary hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-travel-secondary hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-travel-secondary hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-travel-primary" />
            ) : (
              <Menu className="h-6 w-6 text-travel-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a href="#features" className="block text-travel-secondary hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block text-travel-secondary hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="block text-travel-secondary hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="block text-travel-secondary hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Download App
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

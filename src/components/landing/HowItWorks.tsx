
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, MapPin, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discover Tours",
      description: "Browse through hundreds of tours and experiences across Jordan. Filter by location, duration, and price."
    },
    {
      step: "02",
      icon: BookOpen,
      title: "Read Reviews",
      description: "Check authentic reviews and ratings from fellow travelers to find the perfect tour for you."
    },
    {
      step: "03",
      icon: MapPin,
      title: "Book Instantly",
      description: "Secure your spot with our easy booking system. Get instant confirmation and detailed itinerary."
    },
    {
      step: "04",
      icon: Star,
      title: "Share Experience",
      description: "After your amazing journey, share your experience and help other travelers discover Jordan."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-travel-primary">
            How Travel Jo Works
          </h2>
          <p className="text-lg text-travel-secondary max-w-2xl mx-auto">
            Getting started with your Jordan adventure is simple. Follow these easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-travel-surface border-border text-center relative">
              <CardContent className="p-6 space-y-4">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center pt-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-travel-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-travel-secondary">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

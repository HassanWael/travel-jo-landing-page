
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Star, Shield, Clock, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Discover Jordan & Globe",
      description: "Explore breathtaking destinations across Jordan — from ancient Petra to the mystical Wadi Rum desert — and discover unforgettable journeys around the globe.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Trusted Agencies",
      description: "Connect with 500+ verified local tour agencies, all vetted for quality and reliability.",
      color: "text-secondary"
    },
    {
      icon: Star,
      title: "Authentic Reviews",
      description: "Read genuine reviews and ratings from fellow travelers to make informed decisions.",
      color: "text-travel-warning"
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Book with confidence using our secure payment system and booking protection.",
      color: "text-travel-success"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get instant updates on your bookings, weather conditions, and tour schedules.",
      color: "text-travel-info"
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Multiple payment options with transparent pricing and no hidden fees.",
      color: "text-travel-error"
    }
  ];

  return (
    <section id="features" className="py-20 bg-travel-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-travel-primary">
            Why Choose Travel Jo?
          </h2>
          <p className="text-lg text-travel-secondary max-w-2xl mx-auto">
          We make exploring Jordan and the globe simple, safe, and unforgettable. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/5 rounded-lg">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-travel-primary">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-travel-secondary">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

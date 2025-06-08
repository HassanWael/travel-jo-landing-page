
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-travel-primary leading-tight">
                Discover Jordan
                <span className="text-primary block">Explore the World TravelJo.</span>
              </h1>
              <p className="text-lg text-travel-secondary max-w-xl">
              Start your journey with trusted local tour agencies — from exploring Jordan’s iconic sites like Petra and 
              Wadi Rum to discovering unforgettable experiences around the globe. 
              With TravelJo, adventure begins at home and expands worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-travel-secondary">500+ Tour Agencies</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-travel-secondary">100+ Destinations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm text-travel-secondary">4.8 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Download for Android
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative lg:justify-self-end animate-scale-in">
            <Card className="bg-travel-surface p-8 shadow-2xl max-w-sm mx-auto">
              <div className="space-y-6">
                {/* App Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* <div className="bg-primary p-1.5 rounded-lg"> */}
                      <img src="/traveljologo-transparent.png" alt="Travel Jo Logo" className="h-12 w-12" />
                    {/* </div> */}
                    <span className="font-bold text-travel-primary">Travel Jo</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-travel-secondary rounded-full"></div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-background p-3 rounded-lg border border-border">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-travel-secondary" />
                    <span className="text-sm text-travel-secondary">Where to in Jordan?</span>
                  </div>
                </div>

                {/* Featured Tour Cards */}
                <div className="space-y-3">
                  <Card className="p-4 bg-background">
                    <div className="flex space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-travel-primary text-sm">Petra Day Tour</h4>
                        <p className="text-xs text-travel-secondary">Ancient City Wonder</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-travel-secondary">4.9 (124)</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-background">
                    <div className="flex space-x-3">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-travel-primary text-sm">Wadi Rum Desert</h4>
                        <p className="text-xs text-travel-secondary">2-Day Adventure</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-travel-secondary">4.8 (89)</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

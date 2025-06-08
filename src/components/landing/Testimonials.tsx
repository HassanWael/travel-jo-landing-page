
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      rating: 5,
      text: "Travel Jo made our Jordan trip absolutely incredible! The tour agency we booked through was professional and knowledgeable. Petra was breathtaking!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marco Silva",
      location: "Brazil",
      rating: 5,
      text: "The app is so easy to use and the reviews helped us choose the perfect desert tour. Wadi Rum was like another planet - absolutely magical!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      location: "United Kingdom",
      rating: 5,
      text: "Outstanding experience from start to finish. The local guides were amazing and showed us hidden gems we never would have found on our own.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-travel-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-travel-primary">
            What Travelers Say
          </h2>
          <p className="text-lg text-travel-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community of travelers has to say about their experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20" />

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-travel-secondary italic">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-travel-primary text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-travel-secondary">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

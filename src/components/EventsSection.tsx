import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLoading } from "@/hooks/use-loading";
import { EventCardSkeleton, ContentLoader } from "@/components/ui/loading-skeleton";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ExternalLink,
  Video,
  Coffee,
  Briefcase
} from "lucide-react";

const EventsSection = () => {
  const isLoading = useLoading(1600);
  const events = [
    {
      id: 1,
      title: "Tech Alumni Meetup",
      date: "March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "San Francisco, CA",
      type: "In-Person",
      category: "Networking",
      attendees: 45,
      maxAttendees: 80,
      description: "Join fellow tech alumni for an evening of networking and knowledge sharing.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
      icon: Coffee,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Career Development Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      type: "Virtual",
      category: "Professional",
      attendees: 120,
      maxAttendees: 200,
      description: "Learn from industry leaders about advancing your career in today's market.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      icon: Briefcase,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Annual Alumni Gala",
      date: "April 5, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "New York, NY",
      type: "In-Person",
      category: "Gala",
      attendees: 250,
      maxAttendees: 500,
      description: "Our biggest event of the year celebrating achievements and connections.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Startup Pitch Night",
      date: "April 12, 2024",
      time: "5:30 PM - 8:30 PM",
      location: "Austin, TX",
      type: "In-Person",
      category: "Innovation",
      attendees: 60,
      maxAttendees: 100,
      description: "Watch alumni entrepreneurs pitch their startups to investors and peers.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      icon: Video,
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join alumni gatherings, professional workshops, and networking opportunities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentLoader
            isLoading={isLoading}
            skeleton={
              <>
                {[...Array(4)].map((_, i) => (
                  <EventCardSkeleton key={i} />
                ))}
              </>
            }
          >
            {events.map((event) => {
              const IconComponent = event.icon;
              return (
                <div key={event.id} className="card-3d bg-card rounded-xl overflow-hidden border">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={cn("text-white", event.color)}>
                        {event.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={event.type === "Virtual" ? "secondary" : "default"}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-card-foreground">
                          {event.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {event.time}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {event.location}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {event.attendees}/{event.maxAttendees} registered
                        </span>
                      </div>
                    </div>

                    {/* Attendee Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Registration</span>
                        <span className="font-medium text-card-foreground">
                          {Math.round((event.attendees / event.maxAttendees) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        className={cn(buttonVariants({ variant: "hero" }), "flex-1")}
                      >
                        Register Now
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </ContentLoader>
        </div>

        {/* View All Events */}
        <div className="text-center mt-12">
          <Button 
            className={cn(buttonVariants({ variant: "accent", size: "lg" }))}
          >
            View All Events
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
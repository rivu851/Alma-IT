import Header from "@/components/Header";
import { Users, Plus, UserPlus, MessageCircle, Calendar, FileText, Users2, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Alumni = () => {
  const alumniMembers = [
    {
      name: "Amit Sharma",
      title: "Senior Software Engineer at Microsoft",
      batch: "2020",
      department: "Computer Science",
      location: "Seattle, WA",
      mutualConnections: 25,
      avatar: "/placeholder.svg"
    },
    {
      name: "Priya Patel", 
      title: "Product Manager at Google",
      batch: "2019",
      department: "Information Technology",
      location: "Mountain View, CA",
      mutualConnections: 18,
      avatar: "/placeholder.svg"
    },
    {
      name: "Rahul Kumar",
      title: "Data Scientist at Amazon",
      batch: "2021", 
      department: "Computer Science",
      location: "Bangalore, India",
      mutualConnections: 12,
      avatar: "/placeholder.svg"
    },
    {
      name: "Sneha Gupta",
      title: "UX Designer at Adobe",
      batch: "2020",
      department: "Design",
      location: "San Francisco, CA",
      mutualConnections: 30,
      avatar: "/placeholder.svg"
    }
  ];

  const upcomingEvents = [
    {
      title: "AlmaIT Annual Reunion 2024",
      date: "Dec 15, 2024",
      location: "College Campus",
      attendees: 250
    },
    {
      title: "Tech Talk: Future of AI",
      date: "Nov 20, 2024", 
      location: "Virtual Event",
      attendees: 150
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-3">
            <Card className="border border-linkedin-border mb-4">
              <CardHeader className="pb-3">
                <h2 className="font-medium text-lg">Alumni Network</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">All Alumni</span>
                  </div>
                  <span className="font-medium text-primary">2,847</span>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Events</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Job Board</span>
                  </div>
                  <span className="font-medium">45</span>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Users2 className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Mentorship</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border border-linkedin-border">
              <CardHeader>
                <h3 className="font-medium">Upcoming Events</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 border border-linkedin-border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                    <p className="text-xs text-linkedin-gray mb-1">{event.date}</p>
                    <p className="text-xs text-linkedin-gray mb-2">{event.location}</p>
                    <p className="text-xs text-primary">{event.attendees} attending</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-6">
            {/* Search Alumni */}
            <Card className="border border-linkedin-border mb-4">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-linkedin-gray h-4 w-4" />
                  <Input placeholder="Search alumni by name, batch, or company..." className="pl-10" />
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-linkedin-light-gray">All Batches</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-linkedin-light-gray">Computer Science</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-linkedin-light-gray">Location</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-linkedin-light-gray">Company</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Alumni Directory */}
            <Card className="border border-linkedin-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-lg">Alumni Directory</h2>
                  <Button variant="ghost" size="sm" className="text-primary">See all</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alumniMembers.map((alumni, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-linkedin-border rounded-lg hover:bg-linkedin-light-gray">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={alumni.avatar} alt={alumni.name} />
                        <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-sm mb-1">{alumni.name}</h3>
                            <p className="text-sm text-linkedin-gray mb-1">{alumni.title}</p>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="secondary" className="text-xs">Batch {alumni.batch}</Badge>
                              <Badge variant="outline" className="text-xs">{alumni.department}</Badge>
                            </div>
                            <p className="text-xs text-linkedin-gray mb-1">{alumni.location}</p>
                            <p className="text-xs text-linkedin-gray">{alumni.mutualConnections} mutual connections</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                            <Button size="sm">
                              <UserPlus className="h-4 w-4 mr-1" />
                              Connect
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <Card className="border border-linkedin-border mb-4">
              <CardHeader>
                <h3 className="font-medium">Alumni Stats</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2,847</div>
                  <p className="text-sm text-linkedin-gray">Total Alumni</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">45</div>
                  <p className="text-sm text-linkedin-gray">Countries</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <p className="text-sm text-linkedin-gray">Companies</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-linkedin-border">
              <CardHeader>
                <h3 className="font-medium">Featured Alumni</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Amit Sharma</p>
                    <p className="text-xs text-linkedin-gray">CEO at TechStart</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Priya Patel</p>
                    <p className="text-xs text-linkedin-gray">VP at Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
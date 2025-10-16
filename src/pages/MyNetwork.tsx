import Header from "@/components/Header";
import { Users, Plus, UserPlus, MessageCircle, Calendar, FileText, Users2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const MyNetwork = () => {
  const suggestions = [
    {
      name: "Shubhajit Roy",
      title: "Full stack developer @ Hyland",
      mutualConnections: 12,
      avatar: "/placeholder.svg"
    },
    {
      name: "Maitri Trivedi", 
      title: "@Outmarket AI | Inter...",
      mutualConnections: 8,
      avatar: "/placeholder.svg"
    },
    {
      name: "Koustobha Ghosh",
      title: "Human Resources Executive - TCS",
      mutualConnections: 15,
      avatar: "/placeholder.svg"
    },
    {
      name: "Soham Chakraborty",
      title: "Developer @Hyland | NSEC",
      mutualConnections: 9,
      avatar: "/placeholder.svg"
    }
  ];

  const recentActivity = [
    {
      name: "Sarah Johnson",
      action: "started following",
      target: "Google Developers",
      timeAgo: "2h"
    },
    {
      name: "Mike Chen", 
      action: "connected with",
      target: "Jessica Miller",
      timeAgo: "4h"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-3">
            <Card className="border border-linkedin-border">
              <CardHeader className="pb-3">
                <h2 className="font-medium text-lg">Manage my network</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Connections</span>
                  </div>
                  <span className="font-medium text-primary">760</span>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Users2 className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Following & followers</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Home className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Groups</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Events</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Pages</span>
                  </div>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex items-center justify-between text-sm hover:bg-linkedin-light-gray p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-linkedin-gray" />
                    <span className="text-linkedin-gray">Newsletters</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-6">
            <Tabs defaultValue="grow" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="grow">Grow</TabsTrigger>
                <TabsTrigger value="catch-up">Catch up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="grow" className="space-y-4">
                {/* Invitations */}
                <Card className="border border-linkedin-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Invitations (1)</h3>
                      <Button variant="ghost" size="sm" className="text-primary">Show all</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3 p-3 border border-linkedin-border rounded-lg">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>RB</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-sm">Rishi Bhattacharjee</h4>
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        </div>
                        <p className="text-xs text-linkedin-gray">B.Tech in Electronics & Communication Engineering | I...</p>
                        <p className="text-xs text-linkedin-gray mt-1">Abhishek Basu and 133 other mutual connections</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Ignore</Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn Puzzle Game */}
                <Card className="border border-linkedin-border">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-3">Take a break with a LinkedIn puzzle game</h3>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">Z</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Zip - a quick brain teaser</h4>
                        <p className="text-xs text-linkedin-gray">Solve in 60s or less!</p>
                      </div>
                      <Button variant="outline" size="sm">Solve now</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* People you may know */}
                <Card className="border border-linkedin-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">People you may know based on your recent activity</h3>
                      <Button variant="ghost" size="sm" className="text-primary">Show all</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {suggestions.map((person, index) => (
                        <div key={index} className="border border-linkedin-border rounded-lg p-4 text-center relative">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="absolute top-2 right-2 h-6 w-6 p-0 text-linkedin-gray hover:text-foreground"
                          >
                            ✕
                          </Button>
                          <Avatar className="h-20 w-20 mx-auto mb-3">
                            <AvatarImage src={person.avatar} alt={person.name} />
                            <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <h3 className="font-medium text-sm mb-1">{person.name}</h3>
                          <p className="text-xs text-linkedin-gray mb-2 line-clamp-2">{person.title}</p>
                          <p className="text-xs text-linkedin-gray mb-3">{person.mutualConnections} mutual connections</p>
                          <Button size="sm" className="w-full mb-2">
                            <UserPlus className="h-4 w-4 mr-1" />
                            Connect
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="catch-up" className="space-y-4">
                <Card className="border border-linkedin-border">
                  <CardHeader>
                    <h2 className="font-medium text-lg">Recent activity from your network</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 pb-4 border-b border-linkedin-border last:border-0">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm">
                              <span className="font-medium">{activity.name}</span>
                              <span className="text-linkedin-gray"> {activity.action} </span>
                              <span className="font-medium">{activity.target}</span>
                            </p>
                            <p className="text-xs text-linkedin-gray mt-1">{activity.timeAgo}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <Card className="border border-linkedin-border mb-4">
              <CardHeader>
                <h3 className="font-medium">AlmaIT News</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm cursor-pointer hover:bg-linkedin-light-gray p-2 rounded">
                  <p className="font-medium mb-1">Tech hiring slowdown continues</p>
                  <p className="text-linkedin-gray text-xs">4h ago • 1,234 readers</p>
                </div>
                <div className="text-sm cursor-pointer hover:bg-linkedin-light-gray p-2 rounded">
                  <p className="font-medium mb-1">Remote work policies evolve</p>
                  <p className="text-linkedin-gray text-xs">6h ago • 2,156 readers</p>
                </div>
                <div className="text-sm cursor-pointer hover:bg-linkedin-light-gray p-2 rounded">
                  <p className="font-medium mb-1">AI integration in workflows</p>
                  <p className="text-linkedin-gray text-xs">1d ago • 3,421 readers</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Premium Ad */}
            <Card className="border border-linkedin-border">
              <CardContent className="p-4 text-center">
                <div className="mb-3">
                  <Avatar className="h-16 w-16 mx-auto">
                    <AvatarFallback>RU</AvatarFallback>
                  </Avatar>
                  <Badge className="ml-2 bg-yellow-500 text-black">Premium</Badge>
                </div>
                <p className="text-sm mb-3">Rivu, unlock your full potential with AlmaIT Premium</p>
                <p className="text-xs text-linkedin-gray mb-3">See who's viewed your profile in the last 365 days</p>
                <Button variant="outline" size="sm" className="w-full">Try for Free</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;
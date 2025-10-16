import Header from "@/components/Header";
import { Settings, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Notifications = () => {
  const allNotifications = [
    {
      type: "like",
      user: "Sarah Johnson",
      action: "liked your post",
      content: "Excited to share that our team just launched...",
      timeAgo: "2h",
      unread: true
    },
    {
      type: "comment", 
      user: "Mike Chen",
      action: "commented on your post",
      content: "Great insights on AI integration!",
      timeAgo: "4h",
      unread: true
    },
    {
      type: "connection",
      user: "Lisa Wang",
      action: "accepted your connection request",
      content: "",
      timeAgo: "6h", 
      unread: false
    },
    {
      type: "mention",
      user: "Alex Rodriguez",
      action: "mentioned you in a comment",
      content: "What do you think about this @yourname?",
      timeAgo: "1d",
      unread: false
    }
  ];

  const jobAlerts = [
    {
      type: "job",
      company: "Google",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      timeAgo: "3h",
      unread: true
    },
    {
      type: "job",
      company: "Microsoft", 
      position: "Product Manager",
      location: "Seattle, WA",
      timeAgo: "1d",
      unread: false
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return "👍";
      case "comment":
        return "💬";
      case "connection":
        return "🤝";
      case "mention":
        return "📌";
      case "job":
        return "💼";
      default:
        return "🔔";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-medium">Notifications</h1>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mentions">My posts</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card className="border border-linkedin-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="font-medium">All notifications</h2>
                <Button variant="ghost" size="sm">Mark all as read</Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-linkedin-border">
                  {allNotifications.map((notification, index) => (
                    <div 
                      key={index}
                      className={`p-4 hover:bg-linkedin-light-gray cursor-pointer ${
                        notification.unread ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {notification.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-medium">{notification.user}</span>
                                <span className="text-linkedin-gray"> {notification.action}</span>
                              </p>
                              {notification.content && (
                                <p className="text-sm text-linkedin-gray mt-1 truncate">
                                  "{notification.content}"
                                </p>
                              )}
                              <p className="text-xs text-linkedin-gray mt-1">{notification.timeAgo}</p>
                            </div>
                            <div className="flex items-center space-x-2 ml-3">
                              <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentions" className="mt-6">
            <Card className="border border-linkedin-border">
              <CardHeader>
                <h2 className="font-medium">My posts</h2>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-linkedin-border">
                  {allNotifications.filter(n => n.type === 'like' || n.type === 'comment').map((notification, index) => (
                    <div 
                      key={index}
                      className={`p-4 hover:bg-linkedin-light-gray cursor-pointer ${
                        notification.unread ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {notification.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{notification.user}</span>
                            <span className="text-linkedin-gray"> {notification.action}</span>
                          </p>
                          <p className="text-xs text-linkedin-gray mt-1">{notification.timeAgo}</p>
                        </div>
                        <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            <Card className="border border-linkedin-border">
              <CardHeader>
                <h2 className="font-medium">Job alerts</h2>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-linkedin-border">
                  {jobAlerts.map((alert, index) => (
                    <div 
                      key={index}
                      className={`p-4 hover:bg-linkedin-light-gray cursor-pointer ${
                        alert.unread ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-linkedin-light-gray rounded flex items-center justify-center">
                          <span className="text-lg">💼</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.position}</p>
                          <p className="text-sm text-linkedin-gray">{alert.company} • {alert.location}</p>
                          <p className="text-xs text-linkedin-gray mt-1">{alert.timeAgo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Notifications;
import Header from "@/components/Header";
import { Search, MoreHorizontal, Paperclip, Smile, Send, Star, ThumbsUp, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const Messaging = () => {
  const [activeFilter, setActiveFilter] = useState("Focused");
  const [selectedConversation, setSelectedConversation] = useState(0);

  const filterOptions = [
    "Focused", "Jobs", "Unread", "My Connections", "InMail", "Starred"
  ];

  const conversations = [
    {
      id: 0,
      name: "Phoebe R.",
      role: "Recruiter at DataAnnotation",
      lastMessage: "Bengali speaking professionals, we need consultants to help train AI to ensure its accuracy...",
      timeAgo: "Aug 24",
      isSponsored: true,
      unread: false,
      online: false,
      type: "job",
      fullMessage: {
        title: "Recruiter at DataAnnotation",
        content: "Bengali speaking professionals, we need consultants to help train AI to ensure its accuracy. You will help us write answers to prompts and research/fact-check AI responses.\n\nA few highlights of what can be your newest side gig:\n\n• Earn $1K+ USD weekly paid via PayPal 💰\n• Completely remote 🏠\n• Work as much or as little as you want - make your own schedule! 📅\n• NO AI experience required 🤖\n\nQualifications:\n\n• Fluent in Bengali + English\n• A completed or in-progress bachelor's degree\n\nPlease apply at the link below!",
        buttons: [
          { text: "Sign up now", variant: "default" },
          { text: "Not interested", variant: "outline" }
        ]
      }
    },
    {
      id: 1,
      name: "Kevin Hong",
      role: "Software Engineer at Microsoft",
      lastMessage: "You: Is this a paid internship?",
      timeAgo: "Aug 8",
      isSponsored: false,
      unread: false,
      online: false,
      type: "conversation",
      fullMessage: {
        content: "Hey! I saw your profile and thought you might be interested in this internship opportunity at Microsoft. Let me know if you'd like to know more details!"
      }
    },
    {
      id: 2,
      name: "Suman Singha",
      role: "Product Manager at Google",
      lastMessage: "Suman: 😊",
      timeAgo: "Jul 23",
      isSponsored: false,
      unread: false,
      online: true,
      type: "conversation",
      fullMessage: {
        content: "Thanks for connecting! Looking forward to staying in touch and potentially collaborating in the future."
      }
    },
    {
      id: 3,
      name: "Debadri Das",
      role: "Senior Developer at Amazon",
      lastMessage: "You: Hello Debadri, What would you like to...",
      timeAgo: "Jul 10",
      isSponsored: false,
      unread: false,
      online: false,
      type: "conversation",
      fullMessage: {
        content: "Hello! I noticed we have similar interests in full-stack development. Would love to connect and share experiences!"
      }
    },
    {
      id: 4,
      name: "Sayantan Gorai",
      role: "Data Scientist at Netflix",
      lastMessage: "You: Ok",
      timeAgo: "Jun 25",
      isSponsored: false,
      unread: true,
      unreadCount: 5,
      online: true,
      type: "conversation",
      fullMessage: {
        content: "I saw your recent post about machine learning. Really insightful! Would you be interested in discussing some collaborative opportunities?"
      }
    },
    {
      id: 5,
      name: "Pallab Kumar Gh...",
      role: "UI/UX Designer at Adobe",
      lastMessage: "Pallab Kumar: Nah sir atleast 25K dile bajiye...",
      timeAgo: "Jun 12",
      isSponsored: false,
      unread: false,
      online: true,
      type: "conversation",
      fullMessage: {
        content: "Thanks for the design feedback! Your suggestions really helped improve the user experience."
      }
    }
  ];

  const currentChat = conversations[selectedConversation];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-2 md:py-6 h-[calc(100svh-56px)] overflow-hidden">
        <Card className="border border-linkedin-border h-full flex flex-col md:flex-row bg-card">
          {/* Conversations List */}
          <div className="w-full md:w-96 border-r border-linkedin-border flex flex-col flex-shrink-0">
            {/* Header */}
            <div className="p-4 border-b border-linkedin-border flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Messaging</h1>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search messages" className="pl-10" />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "secondary"}
                    size="sm"
                    className={`rounded-full text-xs px-3 py-1 ${
                      activeFilter === filter 
                        ? "bg-linkedin-blue text-white hover:bg-linkedin-blue/90" 
                        : "bg-muted hover:bg-muted/80"
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Conversations */}
            <ScrollArea className="flex-1">
              <div className="space-y-0">
                {conversations.map((conversation, index) => (
                  <div 
                    key={conversation.id} 
                    className={`p-4 border-b border-linkedin-border cursor-pointer hover:bg-muted/50 transition-colors ${
                      selectedConversation === index ? 'bg-muted/50' : ''
                    }`}
                    onClick={() => setSelectedConversation(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative flex-shrink-0">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-gradient-to-br from-linkedin-blue to-linkedin-blue/80 text-white text-sm">
                            {conversation.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-card rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-sm truncate">{conversation.name}</p>
                            {conversation.isSponsored && (
                              <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-muted text-muted-foreground">
                                Sponsored
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <p className="text-xs text-muted-foreground">{conversation.timeAgo}</p>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Star className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-1">{conversation.role}</p>
                        
                        <p className={`text-sm truncate leading-tight ${
                          conversation.unread ? 'font-medium text-foreground' : 'text-muted-foreground'
                        }`}>
                          {conversation.lastMessage}
                        </p>
                      </div>
                      
                      {conversation.unread && conversation.unreadCount && (
                        <div className="w-5 h-5 bg-linkedin-blue text-white rounded-full flex items-center justify-center text-xs font-medium">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-linkedin-border bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-linkedin-blue to-linkedin-blue/80 text-white">
                      {currentChat.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{currentChat.name}</p>
                    <p className="text-sm text-muted-foreground">{currentChat.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1">
              <div className="p-6 space-y-6">
                {currentChat.type === "job" ? (
                  <div className="max-w-2xl">
                    <div className="bg-card border border-linkedin-border rounded-lg p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-gradient-to-br from-linkedin-blue to-linkedin-blue/80 text-white">
                            {currentChat.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{currentChat.name}</p>
                          <p className="text-sm text-muted-foreground">{currentChat.fullMessage.title}</p>
                          <p className="text-xs text-muted-foreground">{currentChat.timeAgo}</p>
                        </div>
                      </div>
                      
                      <div className="prose prose-sm max-w-none">
                        <p className="whitespace-pre-line text-sm leading-relaxed">
                          {currentChat.fullMessage.content}
                        </p>
                      </div>
                      
                      <div className="flex space-x-3 pt-2">
                        {currentChat.fullMessage.buttons.map((button, index) => (
                          <Button
                            key={index}
                            variant={button.variant === "default" ? "default" : "outline"}
                            size="sm"
                            className={button.variant === "default" ? "bg-linkedin-blue hover:bg-linkedin-blue/90" : ""}
                          >
                            {button.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3 max-w-lg">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gradient-to-br from-linkedin-blue to-linkedin-blue/80 text-white text-xs">
                            {currentChat.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-2">
                          <p className="text-sm">{currentChat.fullMessage.content}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-linkedin-blue text-white rounded-2xl rounded-tr-md px-4 py-2 max-w-lg">
                        <p className="text-sm">Thanks for reaching out! I'd be happy to discuss this further.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-linkedin-border bg-card">
              <div className="flex items-end space-x-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                  </div>
                  <Input 
                    placeholder="Write a message..." 
                    className="bg-muted border-muted focus:bg-background transition-colors"
                  />
                </div>
                <Button size="sm" className="bg-linkedin-blue hover:bg-linkedin-blue/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Messaging;
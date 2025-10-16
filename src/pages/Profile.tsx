import Header from "@/components/Header";
import { Camera, Edit, Plus, ChevronDown, ExternalLink, Image, Video, Calendar, FileText, Globe, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Profile = () => {
  const experience = [
    {
      position: "Senior Software Engineer",
      company: "Google",
      duration: "2022 - Present · 2 yrs",
      location: "San Francisco, CA",
      description: "Leading frontend development for Google Search, working with React and TypeScript to build scalable user interfaces."
    },
    {
      position: "Software Engineer",
      company: "Meta", 
      duration: "2020 - 2022 · 2 yrs",
      location: "Menlo Park, CA",
      description: "Developed and maintained Facebook's messaging platform, focusing on real-time communication features."
    }
  ];

  const education = [
    {
      school: "Stanford University",
      degree: "Master of Science in Computer Science", 
      duration: "2018 - 2020"
    },
    {
      school: "UC Berkeley",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "System Design", "Leadership", "Product Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="border border-linkedin-border mb-6">
          <div className="relative">
            {/* Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg relative">
              <Button 
                variant="secondary" 
                size="sm" 
                className="absolute top-4 right-4"
              >
                <Camera className="h-4 w-4 mr-2" />
                Add cover photo
              </Button>
            </div>
            
            {/* Profile Info */}
            <div className="px-6 pb-6">
              <div className="flex items-end -mt-16 mb-4">
                <div className="relative">
                  <Avatar className="h-32 w-32 border-4 border-card">
                    <AvatarImage src={profileAvatar} alt="Profile" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="ml-auto">
                  <Button variant="outline" className="mr-2">
                    Add profile section
                  </Button>
                  <Button variant="outline">
                    More
                  </Button>
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold mb-2">John Doe</h1>
                <p className="text-lg mb-2">Senior Software Engineer at Google</p>
                <p className="text-linkedin-gray mb-3">San Francisco, California, United States</p>
                <p className="text-sm text-linkedin-blue mb-4">500+ connections</p>
                
                <div className="flex space-x-2">
                  <Button>Open to</Button>
                  <Button variant="outline">Add profile section</Button>
                  <Button variant="outline">More</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Post Composer */}
        <Card className="border border-linkedin-border mb-6">
          <CardContent className="p-4">
            <div className="flex space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={profileAvatar} alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea 
                  placeholder="What do you want to talk about?" 
                  className="border-none resize-none p-0 text-base placeholder:text-linkedin-gray focus-visible:ring-0"
                  rows={3}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="text-linkedin-gray hover:bg-linkedin-light-gray">
                      <Image className="h-5 w-5 mr-2" />
                      Media
                    </Button>
                    <Button variant="ghost" size="sm" className="text-linkedin-gray hover:bg-linkedin-light-gray">
                      <Calendar className="h-5 w-5 mr-2" />
                      Event
                    </Button>
                    <Button variant="ghost" size="sm" className="text-linkedin-gray hover:bg-linkedin-light-gray">
                      <FileText className="h-5 w-5 mr-2" />
                      Write article
                    </Button>
                  </div>
                  <Button>Post</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Section */}
        <Card className="border border-linkedin-border mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">Analytics</h2>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <p className="text-sm text-linkedin-gray">Profile views</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">892</div>
                <p className="text-sm text-linkedin-gray">Post impressions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">45</div>
                <p className="text-sm text-linkedin-gray">Search appearances</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Section */}
        <Card className="border border-linkedin-border mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Activity</h2>
              <p className="text-sm text-linkedin-gray">500+ connections</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Create a post</Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b border-linkedin-border pb-4">
                <p className="text-sm mb-2">John shared: <span className="text-linkedin-blue">Excited to announce our new product launch!</span></p>
                <div className="flex items-center space-x-4 text-xs text-linkedin-gray">
                  <span>124 reactions</span>
                  <span>23 comments</span>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="border-b border-linkedin-border pb-4">
                <p className="text-sm mb-2">John commented on a post by <span className="font-medium">Sarah Johnson</span></p>
                <div className="flex items-center space-x-4 text-xs text-linkedin-gray">
                  <span>5 reactions</span>
                  <span>1 week ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="border border-linkedin-border mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">About</h2>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              Passionate software engineer with 5+ years of experience building scalable web applications. 
              Specialized in React, TypeScript, and modern frontend technologies. Love solving complex 
              problems and mentoring junior developers. Always excited about the latest in tech and AI.
            </p>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="border border-linkedin-border mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">Experience</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="flex space-x-4">
                <div className="w-12 h-12 bg-linkedin-light-gray rounded flex items-center justify-center">
                  <span className="font-bold text-sm">G</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{exp.position}</h3>
                  <p className="text-sm font-medium">{exp.company}</p>
                  <p className="text-sm text-linkedin-gray">{exp.duration}</p>
                  <p className="text-sm text-linkedin-gray">{exp.location}</p>
                  <p className="text-sm mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="border border-linkedin-border mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">Education</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex space-x-4">
                <div className="w-12 h-12 bg-linkedin-light-gray rounded flex items-center justify-center">
                  <span className="font-bold text-sm">S</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{edu.school}</h3>
                  <p className="text-sm">{edu.degree}</p>
                  <p className="text-sm text-linkedin-gray">{edu.duration}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="border border-linkedin-border mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
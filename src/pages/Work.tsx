import Header from "@/components/Header";
import { Plus, TrendingUp, Users, Calendar, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Work = () => {
  const companies = [
    {
      name: "Google",
      role: "Senior Software Engineer",
      logo: "G",
      members: "2.3M followers"
    },
    {
      name: "Meta", 
      role: "Former Software Engineer",
      logo: "M",
      members: "1.8M followers"
    }
  ];

  const tools = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Sales Navigator",
      description: "Find and connect with prospects"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "LinkedIn Learning",
      description: "Develop skills with online courses"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "LinkedIn Recruiter",
      description: "Find and hire talent"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "LinkedIn Events",
      description: "Discover and attend events"
    }
  ];

  const insights = [
    {
      title: "Profile views",
      value: "52",
      change: "+12% from last week",
      trend: "up"
    },
    {
      title: "Post impressions", 
      value: "1,234",
      change: "+8% from last week",
      trend: "up"
    },
    {
      title: "Search appearances",
      value: "89",
      change: "-3% from last week", 
      trend: "down"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <Card className="border border-linkedin-border mb-4">
              <CardHeader>
                <h2 className="font-medium">Your companies</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                {companies.map((company, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-linkedin-light-gray rounded flex items-center justify-center">
                      <span className="font-bold text-sm">{company.logo}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{company.name}</p>
                      <p className="text-xs text-linkedin-gray">{company.role}</p>
                      <p className="text-xs text-linkedin-gray">{company.members}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Create a Company Page
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-linkedin-border">
              <CardHeader>
                <h2 className="font-medium">LinkedIn Business Services</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium mb-1">Advertise</p>
                    <p className="text-linkedin-gray text-xs">Get your business in front of LinkedIn members</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">Find leads</p>
                    <p className="text-linkedin-gray text-xs">Reach out to prospects with Sales Navigator</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">Groups</p>
                    <p className="text-linkedin-gray text-xs">Connect with other professionals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Work</h1>
              <p className="text-linkedin-gray">Explore LinkedIn's professional tools and services</p>
            </div>

            {/* LinkedIn Tools */}
            <Card className="border border-linkedin-border mb-6">
              <CardHeader>
                <h2 className="text-xl font-bold">LinkedIn tools for business</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="p-4 border border-linkedin-border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-primary">{tool.icon}</div>
                        <h3 className="font-medium">{tool.title}</h3>
                      </div>
                      <p className="text-sm text-linkedin-gray">{tool.description}</p>
                      <Button variant="outline" size="sm" className="mt-3">
                        Learn more
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Insights */}
            <Card className="border border-linkedin-border">
              <CardHeader>
                <h2 className="text-xl font-bold">Your professional insights</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-primary">{insight.value}</p>
                      <p className="font-medium text-sm">{insight.title}</p>
                      <p className={`text-xs ${insight.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {insight.change}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <Card className="border border-linkedin-border">
              <CardHeader>
                <h3 className="font-medium">LinkedIn Learning</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium mb-1">Recommended for you</p>
                  <div className="space-y-2">
                    <p className="text-linkedin-gray text-xs">• Advanced React Development</p>
                    <p className="text-linkedin-gray text-xs">• System Design Interview Prep</p>
                    <p className="text-linkedin-gray text-xs">• Leadership Communication</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  See my recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
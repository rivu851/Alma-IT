import Header from "@/components/Header";
import { Search, MapPin, Briefcase, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Jobs = () => {
  const jobListings = [
    {
      title: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      type: "Full-time",
      timePosted: "2 days ago",
      applicants: "25+ applicants",
      promoted: true
    },
    {
      title: "Product Manager",
      company: "Microsoft", 
      location: "Seattle, WA",
      type: "Full-time",
      timePosted: "3 days ago",
      applicants: "15+ applicants",
      promoted: false
    },
    {
      title: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA", 
      type: "Full-time",
      timePosted: "1 week ago",
      applicants: "50+ applicants",
      promoted: true
    }
  ];

  const recentSearches = [
    "Software Engineer",
    "Product Manager", 
    "Data Scientist",
    "Frontend Developer"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <Card className="border border-linkedin-border mb-4">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <BookOpen className="h-4 w-4 text-linkedin-gray" />
                    <span>My jobs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-linkedin-gray" />
                    <span>Job alerts</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Briefcase className="h-4 w-4 text-linkedin-gray" />
                    <span>Salary insights</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-linkedin-border">
              <CardHeader className="pb-3">
                <h3 className="font-medium">Recent job searches</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="text-sm text-linkedin-gray hover:text-foreground cursor-pointer">
                      {search}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            {/* Job Search */}
            <Card className="border border-linkedin-border mb-4">
              <CardContent className="p-4">
                <div className="flex space-x-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-linkedin-gray h-4 w-4" />
                    <Input 
                      placeholder="Search jobs by title, skill, or company" 
                      className="pl-10"
                    />
                  </div>
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-linkedin-gray h-4 w-4" />
                    <Input 
                      placeholder="City or zip code" 
                      className="pl-10"
                    />
                  </div>
                  <Button>Search jobs</Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobListings.map((job, index) => (
                <Card key={index} className="border border-linkedin-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-linkedin-blue hover:underline cursor-pointer">
                            {job.title}
                          </h3>
                          {job.promoted && (
                            <Badge variant="secondary" className="text-xs">Promoted</Badge>
                          )}
                        </div>
                        <p className="font-medium mb-1">{job.company}</p>
                        <p className="text-sm text-linkedin-gray mb-2">{job.location}</p>
                        <div className="flex items-center space-x-4 text-sm text-linkedin-gray">
                          <span>{job.type}</span>
                          <span>•</span>
                          <span>{job.timePosted}</span>
                          <span>•</span>
                          <span>{job.applicants}</span>
                        </div>
                      </div>
                      <Button variant="outline">Save</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <Card className="border border-linkedin-border">
              <CardHeader>
                <h3 className="font-medium">Job seeker guidance</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium mb-1">I want to improve my resume</p>
                  <p className="text-linkedin-gray text-xs">Explore our curated guide of expert-led courses</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium mb-1">I want to ace my interviews</p>
                  <p className="text-linkedin-gray text-xs">Practice with real interview questions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
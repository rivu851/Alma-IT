import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLoading } from "@/hooks/use-loading";
import { JobCardSkeleton, ContentLoader } from "@/components/ui/loading-skeleton";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users,
  ExternalLink,
  Bookmark,
  Building
} from "lucide-react";

const JobBoard = () => {
  const isLoading = useLoading(2000);
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      description: "Join our team building next-generation web applications with React and TypeScript.",
      requirements: ["React", "TypeScript", "5+ years experience"],
      posted_by: "Sarah Chen (Class of 2018)",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $180k",
      posted: "1 week ago",
      description: "Lead product strategy for our AI-powered platform serving millions of users.",
      requirements: ["Product Strategy", "Data Analysis", "3+ years PM experience"],
      posted_by: "Michael Rodriguez (Class of 2015)",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataDriven Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $150k",
      posted: "3 days ago",
      description: "Work with machine learning models to derive insights from large datasets.",
      requirements: ["Python", "Machine Learning", "Statistics", "PhD preferred"],
      posted_by: "Emily Johnson (Class of 2020)",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=60&h=60&fit=crop"
    },
    {
      id: 4,
      title: "UX Designer",
      company: "DesignFirst Studio",
      location: "Austin, TX",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "5 days ago",
      description: "Create beautiful and functional user experiences for mobile and web applications.",
      requirements: ["Figma", "User Research", "Portfolio required"],
      posted_by: "Lisa Thompson (Class of 2019)",
      logo: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=60&h=60&fit=crop"
    },
    {
      id: 5,
      title: "Software Engineering Intern",
      company: "StartupXYZ",
      location: "Boston, MA",
      type: "Internship",
      salary: "$25/hour",
      posted: "1 day ago",
      description: "Join a fast-growing startup and work on cutting-edge technology projects.",
      requirements: ["Computer Science student", "Any programming language", "Eager to learn"],
      posted_by: "James Wilson (Class of 2016)",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=60&h=60&fit=crop"
    },
    {
      id: 6,
      title: "Marketing Director",
      company: "GrowthCorp",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$140k - $190k",
      posted: "4 days ago",
      description: "Lead marketing strategy and team for a rapidly scaling B2B SaaS company.",
      requirements: ["B2B Marketing", "Team Leadership", "Growth Hacking", "7+ years experience"],
      posted_by: "Alumni Network Team",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=60&h=60&fit=crop"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-green-500";
      case "Contract": return "bg-blue-500";
      case "Internship": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="jobs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
            Job Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover career opportunities posted by fellow alumni and partner companies
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <ContentLoader
            isLoading={isLoading}
            skeleton={
              <>
                {[...Array(6)].map((_, i) => (
                  <JobCardSkeleton key={i} />
                ))}
              </>
            }
          >
            {jobs.map((job) => (
              <div key={job.id} className="card-3d bg-card rounded-xl p-6 border">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Company Logo & Info */}
                  <div className="flex items-start gap-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-1">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-card-foreground">
                          {job.company}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Posted by {job.posted_by}
                      </p>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="flex-1 space-y-3">
                    <p className="text-muted-foreground">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{job.posted}</span>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className={cn("text-white", getTypeColor(job.type))}>
                        {job.type}
                      </Badge>
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {job.requirements.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.requirements.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 lg:w-48">
                    <Button 
                      className={cn(buttonVariants({ variant: "hero" }), "w-full")}
                    >
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Bookmark className="mr-2 h-4 w-4" />
                      Save Job
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </ContentLoader>
        </div>

        {/* View All Jobs */}
        <div className="text-center mt-12">
          <Button 
            className={cn(buttonVariants({ variant: "accent", size: "lg" }))}
          >
            View All Jobs
            <Briefcase className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobBoard;
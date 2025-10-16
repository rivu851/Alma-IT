import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLoading } from "@/hooks/use-loading";
import { NewsCardSkeleton, FeaturedNewsCardSkeleton, ContentLoader } from "@/components/ui/loading-skeleton";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";

const NewsSection = () => {
  const isLoading = useLoading(2400);
  const news = [
    {
      id: 1,
      title: "Alumni Startup Raises $50M Series B",
      summary: "TechVenture Inc, founded by James Wilson (Class of 2016), secures major funding round led by top VCs.",
      content: "James Wilson's innovative AI platform has attracted significant investment...",
      author: "Alumni Network Team",
      date: "March 10, 2024",
      readTime: "3 min read",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      likes: 45,
      comments: 12,
      featured: true
    },
    {
      id: 2,
      title: "New Alumni Mentorship Program Launch",
      summary: "Connect with experienced professionals in your field through our new mentorship initiative.",
      content: "We're excited to announce the launch of our comprehensive mentorship program...",
      author: "Sarah Chen",
      date: "March 8, 2024",
      readTime: "2 min read",
      category: "Program",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      likes: 23,
      comments: 8,
      featured: false
    },
    {
      id: 3,
      title: "Alumni Excellence Awards 2024",
      summary: "Celebrating outstanding achievements of our graduates across various industries.",
      content: "This year's Alumni Excellence Awards recognize exceptional contributions...",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      likes: 67,
      comments: 15,
      featured: false
    },
    {
      id: 4,
      title: "Tech Industry Trends: Alumni Insights",
      summary: "Leading alumni share their perspectives on emerging technologies and career opportunities.",
      content: "In a roundtable discussion, our tech alumni discussed the future of AI...",
      author: "Emily Johnson",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      likes: 34,
      comments: 21,
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Success Story": return "bg-green-500";
      case "Program": return "bg-blue-500";
      case "Awards": return "bg-purple-500";
      case "Industry": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
            Alumni News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest achievements, events, and stories from our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <ContentLoader
              isLoading={isLoading}
              skeleton={<FeaturedNewsCardSkeleton />}
            >
              {featuredNews && (
                <div className="card-3d bg-card rounded-xl overflow-hidden border">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={cn("text-white", getCategoryColor(featuredNews.category))}>
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        {featuredNews.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-card-foreground mb-3">
                      {featuredNews.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {featuredNews.summary}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredNews.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Heart className="h-4 w-4" />
                          <span>{featuredNews.likes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MessageCircle className="h-4 w-4" />
                          <span>{featuredNews.comments}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                      
                      <Button 
                        className={cn(buttonVariants({ variant: "hero" }))}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </ContentLoader>
          </div>

          {/* Recent Articles */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Recent Stories
            </h3>
            
            <ContentLoader
              isLoading={isLoading}
              skeleton={
                <>
                  {[...Array(3)].map((_, i) => (
                    <NewsCardSkeleton key={i} />
                  ))}
                </>
              }
            >
              {regularNews.map((article) => (
                <div key={article.id} className="card-3d bg-card rounded-lg p-4 border">
                  <div className="mb-3">
                    <Badge 
                      variant="secondary" 
                      className={cn("text-white text-xs", getCategoryColor(article.category))}
                    >
                      {article.category}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-xs h-8">
                      Read
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </ContentLoader>
            
            <Button 
              variant="outline" 
              className="w-full"
            >
              View All News
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
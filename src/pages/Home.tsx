import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import PostComposer from "@/components/PostComposer";
import PostCard from "@/components/PostCard";
import RightSidebar from "@/components/RightSidebar";
import postImage1 from "@/assets/post-image-1.jpg";
import postImage2 from "@/assets/post-image-2.jpg";

const Index = () => {
  const samplePosts = [
    {
      author: "Sarah Johnson",
      title: "Product Manager at Google • 1st",
      content: "Excited to share that our team just launched a new feature that will help millions of users! The journey from idea to implementation has been incredible. Grateful for the amazing team that made this possible. 🚀 #ProductManagement #Innovation #TeamWork",
      timeAgo: "2h",
      image: postImage1,
      likes: 124,
      comments: 23,
      shares: 8
    },
    {
      author: "Mike Chen",
      title: "Senior Software Engineer at Meta • 2nd",
      content: "Just finished an amazing conference on AI and Machine Learning. The future of technology is here, and it's more exciting than ever! Key takeaways: 1) AI integration in everyday apps 2) Ethical considerations 3) The importance of continuous learning. What are your thoughts on the future of AI?",
      timeAgo: "4h",
      image: postImage2,
      likes: 87,
      comments: 15,
      shares: 12
    },
    {
      author: "Lisa Wang",
      title: "UX Designer at Adobe • 3rd+",
      content: "Design is not just about making things look pretty - it's about solving real problems for real people. Today I want to share 5 principles that have shaped my design philosophy over the years...",
      timeAgo: "6h",
      likes: 156,
      comments: 34,
      shares: 19
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-3">
            <ProfileCard />
            
            {/* Recent Activity */}
            <div className="bg-card rounded-lg p-4 border border-linkedin-border">
              <h3 className="font-medium text-sm mb-3">Recent</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-linkedin-gray hover:text-foreground cursor-pointer">
                  <div className="w-2 h-2 bg-linkedin-gray rounded-full"></div>
                  <span>JavaScript Developers</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-linkedin-gray hover:text-foreground cursor-pointer">
                  <div className="w-2 h-2 bg-linkedin-gray rounded-full"></div>
                  <span>React Community</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-linkedin-gray hover:text-foreground cursor-pointer">
                  <div className="w-2 h-2 bg-linkedin-gray rounded-full"></div>
                  <span>Product Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-1 lg:col-span-6">
            <PostComposer />
            
            <div className="space-y-0">
              {samplePosts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

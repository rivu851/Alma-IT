import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Info } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const RightSidebar = () => {
  return (
    <div className="space-y-4">
      {/* LinkedIn News */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center justify-between">
            LinkedIn News
            <Info className="h-4 w-4 text-linkedin-gray" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            <div className="cursor-pointer hover:bg-linkedin-light-gray -mx-3 px-3 py-2 rounded">
              <h4 className="text-sm font-medium text-foreground">Tech layoffs continue</h4>
              <p className="text-xs text-linkedin-gray">2h ago • 15,842 readers</p>
            </div>
            <div className="cursor-pointer hover:bg-linkedin-light-gray -mx-3 px-3 py-2 rounded">
              <h4 className="text-sm font-medium text-foreground">AI market grows 40%</h4>
              <p className="text-xs text-linkedin-gray">4h ago • 8,231 readers</p>
            </div>
            <div className="cursor-pointer hover:bg-linkedin-light-gray -mx-3 px-3 py-2 rounded">
              <h4 className="text-sm font-medium text-foreground">Remote work policies shift</h4>
              <p className="text-xs text-linkedin-gray">6h ago • 12,445 readers</p>
            </div>
            <div className="cursor-pointer hover:bg-linkedin-light-gray -mx-3 px-3 py-2 rounded">
              <h4 className="text-sm font-medium text-foreground">Startup funding drops</h4>
              <p className="text-xs text-linkedin-gray">8h ago • 6,892 readers</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* People You May Know */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">People you may know</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={profileAvatar} alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-medium">Sarah Johnson</h4>
                <p className="text-xs text-linkedin-gray">Product Manager at Google</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs">
              <Plus className="h-3 w-3 mr-1" />
              Connect
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={profileAvatar} alt="Mike Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-medium">Mike Chen</h4>
                <p className="text-xs text-linkedin-gray">Senior Developer at Meta</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs">
              <Plus className="h-3 w-3 mr-1" />
              Connect
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={profileAvatar} alt="Lisa Wang" />
                <AvatarFallback>LW</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-medium">Lisa Wang</h4>
                <p className="text-xs text-linkedin-gray">UX Designer at Adobe</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs">
              <Plus className="h-3 w-3 mr-1" />
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Promoted */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center justify-between">
            Promoted
            <Info className="h-4 w-4 text-linkedin-gray" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-linkedin-light-gray rounded flex items-center justify-center">
              <span className="text-xs font-bold text-linkedin-gray">AD</span>
            </div>
            <div>
              <h4 className="text-sm font-medium">Master Data Science</h4>
              <p className="text-xs text-linkedin-gray mb-2">
                Learn Python, ML, and AI with our comprehensive course
              </p>
              <Button size="sm" className="h-8 text-xs">
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
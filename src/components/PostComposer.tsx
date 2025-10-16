import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Image, Calendar, FileText, Video } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const PostComposer = () => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={profileAvatar} alt="Your profile" />
            <AvatarFallback>YOU</AvatarFallback>
          </Avatar>
          <Button 
            variant="outline" 
            className="flex-1 justify-start text-linkedin-gray border-linkedin-border hover:bg-linkedin-light-gray h-12 text-base"
          >
            Start a post...
          </Button>
        </div>
        
        <div className="flex items-center justify-around">
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray">
            <Image className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">Photo</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray">
            <Video className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium">Video</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray">
            <Calendar className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium">Event</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray">
            <FileText className="h-5 w-5 text-red-500" />
            <span className="text-sm font-medium">Write article</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostComposer;
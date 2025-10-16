import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Bookmark } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-0">
        {/* Cover Image */}
        <div className="h-16 bg-gradient-to-r from-primary to-primary-hover"></div>
        
        {/* Profile Section */}
        <div className="px-4 pb-4 -mt-8 relative">
          <Link to="/profile">
            <Avatar className="h-16 w-16 border-4 border-card mb-2 cursor-pointer hover:opacity-80">
              <AvatarImage src={profileAvatar} alt="Profile" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </Link>
          
          <Link to="/profile">
            <h3 className="font-medium text-base mb-1 hover:text-primary cursor-pointer">John Smith</h3>
          </Link>
          <p className="text-sm text-linkedin-gray mb-3 leading-tight">
            Senior Software Engineer at TechCorp | Full Stack Developer | React, Node.js
          </p>
          
          <div className="flex items-center justify-between text-sm text-linkedin-gray mb-3">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>Profile viewers</span>
            </div>
            <span className="text-primary font-medium">124</span>
          </div>
          
          <div className="border-t border-linkedin-border pt-3">
            <div className="flex items-center space-x-2 text-sm">
              <Bookmark className="h-4 w-4 text-linkedin-gray" />
              <span className="text-linkedin-gray">My items</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
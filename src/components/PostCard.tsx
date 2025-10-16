import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send, Globe } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { Link } from "react-router-dom";

interface PostCardProps {
  author: string;
  title: string;
  content: string;
  timeAgo: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const PostCard = ({ author, title, content, timeAgo, image, likes, comments, shares }: PostCardProps) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start space-x-3">
            <Link to="/profile">
              <Avatar className="h-12 w-12 cursor-pointer hover:opacity-80">
                <AvatarImage src={profileAvatar} alt={author} />
                <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </Link>
            <div>
              <Link to="/profile">
                <h4 className="font-medium text-sm hover:text-primary cursor-pointer">{author}</h4>
              </Link>
              <p className="text-xs text-linkedin-gray">{title}</p>
              <div className="flex items-center space-x-1 text-xs text-linkedin-gray mt-1">
                <span>{timeAgo}</span>
                <span>•</span>
                <Globe className="h-3 w-3" />
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4 text-linkedin-gray" />
          </Button>
        </div>

        {/* Post Content */}
        <div className="mb-3">
          <p className="text-sm text-foreground leading-relaxed">{content}</p>
          {image && (
            <img 
              src={image} 
              alt="Post content" 
              className="w-full mt-3 rounded-lg object-cover max-h-96"
            />
          )}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-linkedin-border">
          <div className="flex items-center space-x-2 text-sm text-linkedin-gray">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <ThumbsUp className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="ml-2">{likes}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-linkedin-gray">
            <span>{comments} comments</span>
            <span>{shares} reposts</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-around">
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray flex-1">
            <ThumbsUp className="h-4 w-4" />
            <span className="text-sm font-medium">Like</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray flex-1">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Comment</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray flex-1">
            <Repeat2 className="h-4 w-4" />
            <span className="text-sm font-medium">Repost</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-linkedin-gray hover:bg-linkedin-light-gray flex-1">
            <Send className="h-4 w-4" />
            <span className="text-sm font-medium">Send</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
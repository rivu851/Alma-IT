import { Search, Home, Users, MessageCircle, Bell, Briefcase, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router-dom";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-card border-b border-linkedin-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Search */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-primary font-bold text-lg">Alma</span>
                <span className="text-yellow-500 font-bold text-lg">IT</span>
              </div>
            </div>
            
            <div className="relative max-w-sm w-80 hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-linkedin-gray h-4 w-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 bg-linkedin-light-gray border-none h-9 focus:bg-card"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5 text-linkedin-gray" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2 md:space-x-6 overflow-x-auto whitespace-nowrap">
            <Link to="/home">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/' ? 'text-foreground border-b-2 border-linkedin-blue' : 'text-linkedin-gray hover:text-foreground'}`}>
                <Home className="h-5 w-5 mb-1" />
                <span className="text-xs hidden md:block">Home</span>
              </Button>
            </Link>
            
            <Link to="/network">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/network' ? 'text-foreground border-b-2 border-linkedin-blue' : 'text-linkedin-gray hover:text-foreground'}`}>
                <Users className="h-5 w-5 mb-1" />
                <span className="text-xs hidden md:block">My Network</span>
              </Button>
            </Link>
            
            <Link to="/alumni">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/alumni' ? 'text-foreground border-b-2 border-linkedin-blue' : 'text-linkedin-gray hover:text-foreground'}`}>
                <Users className="h-5 w-5 mb-1" />
                <span className="text-xs hidden md:block">Alumni</span>
              </Button>
            </Link>
            
            <Link to="/jobs">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/jobs' ? 'text-foreground border-b-2 border-linkedin-blue' : 'text-linkedin-gray hover:text-foreground'}`}>
                <Briefcase className="h-5 w-5 mb-1" />
                <span className="text-xs hidden md:block">Jobs</span>
              </Button>
            </Link>
            
            <Link to="/messaging">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/messaging' ? 'text-foreground border-b-2 border-linkedin-blue' : 'text-linkedin-gray hover:text-foreground'}`}>
                <MessageCircle className="h-5 w-5 mb-1" />
                <span className="text-xs hidden md:block">Messaging</span>
              </Button>
            </Link>
            
            <Link to="/notifications">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/notifications' ? 'text-foreground border-b-2 border-linkedin-blue' : 'text-linkedin-gray hover:text-foreground'}`}>
                <Bell className="h-5 w-5 mb-1" />
                <span className="text-xs hidden md:block">Notifications</span>
              </Button>
            </Link>
            
            <Link to="/profile">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/profile' ? 'border-b-2 border-linkedin-blue' : ''}`}>
                <Avatar className="h-6 w-6 mb-1">
                  <AvatarImage src={profileAvatar} alt="Profile" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <span className="text-xs text-linkedin-gray hidden md:block">Me</span>
              </Button>
            </Link>
            
            <div className="w-px h-6 bg-linkedin-border"></div>
            
            <Link to="/work">
              <Button variant="ghost" size="sm" className={`flex flex-col items-center p-2 h-auto hover:bg-linkedin-light-gray ${location.pathname === '/work' ? 'text-foreground border-b-2 border-linkedin-blue' : 'text-linkedin-gray hover:text-foreground'}`}>
                <Menu className="h-5 w-5 mb-1" />
                <span className="text-xs hidden md:block">Work</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
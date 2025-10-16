import { useState } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

import {
  Users,
  Calendar,
  Briefcase,
  Newspaper,
  MessageCircle,
  Menu,
  X,
  GraduationCap,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const navigate = useNavigate(); // ✅ initialize navigate hook

  const navItems = [
    { name: "Alumni", icon: Users, href: "#alumni" },
    { name: "Events", icon: Calendar, href: "#events" },
    { name: "Jobs", icon: Briefcase, href: "#jobs" },
    { name: "News", icon: Newspaper, href: "#news" },
    { name: "Connect", icon: MessageCircle, href: "#connect" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/50 h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-amber-400 drop-shadow-lg" />
            <span className="font-playfair text-lg font-bold text-white">
              Alma<span className="text-amber-400">IT</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveNav(item.name)}
                className={cn(
                  "flex items-center gap-1.5 text-white/80 transition-all duration-300 text-sm px-2 py-1 rounded-md",
                  activeNav === item.name
                    ? "text-amber-400 shadow-[0_0_10px_rgba(255,193,7,0.8)]"
                    : "hover:text-amber-400 hover:shadow-[0_0_10px_rgba(255,193,7,0.8)]"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/90 hover:text-white"
              onClick={() => navigate("/login")} // ✅ now works
            >
              Sign In
            </Button>
            <Button
              className={cn(
                buttonVariants({
                  variant: "hero",
                  size: "sm",
                })
              )}
            >
              Join Network
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
            <div className="px-3 pt-3 pb-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-amber-400 hover:shadow-[0_0_10px_rgba(255,193,7,0.8)] transition-all duration-300"
                  onClick={() => {
                    setActiveNav(item.name);
                    setIsOpen(false);
                  }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/90 hover:text-white"
                  onClick={() => {
                    navigate("/login"); // ✅ mobile sign-in also works
                    setIsOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button
                  className={cn(
                    buttonVariants({
                      variant: "hero",
                      size: "sm",
                    })
                  )}
                >
                  Join Network
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLoading } from "@/hooks/use-loading";
import {
  ProfileCardSkeleton,
  ContentLoader,
} from "@/components/ui/loading-skeleton";
import {
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Linkedin,
  Mail,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const isLoading = useLoading(1200);

  // Typewriter state
  const fullText = "Alumni Directory";
  const [typedText, setTypedText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Guards to avoid double-running in React 18 Strict Mode
  const hasTypedRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Start typing only when section comes into view (once)
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.unobserve(entry.target); // run once
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Robust typewriter effect (once; safe in Strict Mode)
  useEffect(() => {
    if (!startTyping || isLoading || hasTypedRef.current) return;

    hasTypedRef.current = true; // lock to prevent duplicate intervals
    setTypedText("");
    setShowSubtitle(false);

    let i = 0;
    const len = fullText.length;

    const id = setInterval(() => {
      i += 1;
      setTypedText(fullText.slice(0, i));
      if (i >= len) {
        clearInterval(id);
        setShowSubtitle(true);
      }
    }, 120); // ms per char

    return () => clearInterval(id);
  }, [startTyping, isLoading, fullText]);

  const alumniData = [
    {
      id: 1,
      name: "Sarah Chen",
      class: "Class of 2018",
      position: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      degree: "Computer Science",
      skills: ["React", "Python", "AI/ML"],
      image:
        "https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      class: "Class of 2015",
      position: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      degree: "Business Administration",
      skills: ["Product Strategy", "Analytics", "Leadership"],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Johnson",
      class: "Class of 2020",
      position: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      degree: "Statistics",
      skills: ["Machine Learning", "R", "Python"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const filteredAlumni = alumniData.filter(
    (alumni) =>
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section id="alumni" className="py-3 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Earth */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
              {typedText}
            </h2>

            {showSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl text-muted-foreground max-w-3xl"
              >
                Connect with fellow graduates from diverse industries and
                backgrounds <br/> <br/> Meet the finest former students from our Department
              </motion.p>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 150, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[300px] md:w-[400px] xl:w-[500px] flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] md:w-full md:h-full">
              <EarthCanvas />
            </div>
          </motion.div>
        </div>

        {/* Search + Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by name, company, position, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <Button variant="outline" className="h-12 px-6">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentLoader
            isLoading={isLoading}
            skeleton={
              <>
                {[...Array(6)].map((_, i) => (
                  <ProfileCardSkeleton key={i} />
                ))}
              </>
            }
          >
            {filteredAlumni.map((alumni) => (
              <div
                key={alumni.id}
                className="card-3d bg-card rounded-xl p-6 border"
              >
                {/* Profile header */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-card-foreground">
                      {alumni.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {alumni.class}
                    </p>
                  </div>
                </div>

                {/* Position + Company */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-card-foreground">
                      {alumni.position}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground ml-6">
                    {alumni.company}
                  </div>
                </div>

                {/* Location + Degree */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {alumni.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {alumni.degree}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {alumni.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className={cn(
                      buttonVariants({ variant: "hero", size: "sm" }),
                      "flex-1"
                    )}
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </ContentLoader>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            className={cn(buttonVariants({ variant: "accent", size: "lg" }))}
          >
            Load More Alumni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AlumniDirectory;

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { ArrowRight, Network, Users, Calendar } from "lucide-react";
import alumniHero from "@/assets/alumni-hero.jpg";
import threeDElements from "@/assets/3d-elements.png";
import connect from "@/assets/connect.png";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const COLORS = ["hsl(var(--accent))", "rgba(255,255,255,0.08)"];

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // One-time entrance animation (does NOT toggle again)
  const [entered, setEntered] = useState(false);

  // Repeating pulse for charts only (so cards/headings don't jump)
  const [chartsPulse, setChartsPulse] = useState(false);

  useEffect(() => {
    if (inView) {
      setEntered(true);
      setChartsPulse(true); // kick off first chart animation
    }
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      // retrigger chart animation without moving cards/headings
      setChartsPulse(false);
      // next frame -> true to re-animate chart values smoothly
      const raf = requestAnimationFrame(() => setChartsPulse(true));
      return () => cancelAnimationFrame(raf);
    }, 5000);
    return () => clearInterval(id);
  }, [inView]);

  const alumniData = [
    { name: "Active", value: chartsPulse ? 25000 : 0 },
    { name: "Remaining", value: chartsPulse ? 5000 : 30000 },
  ];

  const companyData = [
    { name: "Companies", value: chartsPulse ? 500 : 0, fill: "hsl(var(--accent))" },
  ];

  const eventsData = chartsPulse
    ? [
        { month: "Jan", events: 10 },
        { month: "Feb", events: 15 },
        { month: "Mar", events: 20 },
        { month: "Apr", events: 12 },
        { month: "May", events: 18 },
        { month: "Jun", events: 25 },
      ]
    : [
        { month: "Jan", events: 0 },
        { month: "Feb", events: 0 },
        { month: "Mar", events: 0 },
        { month: "Apr", events: 0 },
        { month: "May", events: 0 },
        { month: "Jun", events: 0 },
      ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${alumniHero})` }}
      />

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-28 left-10 w-32 h-32 opacity-30 float"
          style={{
            backgroundImage: `url(${threeDElements})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-60 h-60 float"
          style={{
            backgroundImage: `url(${connect})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 opacity-25 float"
          style={{
            backgroundImage: `url(${threeDElements})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-playfair font-bold text-white mb-6 transition-all duration-1000 ${
              entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Connect with
            <span className="block text-transparent bg-gradient-accent bg-clip-text">
              Your Alumni
            </span>
            Network
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Join thousands of graduates building meaningful connections,
            sharing opportunities, and creating lasting professional
            relationships.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-400 ${
              entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Button className={cn(buttonVariants({ variant: "hero", size: "xl" }))}>
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className={cn(buttonVariants({ variant: "glass", size: "xl" }))}>
              Explore Alumni
            </Button>
          </div>

          {/* Stats: wrappers handle slide-in; cards keep floatStats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            {/* Left Card - slide from left */}
            <div
              className={`will-change-transform transition-transform transition-opacity duration-1000 ease-out ${
                entered ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="card-3d glass p-4 rounded-xl text-center floatStats">
                <div className="mx-auto mb-3 w-20 h-20">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={alumniData}
                        innerRadius="70%"
                        outerRadius="100%"
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                        isAnimationActive
                        animationDuration={2000}
                      >
                        {alumniData.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <Users className="h-8 w-8 text-accent mx-auto mb-1" />
                <div className="text-2xl font-bold text-white mb-0.5">25,000+</div>
                <div className="text-white/80 text-sm">Active Alumni</div>
              </div>
            </div>

            {/* Middle Card - slide up from bottom */}
            <div
              className={`will-change-transform transition-transform transition-opacity duration-1000 ease-out ${
                entered ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="card-3d glass p-4 rounded-xl text-center floatStats">
                <div className="mx-auto mb-3 w-20 h-20">
                  <ResponsiveContainer>
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="60%"
                      outerRadius="100%"
                      barSize={10}
                      data={companyData}
                      startAngle={180}
                      endAngle={0}
                    >
                      <RadialBar
                        dataKey="value"
                        cornerRadius={5}
                        isAnimationActive
                        animationDuration={2000}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <Network className="h-8 w-8 text-accent mx-auto mb-1" />
                <div className="text-2xl font-bold text-white mb-0.5">500+</div>
                <div className="text-white/80 text-sm">Companies</div>
              </div>
            </div>

            {/* Right Card - slide from right */}
            <div
              className={`will-change-transform transition-transform transition-opacity duration-1000 ease-out ${
                entered ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="card-3d glass p-4 rounded-xl text-center floatStats">
                <div className="mx-auto mb-3 w-28 h-20">
                  <ResponsiveContainer>
                    <LineChart data={eventsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.6)" />
                      <YAxis hide />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.7)",
                          border: "none",
                          color: "#fff",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="events"
                        stroke="hsl(var(--accent))"
                        strokeWidth={3}
                        dot={{ fill: "white", r: 4 }}
                        isAnimationActive
                        animationDuration={2000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <Calendar className="h-8 w-8 text-accent mx-auto mb-1" />
                <div className="text-2xl font-bold text-white mb-0.5">150+</div>
                <div className="text-white/80 text-sm">Events Yearly</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  );
};

export default HeroSection;

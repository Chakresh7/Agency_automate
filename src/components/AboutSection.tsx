import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 5, suffix: "+", label: "Automation Stacks" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

// Counter hook for animated counting
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

// Individual stat counter component
const StatCounter = ({ value, suffix, label, isVisible, delay }: { 
  value: number; 
  suffix: string; 
  label: string; 
  isVisible: boolean;
  delay: number;
}) => {
  const [shouldCount, setShouldCount] = useState(false);
  const count = useCounter(value, 2000, shouldCount);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldCount(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div 
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground">
        {shouldCount ? count : 0}{suffix}
      </p>
      <p className="text-sm md:text-base text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

export const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useInView({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div ref={sectionRef} className="space-y-8">
            <div>
              <p className={`text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                About Us
              </p>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.2] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <span className="bg-primary text-primary-foreground px-2 py-1 inline-block hover-glow transition-shadow duration-300">Helping founders</span> and teams
                <span className="block text-muted-foreground">automate, scale,</span>
                <span className="block">and convert better.</span>
              </h2>
            </div>
            
            {/* Stats Grid - Clean without boxes */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isVisible={isVisible}
                  delay={300 + index * 150}
                />
              ))}
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8 lg:pt-12">
            <p className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              We're a small, focused team obsessed with one thing: building systems that actually work. 
              No bloated teams. No unnecessary complexity. Just AI-first solutions that help you 
              capture more leads, automate follow-ups, and close more deals.
            </p>
            <p className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              Every project we take on is designed to integrate seamlessly—your website, your CRM, 
              your automations, your chatbots—all working together as one intelligent system.
            </p>
            
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Let's work together
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            {/* Visual */}
            <div 
              ref={imageRef}
              className={`relative aspect-video overflow-hidden mt-8 transition-all duration-1000 ${imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop" 
                alt="Team collaborating on digital projects"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

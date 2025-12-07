import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const CTASection = () => {
  const { ref: sectionRef, isVisible } = useInView({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useInView({ threshold: 0.3 });

  return (
    <section id="contact" className="section-padding bg-primary overflow-hidden">
      <div className="container-wide">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-primary-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Book your free automation
                <span className="block">& website strategy call.</span>
              </h2>
            </div>
            
            <p className={`text-lg text-primary-foreground/80 max-w-lg transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              In just 20-30 minutes, you'll get a quick audit of your current systems, 
              a simple roadmap for automation, and zero pressure—just clarity.
            </p>
            
            <div className="space-y-4">
              {[
                "Quick audit of your current systems",
                "Simple roadmap for automation",
                "Zero pressure, just clarity",
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-foreground animate-bounce-in" style={{ animationDelay: `${400 + index * 150}ms`, animationFillMode: 'both' }} />
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button variant="dark" size="xl" className="group hover-lift" asChild>
                <a href="#contact">
                  <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  Book a Call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Stats/Visual */}
          <div ref={statsRef} className={`relative transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 md:p-12 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                  <p className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground">
                    31+
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-2">
                    calls this<br />month
                  </p>
                </div>
                <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                  <p className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground">
                    4.9
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-2">
                    average<br />rating
                  </p>
                </div>
              </div>
              
              <div className={`mt-8 pt-8 border-t border-primary-foreground/20 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex -space-x-3">
                    {["JD", "MK", "AS", "RB"].map((initials, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center text-xs font-semibold text-primary border-2 border-primary transition-all duration-500 hover:scale-110 hover:z-10 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                        style={{ transitionDelay: `${700 + i * 100}ms` }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-primary-foreground/80">
                    Join 20+ founders who booked this week
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-foreground/20 animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-primary-foreground/20 animate-float-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

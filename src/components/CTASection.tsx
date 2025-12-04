import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-primary-foreground">
                Book your free automation
                <span className="block">& website strategy call.</span>
              </h2>
            </div>
            
            <p className="text-lg text-primary-foreground/80 max-w-lg">
              In just 20-30 minutes, you'll get a quick audit of your current systems, 
              a simple roadmap for automation, and zero pressure—just clarity.
            </p>
            
            <div className="space-y-4">
              {[
                "Quick audit of your current systems",
                "Simple roadmap for automation",
                "Zero pressure, just clarity",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            
            <Button variant="dark" size="xl" className="group" asChild>
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Book a Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          {/* Right Content - Stats/Visual */}
          <div className="relative">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/20">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground">
                    31+
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-2">
                    calls this<br />month
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground">
                    4.9
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-2">
                    average<br />rating
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex -space-x-3">
                    {["JD", "MK", "AS", "RB"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center text-xs font-semibold text-primary border-2 border-primary"
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
          </div>
        </div>
      </div>
    </section>
  );
};

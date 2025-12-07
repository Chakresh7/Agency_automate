import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-40 left-10 w-4 h-4 bg-primary/30 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-60 right-20 w-6 h-6 border-2 border-primary/20 animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary/20 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 animate-slide-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">AI-Powered Growth Agency</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.2]">
              <span className="block whitespace-nowrap animate-slide-right opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                We Build Websites &
              </span>
              <span className="block whitespace-nowrap animate-slide-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <span className="bg-primary text-primary-foreground px-2 py-1 inline-block hover-glow transition-all duration-300">AI Automations</span> That
              </span>
              <span className="block whitespace-nowrap animate-slide-right opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Grow Your Business.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Websites. AI Chatbots. Automations. Landing Pages. CRM Systems. Lead Generation. 
              Everything you need to convert more and work less.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="lg" asChild className="group hover-lift">
                <a href="#contact">
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="hover-scale">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
          
          {/* Right side - Hero Image */}
          <div className="hidden lg:block animate-slide-left opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="relative aspect-square max-w-md ml-auto mr-0 group">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop" 
                alt="Team working on digital solutions"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Decorative elements with animations */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute -top-4 -right-4 w-14 h-14 border-4 border-primary animate-float-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

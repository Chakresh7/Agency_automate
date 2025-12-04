import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 animate-fade-up opacity-0">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Growth Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] animate-fade-up opacity-0 stagger-1">
              We Build Websites & AI Automations That
              <span className="block text-primary"> Grow Your Business</span>
              on Autopilot.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up opacity-0 stagger-2">
              Websites. AI Chatbots. Automations. Landing Pages. CRM Systems. Lead Generation. 
              Everything you need to convert more and work less.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#work">View Our Work</a>
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4 animate-fade-up opacity-0 stagger-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">4.9 Stars from 20+ clients</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Visual */}
          <div className="relative animate-fade-up opacity-0 stagger-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-brand-black rounded-3xl overflow-hidden shadow-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-brand-black to-transparent" />
                
                {/* Dashboard mockup elements */}
                <div className="absolute top-8 left-8 right-8">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-background/10 rounded w-3/4" />
                    <div className="h-4 bg-background/10 rounded w-1/2" />
                    <div className="h-20 bg-background/5 rounded-lg mt-6" />
                  </div>
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                  <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-heading font-bold text-background">+147%</p>
                    <p className="text-sm text-background/60">Lead Growth</p>
                  </div>
                  <div className="bg-primary/90 rounded-xl p-4">
                    <p className="text-3xl font-heading font-bold text-primary-foreground">24/7</p>
                    <p className="text-sm text-primary-foreground/80">AI Support</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Chat Bubble */}
              <div className="absolute -right-4 top-1/4 bg-background border border-border rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI Chatbot</p>
                    <p className="text-xs text-muted-foreground">3 leads captured today</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Automation Badge */}
              <div className="absolute -left-4 bottom-1/4 bg-primary rounded-xl px-4 py-3 shadow-glow animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-sm font-semibold text-primary-foreground">✓ Follow-up sent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

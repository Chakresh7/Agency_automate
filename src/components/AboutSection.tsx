import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Industries Served" },
  { value: "5+", label: "Automation Stacks" },
  { value: "95%", label: "Client Retention" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                Helping founders and teams
                <span className="block text-muted-foreground">automate, scale,</span>
                <span className="block">and convert better.</span>
              </h2>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-4xl md:text-5xl font-heading font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8 lg:pt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a small, focused team obsessed with one thing: building systems that actually work. 
              No bloated teams. No unnecessary complexity. Just AI-first solutions that help you 
              capture more leads, automate follow-ups, and close more deals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project we take on is designed to integrate seamlessly—your website, your CRM, 
              your automations, your chatbots—all working together as one intelligent system.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group"
            >
              Let's work together
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            {/* Visual */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <p className="font-heading text-xl font-semibold">Systems that scale with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

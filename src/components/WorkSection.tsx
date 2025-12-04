import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Real Estate Lead System with Auto Follow-ups",
    category: "Lead Systems",
    description: "Captured 3x more leads and automated nurturing sequences for a property agency.",
  },
  {
    title: "E-commerce AI Support Bot",
    category: "AI Chatbot",
    description: "24/7 customer support handling 80% of inquiries without human intervention.",
  },
  {
    title: "Coach Booking & CRM Integration",
    category: "CRM Automation",
    description: "Automated scheduling, payments, and client management for a business coach.",
  },
  {
    title: "Local Gym Membership Funnel",
    category: "Website + Funnel",
    description: "High-converting landing page with automated trial-to-member journey.",
  },
];

export const WorkSection = () => {
  return (
    <section id="work" className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Real projects. Real systems.
              <span className="block text-muted-foreground">Real results.</span>
            </h2>
          </div>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group whitespace-nowrap"
          >
            View all work
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Each project combines website, automation, and CRM into one connected system. 
          No disconnected tools. No manual handoffs.
        </p>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl overflow-hidden card-hover border border-border"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 right-6 space-y-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-foreground/20" />
                    <div className="w-2 h-2 rounded-full bg-foreground/20" />
                    <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  </div>
                  <div className="h-3 bg-foreground/5 rounded w-2/3" />
                  <div className="h-3 bg-foreground/5 rounded w-1/2" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div className="h-3 bg-foreground/10 rounded w-1/3" />
                      <div className="h-8 w-8 rounded-lg bg-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-3">
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

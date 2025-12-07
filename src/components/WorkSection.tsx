import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "Real Estate Lead System with Auto Follow-ups",
    category: "Lead Systems",
    description: "Captured 3x more leads and automated nurturing sequences for a property agency.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    title: "E-commerce AI Support Bot",
    category: "AI Chatbot",
    description: "24/7 customer support handling 80% of inquiries without human intervention.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    title: "Coach Booking & CRM Integration",
    category: "CRM Automation",
    description: "Automated scheduling, payments, and client management for a business coach.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
  },
  {
    title: "Local Gym Membership Funnel",
    category: "Website + Funnel",
    description: "High-converting landing page with automated trial-to-member journey.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  },
];

export const WorkSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="work" className="section-padding bg-muted/50 overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className={`text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 transition-all duration-500 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Portfolio
            </p>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.2] transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Real projects. <span className="bg-primary text-primary-foreground px-2 py-1 inline-block hover-glow transition-shadow duration-300">Real systems.</span>
              <span className="block text-muted-foreground">Real results.</span>
            </h2>
          </div>
          <Link
            to="/work"
            className={`inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-all duration-500 group whitespace-nowrap ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            View all work
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
        
        <p className={`text-lg text-muted-foreground max-w-2xl mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
          Each project combines website, automation, and CRM into one connected system. 
          No disconnected tools. No manual handoffs.
        </p>
        
        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-background overflow-hidden card-hover border border-border transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-[2/1] bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-2">
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {project.category}
                </span>
                <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

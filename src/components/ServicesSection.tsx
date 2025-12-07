import { ArrowUpRight, Globe, MessageSquare, Zap, FileText, Users, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "Conversion-focused websites designed to turn visitors into leads.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "24/7 chat assistants that answer questions and qualify leads.",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Background workflows that replace manual tasks and follow-ups.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Single-goal pages built for campaigns and paid ads.",
  },
  {
    icon: Users,
    title: "CRM Automations",
    description: "Automatic lead routing, tagging, and nurturing inside your CRM.",
  },
  {
    icon: Target,
    title: "Lead Systems",
    description: "End-to-end funnels that capture, nurture, and hand off sales-ready leads.",
  },
];

export const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useInView({ threshold: 0.1 });
  const { ref: footerRef, isVisible: footerVisible } = useInView({ threshold: 0.5 });

  return (
    <section id="services" className="section-padding bg-primary overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className={`text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4 transition-all duration-500 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              What We Do
            </p>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-primary-foreground transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Our promise is to deliver
              <span className="block">systems that actually work.</span>
            </h2>
          </div>
          <a
            href="#services"
            className={`inline-flex items-center gap-2 text-primary-foreground font-semibold hover:opacity-80 transition-all duration-500 group whitespace-nowrap ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            View all services
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        
        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 bg-primary-foreground/5 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-all duration-500 cursor-pointer ${gridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2 transition-transform duration-300 group-hover:translate-x-1">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 group-hover:text-primary-foreground/90 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Hover arrow indicator */}
              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span className="text-sm font-medium text-primary-foreground">Learn more</span>
                <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div ref={footerRef} className={`text-center pt-8 border-t border-primary-foreground/10 transition-all duration-700 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            All our services integrate into one connected system. No disconnected tools. 
            Your website, CRM, automations, and AI all work together seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

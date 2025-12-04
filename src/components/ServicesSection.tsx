import { ArrowUpRight, Globe, MessageSquare, Zap, FileText, Users, Target } from "lucide-react";

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
  return (
    <section id="services" className="section-padding bg-primary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-primary-foreground">
              Our promise is to deliver
              <span className="block">systems that actually work.</span>
            </h2>
          </div>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:opacity-80 transition-opacity group whitespace-nowrap"
          >
            View all services
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center pt-8 border-t border-primary-foreground/10">
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            All our services integrate into one connected system. No disconnected tools. 
            Your website, CRM, automations, and AI all work together seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, goals, and current pain points.",
  },
  {
    number: "02",
    title: "Strategy & System Design",
    description: "We map out your ideal system architecture and automation flows.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "We build your website, automations, and integrations.",
  },
  {
    number: "04",
    title: "Launch & Train",
    description: "We launch everything and train your team on how to use it.",
  },
  {
    number: "05",
    title: "Ongoing Optimization",
    description: "We monitor, improve, and scale your systems over time.",
  },
];

export const ProcessSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useInView({ threshold: 0.3 });
  const { ref: stepsRef, isVisible: stepsVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className={`text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 transition-all duration-500 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our Process
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            How we <span className="underline decoration-primary decoration-4 underline-offset-8">work together</span>
          </h2>
          <p className={`text-lg text-muted-foreground mt-4 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            A simple, proven process to get you from idea to live system.
          </p>
        </div>
        
        {/* Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center lg:text-left group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number Box */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-muted mb-6 lg:mb-8 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:-translate-y-2">
                <span className="text-2xl font-heading font-bold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-lg font-heading font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

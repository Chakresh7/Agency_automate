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
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
            How we work together
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            A simple, proven process to get you from idea to live system.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center lg:text-left">
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-6 lg:mb-8">
                  <span className="text-2xl font-heading font-bold text-foreground">
                    {step.number}
                  </span>
                  {/* Connector dot for desktop */}
                  <div className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                
                <h3 className="text-lg font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

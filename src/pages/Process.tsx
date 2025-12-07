import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ChevronDown, Calendar, Phone, FileText, Code, Rocket, HeartHandshake } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "We learn about your business, goals, and current pain points.",
    details: [
      "30-minute free consultation",
      "Understand your business model",
      "Identify key challenges and opportunities",
      "Discuss your vision and goals",
      "No obligation, just clarity"
    ]
  },
  {
    number: "02",
    icon: FileText,
    title: "Strategy & System Design",
    description: "We map out your ideal system architecture and automation flows.",
    details: [
      "Custom solution blueprint",
      "Technology stack recommendations",
      "Integration planning",
      "Timeline and milestone mapping",
      "Detailed project proposal"
    ]
  },
  {
    number: "03",
    icon: Code,
    title: "Build & Integrate",
    description: "We build your website, automations, and integrations.",
    details: [
      "Agile development process",
      "Regular progress updates",
      "Quality assurance testing",
      "System integrations",
      "Performance optimization"
    ]
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Train",
    description: "We launch everything and train your team on how to use it.",
    details: [
      "Thorough launch checklist",
      "Team training sessions",
      "Documentation and guides",
      "Video walkthroughs",
      "Hands-on support during launch"
    ]
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Ongoing Optimization",
    description: "We monitor, improve, and scale your systems over time.",
    details: [
      "Performance monitoring",
      "Continuous improvements",
      "Priority support",
      "Regular check-ins",
      "Scale as you grow"
    ]
  },
];

const faqs = [
  {
    question: "How long does the entire process take?",
    answer: "The timeline depends on project complexity. Simple projects take 2-4 weeks, standard projects 4-8 weeks, and comprehensive systems 8-12 weeks. We'll provide a detailed timeline during the Strategy phase."
  },
  {
    question: "What happens during the Discovery Call?",
    answer: "It's a free 30-minute conversation where we learn about your business, discuss your challenges, and explore how our solutions can help. There's no pressure or obligation—just clarity on your next steps."
  },
  {
    question: "How involved do I need to be during the project?",
    answer: "We handle the heavy lifting, but your input is valuable. Expect a few check-in calls, feedback sessions, and approval points. We make it easy and respect your time."
  },
  {
    question: "What if I need changes during the build phase?",
    answer: "We build in flexibility for adjustments. Minor changes are typically included, and we'll discuss any scope changes transparently before proceeding."
  },
  {
    question: "How does training work?",
    answer: "We provide comprehensive training including live sessions, recorded videos, and written documentation. We ensure your team is confident using the new systems before we wrap up."
  },
  {
    question: "What kind of ongoing support do you offer?",
    answer: "We offer various support packages from basic maintenance to priority support with dedicated account management. We'll recommend the right level based on your needs."
  },
  {
    question: "Can you work with our existing tools?",
    answer: "Absolutely! We specialize in integrations and can work with most CRMs, email platforms, payment processors, and other business tools you're already using."
  },
  {
    question: "What makes your process different?",
    answer: "We focus on connected systems, not isolated solutions. Every phase is designed to ensure your website, automations, and CRM work together seamlessly as one intelligent system."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-wide section-padding !py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left FAQs */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              FAQ's
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-border bg-background"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Process
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              How We Work Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A simple, proven process to get you from idea to live system. 
              No complexity, no confusion—just results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="grid md:grid-cols-12 gap-6 md:gap-8 items-start border border-border p-6 md:p-8 hover:border-primary/50 transition-colors"
              >
                {/* Number & Icon */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-16 h-16 bg-muted flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-heading font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Details */}
                <div className="md:col-span-6">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Visual */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-wide section-padding !py-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Most projects follow this general timeline, though we customize based on your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-5 gap-4 md:gap-6">
            {[
              { week: "Week 1", phase: "Discovery & Strategy" },
              { week: "Week 2-3", phase: "Design & Planning" },
              { week: "Week 4-6", phase: "Development" },
              { week: "Week 7", phase: "Testing & QA" },
              { week: "Week 8", phase: "Launch & Training" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-foreground/10 p-4 md:p-6 mb-3">
                  <p className="text-sm md:text-base font-semibold text-primary-foreground">{item.week}</p>
                </div>
                <p className="text-xs md:text-sm text-primary-foreground/80">{item.phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide section-padding !py-0">
          <div className="bg-primary p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-primary-foreground">
                  Ready to get
                  <span className="block">started?</span>
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                  Book your free discovery call and let's discuss how we can help grow your business.
                </p>
                <a 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  Book Now
                  <Calendar className="w-5 h-5" />
                </a>
              </div>
              
              {/* Right - Calendar Mockup */}
              <div className="relative hidden lg:block">
                <div className="bg-white p-6 shadow-lg">
                  {/* Calendar Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-2 bg-gray-200 rounded w-20" />
                    <div className="h-2 bg-gray-200 rounded w-12" />
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {[...Array(21)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          i === 10 ? "border-2 border-primary" : "bg-gray-100"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Selected Date Badge */}
                  <div className="absolute top-1/2 right-8 -translate-y-1/2">
                    <div className="bg-white border-2 border-primary rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                      <div className="flex items-baseline">
                        <span className="text-xl font-bold">31</span>
                        <span className="text-[10px]">th</span>
                      </div>
                      <span className="text-xs text-gray-600">10:00 AM</span>
                    </div>
                  </div>
                  
                  {/* Time Slots */}
                  <div className="space-y-2 mt-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-2 bg-gray-100 rounded w-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Process;


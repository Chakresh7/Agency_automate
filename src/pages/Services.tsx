import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ChevronDown, Calendar, Globe, MessageSquare, Zap, FileText, Users, Target } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "websites",
    icon: Globe,
    title: "Websites",
    description: "Conversion-focused websites designed to turn visitors into leads and customers.",
  },
  {
    slug: "ai-chatbots",
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "24/7 chat assistants that answer questions, qualify leads, and book appointments.",
  },
  {
    slug: "automations",
    icon: Zap,
    title: "Automations",
    description: "Background workflows that replace manual tasks, follow-ups, and repetitive work.",
  },
  {
    slug: "landing-pages",
    icon: FileText,
    title: "Landing Pages",
    description: "Single-goal pages built for campaigns, product launches, and paid advertising.",
  },
  {
    slug: "crm-automations",
    icon: Users,
    title: "CRM Automations",
    description: "Automatic lead routing, tagging, scoring, and nurturing inside your CRM.",
  },
  {
    slug: "lead-systems",
    icon: Target,
    title: "Lead Systems",
    description: "End-to-end funnels that capture, nurture, and hand off sales-ready leads.",
  },
];

const faqs = [
  {
    question: "What services does AutoScale provide?",
    answer: "We provide comprehensive digital solutions including website development, AI chatbots, marketing automations, landing pages, CRM integrations, and complete lead generation systems. All our services are designed to work together as one connected system."
  },
  {
    question: "How do I start working with AutoScale?",
    answer: "Simply book a free discovery call through our website. We'll discuss your business goals, current challenges, and explore how our solutions can help. There's no obligation—just clarity on your next steps."
  },
  {
    question: "What industries does AutoScale specialize in?",
    answer: "We work with businesses across various industries including real estate, e-commerce, professional services, coaching, healthcare, hospitality, and SaaS. Our solutions are adaptable to any business that wants to automate and scale."
  },
  {
    question: "Can AutoScale help improve our existing website?",
    answer: "Absolutely! We can audit your current website, identify conversion opportunities, and either optimize what you have or rebuild with a focus on lead generation and automation integration."
  },
  {
    question: "What sets AutoScale apart from other agencies?",
    answer: "We focus on connected systems, not isolated solutions. Every project integrates your website, CRM, and automations into one cohesive system. We're also highly focused on measurable results and ROI."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary based on complexity. Simple automations take 2-3 weeks, standard websites 4-6 weeks, and comprehensive systems with multiple integrations 8-12 weeks."
  },
  {
    question: "Is AutoScale available for ongoing support after the project is completed?",
    answer: "Yes! We offer various support packages including monthly maintenance, priority support, and continuous optimization. We're committed to ensuring your systems run smoothly long-term."
  },
  {
    question: "What are the payment terms and methods accepted by AutoScale?",
    answer: "We typically require 50% upfront and 50% upon completion. For larger projects, we offer milestone-based payments. We accept bank transfers, credit cards, and can accommodate most payment preferences."
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
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=1000&fit=crop" 
                  alt="FAQ illustration"
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

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              AutoScale is a growth agency delivering digital excellence through AI-powered 
              automations, websites, and connected systems.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="group bg-background border border-border p-8 hover:border-primary/50 transition-colors flex flex-col h-full"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Read More */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-auto">
                  Read More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
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
                  Book your free
                  <span className="block">consultation now</span>
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                  This is a placeholder text for the consultation call to action that can be a few lines in length.
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

export default Services;


import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ChevronDown, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary based on complexity, but most projects are completed within 4-8 weeks. Simple automations may take 2-3 weeks, while comprehensive systems with multiple integrations can take 8-12 weeks."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer project-based pricing tailored to your specific needs. After our discovery call, we provide a detailed proposal with transparent pricing. No hidden fees or surprise charges."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer various support packages including monthly maintenance, priority support, and continuous optimization. We're committed to ensuring your systems run smoothly long after launch."
  },
  {
    question: "Can you integrate with our existing tools and systems?",
    answer: "Absolutely. We specialize in integrations and can connect with most CRMs, email platforms, payment processors, and other business tools. We'll assess your current stack during the discovery phase."
  },
  {
    question: "What if we need changes after the project is complete?",
    answer: "We include a revision period in every project. After launch, we offer affordable change requests and can set up a retainer for ongoing updates and improvements."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "We primarily work with small to medium-sized businesses, startups, and entrepreneurs who want to scale efficiently. Our solutions are designed to grow with your business."
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "Security is paramount. We follow industry best practices, use encrypted connections, implement proper authentication, and ensure compliance with relevant data protection regulations."
  },
  {
    question: "What makes your approach different from other agencies?",
    answer: "We focus on connected systems, not isolated solutions. Every project integrates your website, CRM, and automations into one cohesive system that works together seamlessly."
  },
  {
    question: "Can you train our team to use the new systems?",
    answer: "Yes, training is included in every project. We provide documentation, video walkthroughs, and live training sessions to ensure your team is confident using the new systems."
  },
  {
    question: "What happens during the discovery call?",
    answer: "During our free 30-minute discovery call, we learn about your business, discuss your challenges, and explore how automation can help. There's no obligation—just clarity on your next steps."
  }
];

const projects = [
  {
    slug: "real-estate-lead-system",
    title: "Real Estate Lead System with Auto Follow-ups",
    category: "Lead Systems",
    description: "Captured 3x more leads and automated nurturing sequences for a property agency.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    results: ["3x more leads", "Automated follow-ups", "CRM integration"],
  },
  {
    slug: "ecommerce-ai-support-bot",
    title: "E-commerce AI Support Bot",
    category: "AI Chatbot",
    description: "24/7 customer support handling 80% of inquiries without human intervention.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    results: ["80% automation rate", "24/7 availability", "Reduced support costs"],
  },
  {
    slug: "coach-booking-crm",
    title: "Coach Booking & CRM Integration",
    category: "CRM Automation",
    description: "Automated scheduling, payments, and client management for a business coach.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
    results: ["Automated scheduling", "Payment integration", "Client dashboard"],
  },
  {
    slug: "gym-membership-funnel",
    title: "Local Gym Membership Funnel",
    category: "Website + Funnel",
    description: "High-converting landing page with automated trial-to-member journey.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    results: ["2x trial signups", "Automated onboarding", "Member retention flow"],
  },
  {
    slug: "saas-onboarding-automation",
    title: "SaaS Onboarding Automation",
    category: "Automation",
    description: "Complete user onboarding flow with personalized email sequences and in-app guidance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    results: ["50% faster onboarding", "Reduced churn", "Personalized journeys"],
  },
  {
    slug: "law-firm-lead-bot",
    title: "Law Firm Lead Qualification Bot",
    category: "AI Chatbot",
    description: "AI-powered intake system that qualifies leads and schedules consultations automatically.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    results: ["40% more consultations", "Pre-qualified leads", "24/7 intake"],
  },
  {
    slug: "restaurant-reservation-system",
    title: "Restaurant Reservation System",
    category: "Website + Automation",
    description: "Online booking system with automated confirmations, reminders, and review requests.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    results: ["Online reservations", "Reduced no-shows", "Automated reviews"],
  },
  {
    slug: "insurance-agency-crm",
    title: "Insurance Agency CRM Overhaul",
    category: "CRM Automation",
    description: "Complete CRM setup with lead scoring, automated follow-ups, and renewal reminders.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    results: ["Lead scoring system", "Renewal automation", "Pipeline visibility"],
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide section-padding !py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop" 
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 p-6 bg-primary/10">
                <h3 className="text-xl font-heading font-semibold mb-2">Have more questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a free discovery call and get all your questions answered.
                </p>
                <a 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book a Free Call
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right FAQs */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Frequently Asked
              <span className="block text-muted-foreground">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-border"
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
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Real projects. Real systems.
              <span className="block text-muted-foreground">Real results.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Each project combines website, automation, and CRM into one connected system. 
              No disconnected tools. No manual handoffs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/work/${project.slug}`}
                className="group bg-background overflow-hidden border border-border hover:border-primary/50 transition-colors block"
              >
                {/* Project Image */}
                <div className="aspect-[2/1] bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 space-y-2">
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  
                  {/* Results */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.results.map((result, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-muted px-2 py-0.5 text-muted-foreground"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
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

export default Work;


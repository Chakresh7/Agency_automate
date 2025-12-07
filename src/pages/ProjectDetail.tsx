import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ArrowLeft, ChevronDown } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

const projectsData: Record<string, {
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  image: string;
  liveUrl?: string;
  overview: string;
  features: string[];
  technologies: string[];
  goals: string[];
  results: string[];
  gallery: string[];
}> = {
  "real-estate-lead-system": {
    title: "Real Estate Lead System with Auto Follow-ups",
    category: "Lead Systems",
    client: "Mitchell Realty",
    year: "2024",
    description: "Captured 3x more leads and automated nurturing sequences for a property agency.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "The objective of this project was to create a comprehensive lead capture and nurturing system for a growing real estate agency. The system automates the entire lead journey from initial capture to conversion, eliminating manual follow-ups and ensuring no lead falls through the cracks.",
    features: [
      "Multi-channel Lead Capture: Integrated forms on website, landing pages, and social media to capture leads from various sources.",
      "Automated Email Sequences: Created personalized drip campaigns based on lead behavior and property interests.",
      "SMS Follow-ups: Implemented timely text message reminders for property viewings and follow-ups.",
      "Lead Scoring System: Developed intelligent scoring to prioritize hot leads for immediate agent attention.",
      "CRM Integration: Seamless sync with existing CRM to maintain single source of truth.",
      "Analytics Dashboard: Real-time tracking of lead sources, conversion rates, and agent performance."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Twilio", "SendGrid", "Zapier", "HubSpot CRM"],
    goals: [
      "Increase lead capture rate by 200% within 3 months",
      "Reduce manual follow-up time by 80%",
      "Improve lead-to-client conversion rate",
      "Create scalable system for future growth"
    ],
    results: ["3x more leads captured", "80% reduction in manual tasks", "45% higher conversion rate", "ROI achieved in 6 weeks"],
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop"
    ]
  },
  "ecommerce-ai-support-bot": {
    title: "E-commerce AI Support Bot",
    category: "AI Chatbot",
    client: "TechStart Co",
    year: "2024",
    description: "24/7 customer support handling 80% of inquiries without human intervention.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "This project involved developing an intelligent AI chatbot for a fast-growing e-commerce platform. The bot handles customer inquiries around the clock, from order tracking to product recommendations, freeing up the support team to handle complex issues.",
    features: [
      "Natural Language Processing: Advanced NLP to understand customer intent and context.",
      "Order Tracking: Real-time order status updates and delivery information.",
      "Product Recommendations: AI-powered suggestions based on browsing history and preferences.",
      "Returns & Refunds: Automated processing of return requests and refund inquiries.",
      "Human Handoff: Seamless escalation to human agents for complex issues.",
      "Multi-language Support: Supports 5 languages for global customer base."
    ],
    technologies: ["OpenAI GPT-4", "Python", "FastAPI", "PostgreSQL", "Redis", "Shopify API", "Intercom"],
    goals: [
      "Handle 80% of support tickets automatically",
      "Reduce average response time to under 30 seconds",
      "Maintain 90%+ customer satisfaction score",
      "Available 24/7 without additional staffing"
    ],
    results: ["80% automation rate", "15-second avg response", "92% satisfaction score", "$50K/year saved"],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ]
  },
  "coach-booking-crm": {
    title: "Coach Booking & CRM Integration",
    category: "CRM Automation",
    client: "Coach Hub Pro",
    year: "2023",
    description: "Automated scheduling, payments, and client management for a business coach.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "A comprehensive booking and client management system designed for a high-profile business coach. The system handles everything from initial consultation booking to payment processing and ongoing client relationship management.",
    features: [
      "Smart Scheduling: Calendar integration with automatic timezone detection and conflict prevention.",
      "Payment Processing: Secure payment collection with multiple payment options and installment plans.",
      "Client Portal: Dedicated area for clients to access resources, track progress, and manage bookings.",
      "Automated Reminders: Email and SMS reminders to reduce no-shows.",
      "Session Notes: Easy-to-use interface for coaches to document session outcomes.",
      "Progress Tracking: Visual dashboards showing client progress and engagement."
    ],
    technologies: ["Next.js", "Stripe", "Calendly API", "Notion API", "Airtable", "Twilio", "Google Calendar"],
    goals: [
      "Eliminate double-bookings and scheduling conflicts",
      "Automate payment collection and reminders",
      "Reduce administrative time by 70%",
      "Improve client experience and retention"
    ],
    results: ["Zero scheduling conflicts", "95% on-time payments", "70% less admin work", "40% client retention increase"],
    gallery: [
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop"
    ]
  },
  "gym-membership-funnel": {
    title: "Local Gym Membership Funnel",
    category: "Website + Funnel",
    client: "FitLife Gym",
    year: "2023",
    description: "High-converting landing page with automated trial-to-member journey.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "A complete digital marketing funnel for a local gym chain looking to increase memberships. The project included a high-converting landing page, automated email nurturing, and a seamless trial-to-paid conversion flow.",
    features: [
      "High-Converting Landing Page: Optimized design with compelling copy and social proof.",
      "Free Trial Signup: Frictionless signup process for 7-day free trial.",
      "Automated Onboarding: Welcome sequence with gym tour scheduling and first workout tips.",
      "Nurture Sequences: Targeted emails based on trial activity and engagement.",
      "Conversion Optimization: A/B tested CTAs and pricing displays.",
      "Referral System: Built-in referral program to incentivize member referrals."
    ],
    technologies: ["Webflow", "ActiveCampaign", "Stripe", "Zapier", "Google Analytics", "Hotjar", "Typeform"],
    goals: [
      "Double free trial signups within 60 days",
      "Achieve 40% trial-to-paid conversion rate",
      "Reduce cost per acquisition by 30%",
      "Build sustainable member growth engine"
    ],
    results: ["2.5x trial signups", "52% conversion rate", "35% lower CPA", "200+ new members/month"],
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop"
    ]
  },
  "saas-onboarding-automation": {
    title: "SaaS Onboarding Automation",
    category: "Automation",
    client: "CloudSync Inc",
    year: "2024",
    description: "Complete user onboarding flow with personalized email sequences and in-app guidance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "An end-to-end onboarding automation system for a B2B SaaS platform. The project focused on reducing time-to-value for new users through personalized guidance, automated check-ins, and proactive support.",
    features: [
      "Welcome Flow: Personalized welcome sequence based on user role and company size.",
      "In-App Guidance: Interactive product tours and tooltips for key features.",
      "Progress Tracking: Visual onboarding checklist with completion incentives.",
      "Automated Check-ins: Triggered emails based on user activity and milestones.",
      "Health Scoring: Early warning system for at-risk accounts.",
      "Success Milestones: Celebration of key achievements to drive engagement."
    ],
    technologies: ["Intercom", "Segment", "Customer.io", "Mixpanel", "Appcues", "Slack API", "PostgreSQL"],
    goals: [
      "Reduce time-to-first-value by 50%",
      "Increase 30-day retention by 25%",
      "Scale onboarding without adding headcount",
      "Identify and rescue at-risk users early"
    ],
    results: ["60% faster onboarding", "35% better retention", "3x more activations", "20% less churn"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
    ]
  },
  "law-firm-lead-bot": {
    title: "Law Firm Lead Qualification Bot",
    category: "AI Chatbot",
    client: "Williams Legal",
    year: "2024",
    description: "AI-powered intake system that qualifies leads and schedules consultations automatically.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "A sophisticated AI intake system for a growing law firm. The chatbot handles initial client inquiries, qualifies potential cases, collects necessary information, and schedules consultations—all while maintaining the professional tone expected in legal services.",
    features: [
      "Intelligent Qualification: Asks relevant questions to determine case viability.",
      "Case Type Detection: Automatically routes inquiries to appropriate practice areas.",
      "Document Collection: Secure upload for relevant documents and evidence.",
      "Consultation Scheduling: Direct calendar integration for booking appointments.",
      "Conflict Check: Preliminary conflict of interest screening.",
      "After-Hours Coverage: 24/7 availability to capture leads outside business hours."
    ],
    technologies: ["OpenAI", "Clio API", "Calendly", "Typeform", "DocuSign", "Twilio", "AWS Lambda"],
    goals: [
      "Capture 100% of after-hours inquiries",
      "Qualify leads before attorney consultation",
      "Reduce intake staff workload by 60%",
      "Improve lead-to-client conversion"
    ],
    results: ["40% more consultations", "65% staff time saved", "24/7 availability", "Higher quality leads"],
    gallery: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
    ]
  },
  "restaurant-reservation-system": {
    title: "Restaurant Reservation System",
    category: "Website + Automation",
    client: "Bella Cucina",
    year: "2023",
    description: "Online booking system with automated confirmations, reminders, and review requests.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "A complete digital transformation for a popular restaurant group. The system handles online reservations, table management, automated communications, and post-dining review collection to boost online reputation.",
    features: [
      "Online Reservations: Beautiful, mobile-friendly booking widget.",
      "Table Management: Visual floor plan with real-time availability.",
      "Automated Confirmations: Instant confirmation via email and SMS.",
      "Smart Reminders: Timed reminders to reduce no-shows.",
      "Waitlist Management: Automated waitlist with real-time updates.",
      "Review Collection: Post-visit emails encouraging Google/Yelp reviews."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Twilio", "SendGrid", "Google Places API", "Stripe"],
    goals: [
      "Enable 100% online booking capability",
      "Reduce no-show rate below 5%",
      "Increase online reviews by 200%",
      "Eliminate phone reservation bottleneck"
    ],
    results: ["85% online bookings", "3% no-show rate", "4.8 star rating", "30% more covers"],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
    ]
  },
  "insurance-agency-crm": {
    title: "Insurance Agency CRM Overhaul",
    category: "CRM Automation",
    client: "Torres Insurance",
    year: "2024",
    description: "Complete CRM setup with lead scoring, automated follow-ups, and renewal reminders.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
    liveUrl: "#",
    overview: "A comprehensive CRM implementation and automation project for an insurance agency. The system centralizes all client data, automates policy renewals, and implements intelligent lead scoring to prioritize sales efforts.",
    features: [
      "Centralized Database: Single source of truth for all client and policy information.",
      "Lead Scoring: AI-powered scoring based on demographics and behavior.",
      "Renewal Automation: Automated reminders 60, 30, and 7 days before policy expiration.",
      "Quote Follow-ups: Triggered sequences for pending quotes.",
      "Cross-sell Opportunities: Intelligent suggestions for additional coverage.",
      "Agent Dashboard: Performance tracking and pipeline visibility."
    ],
    technologies: ["HubSpot CRM", "Zapier", "Google Sheets", "Twilio", "DocuSign", "Calendly", "Power BI"],
    goals: [
      "Achieve 95% policy renewal rate",
      "Reduce quote-to-close time by 40%",
      "Increase cross-sell revenue by 25%",
      "Full pipeline visibility for management"
    ],
    results: ["97% renewal rate", "50% faster closes", "35% more cross-sells", "Real-time reporting"],
    gallery: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ]
  }
};

const relatedProjects = [
  { slug: "real-estate-lead-system", title: "Real Estate Lead System", category: "Lead Systems", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop" },
  { slug: "ecommerce-ai-support-bot", title: "E-commerce AI Support Bot", category: "AI Chatbot", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
  { slug: "coach-booking-crm", title: "Coach Booking & CRM", category: "CRM Automation", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=300&fit=crop" },
  { slug: "gym-membership-funnel", title: "Gym Membership Funnel", category: "Website + Funnel", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-wide section-padding !py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop" 
                  alt="FAQ illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 p-6 bg-primary/10">
                <h3 className="text-xl font-heading font-semibold mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Book a free call and let's discuss your project in detail.
                </p>
                <a 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right FAQs */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Frequently Asked Questions
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

const RelatedProjectCard = ({ project }: { project: { slug: string; title: string; category: string; image: string } }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/work/${project.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-background border border-border overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-primary font-medium">{project.category}</span>
        <h3 className="font-heading font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
          {project.title}
          <ArrowUpRight className="w-4 h-4" />
        </h3>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link to="/work" className="text-primary hover:underline">
            ← Back to all projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherProjects = relatedProjects.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-wide section-padding !py-0">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.overview}
            </p>
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                View live website
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </section>
      
      {/* Project Info */}
      <section className="pb-12">
        <div className="container-wide section-padding !py-0">
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Service</p>
              <p className="font-semibold">{project.category}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Client</p>
              <p className="font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Year</p>
              <p className="font-semibold">{project.year}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Image */}
      <section className="pb-16">
        <div className="container-wide section-padding !py-0">
          <div className="aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Detailed Content */}
      <section className="pb-16">
        <div className="container-wide section-padding !py-0">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Project Goals */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Project Goals</h2>
                <ul className="space-y-3">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary font-bold">{index + 1}.</span>
                      <span className="text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <div key={index} className="aspect-video overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-muted/50 p-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-background px-3 py-1 border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-primary/10 p-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Results Achieved</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary" />
                      <span className="font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="bg-brand-black p-6 text-white">
                <h3 className="text-lg font-heading font-semibold mb-2">Want similar results?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Let's discuss how we can build a system that works for your business.
                </p>
                <a 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Related Projects */}
      <section className="py-16 bg-muted/50">
        <div className="container-wide section-padding !py-0">
          <h2 className="text-3xl font-heading font-bold mb-8">Related Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((proj, index) => (
              <RelatedProjectCard key={index} project={proj} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ProjectDetail;


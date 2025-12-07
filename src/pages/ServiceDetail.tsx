import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ArrowLeft, Globe, MessageSquare, Zap, FileText, Users, Target } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";

const servicesData: Record<string, {
  title: string;
  icon: any;
  image: string;
  description: string;
  overview: string;
  sections: {
    title: string;
    items: string[];
  }[];
  approach: string;
}> = {
  "websites": {
    title: "Websites",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    description: "Conversion-focused websites designed to turn visitors into leads and customers.",
    overview: "At AutoScale, we offer comprehensive website development services tailored to meet the diverse needs of our clients. With a commitment to innovation and client satisfaction, we specialize in crafting cutting-edge digital solutions that resonate with both businesses and end-users. Our services encompass a wide array of offerings ensuring a seamless and engaging digital experience.",
    sections: [
      {
        title: "Website Development Services",
        items: [
          "Craft bespoke, responsive websites tailored to your brand's identity and business objectives. Our team ensures a user-centric design with a focus on functionality and aesthetics.",
          "Develop scalable and secure e-commerce platforms, providing a seamless shopping experience for your customers while empowering you with robust backend management.",
          "Implement Content Management Systems (CMS) such as WordPress, Webflow, or custom solutions, enabling efficient content editing and site management.",
          "Create sophisticated web applications that cater to specific business needs, leveraging the latest technologies to ensure optimal performance and user experience.",
          "Build and integrate APIs, fostering seamless connectivity between different software systems to enhance overall functionality."
        ]
      },
      {
        title: "Design & Optimization",
        items: [
          "UI/UX Design focused on conversion optimization",
          "Mobile-first responsive design approach",
          "Performance optimization for fast loading times",
          "SEO-friendly architecture and implementation",
          "Accessibility compliance and best practices"
        ]
      }
    ],
    approach: "We combine the latest technologies, industry best practices, and a talented team of developers and designers to create solutions that align with our clients' visions. Our agile methodologies ensure efficient development, timely delivery, and consistent communication throughout the process."
  },
  "ai-chatbots": {
    title: "AI Chatbots",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop",
    description: "24/7 chat assistants that answer questions, qualify leads, and book appointments.",
    overview: "Our AI chatbot solutions leverage cutting-edge artificial intelligence to provide your business with intelligent, always-available customer support. We build chatbots that understand context, learn from interactions, and deliver personalized experiences that feel natural and helpful.",
    sections: [
      {
        title: "Chatbot Capabilities",
        items: [
          "Natural Language Processing (NLP) for understanding customer intent and providing accurate responses to complex queries.",
          "Lead qualification and scoring to automatically identify and prioritize high-value prospects for your sales team.",
          "Appointment booking and calendar integration for seamless scheduling without human intervention.",
          "Product recommendations based on customer preferences, browsing history, and purchase patterns.",
          "Multi-language support to serve your global customer base in their preferred language."
        ]
      },
      {
        title: "Integration & Analytics",
        items: [
          "CRM integration for automatic lead capture and data sync",
          "E-commerce platform integration for order tracking",
          "Analytics dashboard for conversation insights",
          "Human handoff protocols for complex issues",
          "Continuous learning and improvement systems"
        ]
      }
    ],
    approach: "We design chatbots that feel like talking to a knowledgeable team member, not a robot. Our approach focuses on understanding your customers' needs, mapping conversation flows, and continuously optimizing based on real interaction data."
  },
  "automations": {
    title: "Automations",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=600&fit=crop",
    description: "Background workflows that replace manual tasks, follow-ups, and repetitive work.",
    overview: "Transform your business operations with intelligent automation workflows. We design and implement systems that handle repetitive tasks, streamline processes, and free your team to focus on high-value work that drives growth.",
    sections: [
      {
        title: "Automation Services",
        items: [
          "Email automation sequences for lead nurturing, onboarding, and customer retention campaigns.",
          "Task automation to eliminate manual data entry, file management, and routine administrative work.",
          "Workflow automation connecting multiple tools and platforms for seamless data flow.",
          "Notification systems for real-time alerts on important events and triggers.",
          "Report generation and distribution automation for stakeholder updates."
        ]
      },
      {
        title: "Integration Capabilities",
        items: [
          "CRM and marketing platform integrations",
          "Payment processor and accounting software connections",
          "Communication tool integrations (Slack, Teams, Email)",
          "Custom API development and webhooks",
          "Database synchronization and data mapping"
        ]
      }
    ],
    approach: "We start by mapping your current processes, identifying bottlenecks and manual touchpoints, then design automation workflows that integrate seamlessly with your existing tools. Our solutions are built for reliability and scale."
  },
  "landing-pages": {
    title: "Landing Pages",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    description: "Single-goal pages built for campaigns, product launches, and paid advertising.",
    overview: "High-converting landing pages designed with one purpose: to turn visitors into leads or customers. We combine persuasive copywriting, compelling design, and conversion optimization techniques to maximize your campaign ROI.",
    sections: [
      {
        title: "Landing Page Services",
        items: [
          "Campaign-specific landing pages optimized for paid advertising and promotional campaigns.",
          "Product launch pages that build anticipation and capture early interest from your audience.",
          "Lead magnet pages designed to grow your email list with valuable content offers.",
          "Webinar and event registration pages with integrated scheduling and reminder systems.",
          "Sales pages with persuasive copy and strategic call-to-action placement."
        ]
      },
      {
        title: "Optimization Features",
        items: [
          "A/B testing for headlines, CTAs, and layouts",
          "Heat mapping and user behavior analysis",
          "Mobile-optimized responsive design",
          "Fast loading speed optimization",
          "Analytics and conversion tracking setup"
        ]
      }
    ],
    approach: "Every landing page we create starts with understanding your audience and offer. We use proven conversion frameworks, compelling visual design, and rigorous testing to ensure maximum performance."
  },
  "crm-automations": {
    title: "CRM Automations",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    description: "Automatic lead routing, tagging, scoring, and nurturing inside your CRM.",
    overview: "Maximize the power of your CRM with intelligent automation. We implement systems that automatically organize, score, and nurture your leads, ensuring no opportunity falls through the cracks while your team focuses on closing deals.",
    sections: [
      {
        title: "CRM Automation Services",
        items: [
          "Lead scoring systems that automatically prioritize prospects based on engagement and fit criteria.",
          "Automated lead routing to assign leads to the right team members based on territory, expertise, or availability.",
          "Pipeline automation with automatic stage progression and task creation based on deal activity.",
          "Follow-up sequences triggered by specific actions or time-based rules.",
          "Data enrichment automation to keep contact records complete and up-to-date."
        ]
      },
      {
        title: "Reporting & Analytics",
        items: [
          "Automated reporting dashboards and alerts",
          "Sales forecasting and pipeline analytics",
          "Team performance tracking",
          "Customer lifecycle analytics",
          "ROI and attribution reporting"
        ]
      }
    ],
    approach: "We work within your existing CRM platform to implement automations that match your sales process. Our goal is to make your CRM work for you, not the other way around."
  },
  "lead-systems": {
    title: "Lead Systems",
    icon: Target,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=600&fit=crop",
    description: "End-to-end funnels that capture, nurture, and hand off sales-ready leads.",
    overview: "Complete lead generation systems that work 24/7 to attract, capture, and qualify prospects. We build integrated funnels that guide potential customers from first touch to sales-ready handoff.",
    sections: [
      {
        title: "Lead System Components",
        items: [
          "Multi-channel lead capture forms optimized for conversion across website, social, and advertising platforms.",
          "Lead magnet development including ebooks, guides, templates, and other valuable content offers.",
          "Automated nurture sequences that educate and engage leads until they're ready to buy.",
          "Lead qualification workflows to identify and prioritize your best opportunities.",
          "Sales handoff systems with automatic notifications and complete lead history."
        ]
      },
      {
        title: "Optimization & Scaling",
        items: [
          "Funnel analytics and conversion tracking",
          "A/B testing across all funnel stages",
          "Retargeting and remarketing integration",
          "Multi-touch attribution modeling",
          "Scalable infrastructure for growth"
        ]
      }
    ],
    approach: "We design lead systems with your entire customer journey in mind. From awareness to decision, every touchpoint is optimized to move prospects forward while building trust and demonstrating value."
  }
};

const allServices = [
  { slug: "websites", title: "Websites", icon: Globe, description: "Conversion-focused websites designed to turn visitors into leads." },
  { slug: "ai-chatbots", title: "AI Chatbots", icon: MessageSquare, description: "24/7 chat assistants that answer questions and qualify leads." },
  { slug: "automations", title: "Automations", icon: Zap, description: "Background workflows that replace manual tasks and follow-ups." },
  { slug: "landing-pages", title: "Landing Pages", icon: FileText, description: "Single-goal pages built for campaigns and paid ads." },
  { slug: "crm-automations", title: "CRM Automations", icon: Users, description: "Automatic lead routing, tagging, and nurturing inside your CRM." },
  { slug: "lead-systems", title: "Lead Systems", icon: Target, description: "End-to-end funnels that capture and hand off sales-ready leads." },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">
            ← Back to all services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherServices = allServices.filter(s => s.slug !== slug).slice(0, 2);
  const ServiceIcon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container-wide section-padding !py-0">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all services
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            {service.title}
          </h1>
        </div>
      </section>
      
      {/* Main Image */}
      <section className="pb-12">
        <div className="container-wide section-padding !py-0">
          <div className="aspect-[2/1] overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Overview */}
      <section className="pb-12">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Sections */}
      <section className="pb-16">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-4xl space-y-12">
            {service.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-heading font-bold mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Our Approach */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.approach}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get in Touch CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container-wide section-padding !py-0 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Ready to get started with {service.title.toLowerCase()}? Let's discuss your project.
          </p>
          <a 
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
          >
            Book a Free Call
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      
      {/* Other Services */}
      <section className="py-16">
        <div className="container-wide section-padding !py-0">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Other Services
          </p>
          <h2 className="text-3xl font-heading font-bold mb-8">More Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherServices.map((otherService, index) => {
              const OtherIcon = otherService.icon;
              return (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/services/${otherService.slug}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group bg-background border border-border p-8 hover:border-primary/50 transition-colors cursor-pointer flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                    <OtherIcon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {otherService.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {otherService.description}
                  </p>
                  
                  {/* Read More Link */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Read More
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ServiceDetail;


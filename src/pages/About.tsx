import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ChevronDown, Calendar, Target, Zap, Users, Heart } from "lucide-react";
import { useState } from "react";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by your success. Every project is designed to deliver measurable ROI and real business impact."
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "We stay ahead of the curve with AI and automation, bringing cutting-edge solutions to help you outpace competitors."
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We're not just vendors—we're partners invested in your growth. Your wins are our wins."
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We genuinely care about your business and treat every project as if it were our own."
  },
];

const team = [
  {
    name: "Chakresh Kumar Vulli",
    role: "Founder & CEO",
    image: "/founder1.jpeg",
    imagePosition: "center 20%", // Focus on face
    bio: "Visionary leader driving business growth through automation",
    skills: ["Business Strategy", "AI & Automation", "Client Relations"],
    linkedin: "https://www.linkedin.com/in/chakreshkumar-vulli-40293525b/",
    email: "chakreshkumarvulli@foundersmate.in"
  },
  {
    name: "Mahesh Manasamudram",
    role: "Head of Development",
    image: "/mahesh.jpeg",
    imagePosition: "center 20%",
    bio: "Full-stack expert building scalable web solutions",
    skills: ["Web Development", "System Architecture", "API Integration"],
    linkedin: "https://www.linkedin.com/in/mannasamudram-muni-mahesh-reddy-a380bb2b9/",
    email: "mahesh@autoscale.com"
  },
  {
    name: "Mansoor Shaik",
    role: "AI Solutions Lead",
    image: "/mansoor.jpg",
    imagePosition: "center 15%", // Focus on face
    bio: "AI specialist crafting intelligent chatbots & automations",
    skills: ["AI/ML", "Chatbots", "Process Automation"],
    linkedin: "https://www.linkedin.com/in/mansoor17/",
    email: "mansoor@autoscale.com"
  },
];

const faqs = [
  {
    question: "What is AutoScale's mission?",
    answer: "Our mission is to help businesses grow smarter, not harder. We believe every business deserves access to powerful automation and AI tools that were once only available to large enterprises."
  },
  {
    question: "How did AutoScale get started?",
    answer: "AutoScale was founded when our team saw too many businesses struggling with disconnected tools and manual processes. We set out to create connected systems that actually work together."
  },
  {
    question: "What makes your team qualified?",
    answer: "Our team combines decades of experience in web development, marketing automation, AI, and business strategy. We've worked with startups to established companies across multiple industries."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "We primarily work with small to medium-sized businesses, startups, and entrepreneurs. Our solutions are designed to be scalable, growing with your business over time."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've delivered successful projects across real estate, e-commerce, professional services, coaching, healthcare, hospitality, SaaS, and more. Our approach adapts to any industry."
  },
  {
    question: "Where is AutoScale located?",
    answer: "We're a remote-first team working with clients globally. We leverage modern collaboration tools to deliver exceptional results regardless of location."
  },
  {
    question: "How can I join the AutoScale team?",
    answer: "We're always looking for talented individuals who share our passion for automation and helping businesses grow. Reach out through our contact form with your background and interests."
  },
  {
    question: "What's AutoScale's vision for the future?",
    answer: "We envision a world where every business has access to intelligent systems that work 24/7 to generate leads, nurture customers, and drive growth—all without adding complexity."
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop" 
                  alt="Team working together"
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

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                Helping businesses
                <span className="block text-muted-foreground">automate, scale,</span>
                <span className="block">and convert better.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We're a small, focused team obsessed with one thing: building systems that actually work. 
                No bloated teams. No unnecessary complexity. Just AI-first solutions that help you 
                capture more leads, automate follow-ups, and close more deals.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                Let's Work Together
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide section-padding !py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop" 
                  alt="Our story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Why We Started AutoScale
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We saw too many businesses drowning in disconnected tools, manual processes, and 
                  missed opportunities. Marketing automation felt complicated. CRMs sat unused. 
                  Websites weren't converting.
                </p>
                <p>
                  We knew there had to be a better way. So we built it.
                </p>
                <p>
                  AutoScale was founded on a simple belief: your website, your CRM, your automations, 
                  and your AI should all work together as one intelligent system. Not as separate 
                  tools fighting for attention.
                </p>
                <p>
                  Today, we help businesses capture more leads, automate follow-ups, and close more 
                  deals—all while working less. That's the power of connected systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-wide section-padding !py-0">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide section-padding !py-0">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet the People Behind AutoScale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of experts passionate about helping businesses grow through 
              automation and connected systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group relative">
                {/* Main Card */}
                <div className="bg-background border border-border p-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-2">
                  <div className="aspect-[4/5] overflow-hidden mb-6 bg-muted">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.imagePosition }}
                    />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
                
                {/* Hover Popup Card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-primary text-primary-foreground p-5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto">
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45" />
                  
                  <div className="relative">
                    <h4 className="font-heading font-semibold text-lg mb-3">{member.name}</h4>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-2">Expertise</p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-primary-foreground/20 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact */}
                    <div className="flex items-center justify-center gap-4 pt-3 border-t border-primary-foreground/20">
                      <a 
                        href={member.linkedin} 
                        className="text-sm hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <span className="text-primary-foreground/40">•</span>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-sm hover:underline"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
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
                  Ready to work
                  <span className="block">with us?</span>
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                  Let's discuss how we can help your business grow with connected systems and intelligent automation.
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

export default About;


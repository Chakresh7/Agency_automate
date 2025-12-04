import { Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Websites", href: "#services" },
    { name: "AI Chatbots", href: "#services" },
    { name: "Automations", href: "#services" },
    { name: "Landing Pages", href: "#services" },
    { name: "CRM Automations", href: "#services" },
    { name: "Lead Systems", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Work / Use Cases", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-background">
      <div className="container-wide section-padding !pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="font-heading text-2xl font-bold tracking-tight">
              AUTOMATE<span className="text-primary">.</span>
            </a>
            <p className="text-background/60 mt-4 text-sm leading-relaxed">
              Building websites and AI automations that grow your business on autopilot.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-background/60">
              <p>hello@automate.agency</p>
              <p>+1 (555) 123-4567</p>
              <p className="pt-4">
                123 Business Ave<br />
                Suite 100<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-background/40">
              © {new Date().getFullYear()} Automate. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-background/40 hover:text-background/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

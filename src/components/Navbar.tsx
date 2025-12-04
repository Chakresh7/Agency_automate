import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Websites", href: "#services" },
  { name: "AI Chatbots", href: "#services" },
  { name: "Automations", href: "#services" },
  { name: "Landing Pages", href: "#services" },
  { name: "CRM Automations", href: "#services" },
  { name: "Lead Systems", href: "#services" },
];

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl font-bold tracking-tight">
            AUTOMATE<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowServices(true)}
                onMouseLeave={() => item.hasDropdown && setShowServices(false)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.hasDropdown && showServices && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-background border border-border rounded-lg shadow-hover p-2 min-w-[200px]">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button variant="dark" size="default" asChild>
              <a href="#contact">Book a Call</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden pt-6 pb-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="dark" className="w-full" asChild>
                  <a href="#contact">Book a Call</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

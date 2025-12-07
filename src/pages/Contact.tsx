import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Calendar, Mail, Phone, MapPin, Clock, CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";

const WEB3FORMS_KEY = "caf9a610-d49b-41b5-871f-96728833ec41";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Validate
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields.");
      }
      
      if (!formData.email.includes("@")) {
        throw new Error("Please enter a valid email address.");
      }

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `🚀 New Inquiry from ${formData.name} - AutoScale Website`,
          from_name: "AutoScale Website",
          replyto: formData.email,
          // Structured data for clean email formatting
          "Client Name": formData.name,
          "Client Email": formData.email,
          "Company": formData.company || "Not provided",
          "Message": formData.message,
          // Hidden fields
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        
        // Auto-close success message after 2 seconds and show form again
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Book Your Free
              <span className="block text-primary">Strategy Call</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to automate your business and grow on autopilot? Let's talk about 
              your goals and how we can help you achieve them.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="pb-24">
        <div className="container-wide section-padding !py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Form */}
            <div>
              <div className="bg-muted/30 p-8 md:p-10">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send Us a Message
                </h2>
                
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-primary font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground px-6 py-4 font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Right - Info & Calendar */}
            <div className="space-y-8">
              {/* Book a Call Card */}
              <div className="bg-primary p-8 md:p-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-primary-foreground">
                  Book a Free Strategy Call
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  In just 30 minutes, you'll get a quick audit of your current systems, 
                  a simple roadmap for automation, and zero pressure—just clarity.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Quick audit of your current systems",
                    "Simple roadmap for automation",
                    "Zero pressure, just clarity",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-heading font-semibold">
                  Other Ways to Reach Us
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:chakreshkumarvulli@foundersmate.in" className="text-muted-foreground hover:text-primary transition-colors">
                        chakreshkumarvulli@foundersmate.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+918978715162" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 8978715162
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Vadodara, Gujarat, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">
                        Within 24 hours
                      </p>
                    </div>
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

export default Contact;


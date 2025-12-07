import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "The team at Automate completely transformed how we handle leads. Our follow-up is now automatic, and we've seen 3x more conversions in just two months.",
    name: "Sarah Mitchell",
    title: "Founder, Mitchell Realty",
    avatar: "SM",
  },
  {
    quote: "Our AI chatbot handles 80% of customer questions now. The team finally has time to focus on what matters. Best investment we've made this year.",
    name: "David Chen",
    title: "CEO, TechStart Co",
    avatar: "DC",
  },
  {
    quote: "Finally, a website that actually converts. The combination of the landing page and automated follow-ups doubled our trial signups in 6 weeks.",
    name: "Emma Rodriguez",
    title: "Marketing Director, FitLife Gym",
    avatar: "ER",
  },
  {
    quote: "We went from manually tracking leads in spreadsheets to a fully automated system. Now we never miss a follow-up and our close rate has improved by 40%.",
    name: "Michael Torres",
    title: "Owner, Torres Insurance",
    avatar: "MT",
  },
  {
    quote: "The CRM integration saved us hours every week. Everything syncs automatically and we can see exactly where each lead is in our pipeline.",
    name: "Jessica Park",
    title: "Sales Manager, CloudTech Solutions",
    avatar: "JP",
  },
  {
    quote: "I was skeptical about AI chatbots, but ours has booked over 50 consultations in the first month alone. It pays for itself many times over.",
    name: "Robert Williams",
    title: "Founder, Williams Legal",
    avatar: "RW",
  },
  {
    quote: "The team understood our needs perfectly. Our new website loads fast, looks professional, and most importantly - it generates qualified leads every day.",
    name: "Amanda Foster",
    title: "CEO, Foster Marketing Agency",
    avatar: "AF",
  },
  {
    quote: "From strategy call to launch in just 3 weeks. The automation workflows they built have completely changed how we onboard new clients.",
    name: "Kevin Liu",
    title: "Co-founder, StartupHub",
    avatar: "KL",
  },
  {
    quote: "We've tried other agencies before but none delivered like this team. They actually understand business automation, not just pretty websites.",
    name: "Lisa Anderson",
    title: "Director, Anderson Consulting",
    avatar: "LA",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = testimonials.length - cardsToShow;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Client Voices: What Our
              <span className="block text-muted-foreground">Customers Have to Say</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground mr-2">
              {currentIndex + 1}-{Math.min(currentIndex + cardsToShow, testimonials.length)} of {testimonials.length}
            </span>
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow + 2)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center font-semibold text-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

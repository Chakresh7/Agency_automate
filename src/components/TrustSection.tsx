import { Sun, Smile, Zap, Infinity, Snowflake, Star, Heart, Diamond } from "lucide-react";

export const TrustSection = () => {
  const logos = [
    { name: "Logoipsum", icon: Sun },
    { name: "Logoipsum", icon: Smile },
    { name: "Logoipsum", icon: Zap },
    { name: "Logoipsum", icon: Infinity },
    { name: "Logoipsum", icon: Snowflake },
    { name: "Logoipsum", icon: Star },
    { name: "Logoipsum", icon: Heart },
    { name: "Logoipsum", icon: Diamond },
  ];

  return (
    <>
      <section className="py-12 md:py-16 bg-brand-black">
        <div className="container-wide section-padding !py-0">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <p className="text-sm text-gray-400">
                Trusted by 40+
                <span className="block text-white font-medium">worldwide clients</span>
              </p>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <div className="flex animate-marquee gap-10">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-400 flex-shrink-0"
                  >
                    <logo.icon className="w-6 h-6" />
                    <span className="font-semibold text-lg whitespace-nowrap">{logo.name}</span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, index) => (
                  <div
                    key={`dup-${index}`}
                    className="flex items-center gap-2 text-gray-400 flex-shrink-0"
                  >
                    <logo.icon className="w-6 h-6" />
                    <span className="font-semibold text-lg whitespace-nowrap">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* White space below */}
      <div className="h-16 md:h-24 bg-background" />
    </>
  );
};

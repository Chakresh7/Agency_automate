export const TrustSection = () => {
  const logos = [
    "Startup Co",
    "Local Biz",
    "Agency Pro",
    "Coach Hub",
    "Tech Start",
    "Growth Lab",
  ];

  return (
    <section className="py-12 md:py-16 bg-background border-y border-border">
      <div className="container-wide section-padding !py-0">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:w-1/4">
            <p className="text-sm font-medium text-muted-foreground">
              Trusted by 40+
              <span className="block font-heading text-lg text-foreground">worldwide clients</span>
            </p>
          </div>
          
          <div className="md:w-3/4">
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold">{logo.charAt(0)}</span>
                  </div>
                  <span className="font-medium text-sm">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8 md:mt-12">
          Trusted by founders, agencies, and local businesses worldwide.
        </p>
      </div>
    </section>
  );
};

export default function PartnersSection() {
  const partnerLogos = [
    "Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5",
    "Partner 6", "Partner 7", "Partner 8", "Partner 9", "Partner 10"
  ];

  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4" data-testid="text-partners-title">
          Our Partners
        </h2>
        <p className="text-center text-muted-foreground mb-12" data-testid="text-partners-subtitle">
          100+ Corporate Partners & 40+ School Partners
        </p>

        <div className="relative">
          <div className="flex gap-8 animate-scroll">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 bg-background rounded-md flex items-center justify-center border"
                data-testid={`partner-logo-${index}`}
              >
                <span className="text-muted-foreground font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

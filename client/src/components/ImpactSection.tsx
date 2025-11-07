import indonesiaMapImage from "@assets/Document@3x_1762520850335.png";

const islands = [
  { name: "Sumatera", x: 14, y: 30 },
  { name: "Jawa", x: 28, y: 60 },
  { name: "Kalimantan", x: 35, y: 35 },
  { name: "Sulawesi", x: 51, y: 38 },
  { name: "Nusa Tenggara", x: 48, y: 66 },
  { name: "Maluku", x: 60, y: 40 },
  { name: "Papua", x: 72, y: 42 },
];

export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-impact-title">
            Ambivers telah memberikan dampak kepada{" "}
            <span className="text-[#FFC700]">50.000+ pelajar</span>{" "}
            di seluruh Indonesia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-impact-description">
            Dari Sabang sampai Merauke, kami berkomitmen untuk membantu pelajar Indonesia mencapai impian mereka melalui pendidikan berkualitas dan bimbingan yang tepat.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <img 
                src={indonesiaMapImage} 
                alt="Peta Indonesia"
                className="w-full h-auto"
                data-testid="map-indonesia"
              />
              
              {islands.map((island, index) => (
                <div
                  key={island.name}
                  className="absolute w-4 h-4 -ml-2 -mt-2"
                  style={{
                    left: `${island.x}%`,
                    top: `${island.y}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                  data-testid={`island-marker-${island.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-4 h-4 bg-white rounded-full border-2 border-[#FFC700] shadow-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}

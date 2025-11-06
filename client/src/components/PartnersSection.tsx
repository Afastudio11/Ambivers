import globalMillennialLogo from "@assets/1_1762456733564.png";
import brightInternshipsLogo from "@assets/2_1762456733564.png";
import dutuTeamLogo from "@assets/3_1762456733564.png";
import bsiMaslahatLogo from "@assets/4_1762456733565.png";
import universitySealLogo from "@assets/5_1762456733565.png";
import blueCircleLogo from "@assets/6_1762456733565.png";
import agrilabsLogo from "@assets/7_1762456733565.png";
import nutrifoodLogo from "@assets/8_1762456733566.png";
import infimapLogo from "@assets/9_1762456733566.png";
import bsiBankLogo from "@assets/10_1762456733566.png";
import grabLogo from "@assets/11_1762456733566.png";
import gandengFoundationLogo from "@assets/12_1762456733567.png";
import talentGrowthLogo from "@assets/13_1762456733567.png";
import jdLogo from "@assets/14_1762456733567.png";
import nyalaOcbcLogo from "@assets/15_1762456733568.png";
import smartMakaraLogo from "@assets/16_1762456733568.png";
import colorfulIconLogo from "@assets/17_1762456733568.png";
import fourierLogo from "@assets/18_1762456733569.png";
import aiesecLogo from "@assets/19_1762456733569.png";
import gokampusLogo from "@assets/20_1762456733564.png";

export default function PartnersSection() {
  const partnerLogos = [
    { name: "Global Millennial Group", logo: globalMillennialLogo },
    { name: "Bright Internships", logo: brightInternshipsLogo },
    { name: "Dutu Team", logo: dutuTeamLogo },
    { name: "BSI Maslahat", logo: bsiMaslahatLogo },
    { name: "University Partner", logo: universitySealLogo },
    { name: "Blue Circle Partner", logo: blueCircleLogo },
    { name: "Agrilabs", logo: agrilabsLogo },
    { name: "Nutrifood", logo: nutrifoodLogo },
    { name: "Infimap", logo: infimapLogo },
    { name: "Bank Syariah Indonesia", logo: bsiBankLogo },
    { name: "Grab", logo: grabLogo },
    { name: "Gandeng Foundation", logo: gandengFoundationLogo },
    { name: "Talent Growth", logo: talentGrowthLogo },
    { name: "JD Jalur Dalam", logo: jdLogo },
    { name: "Nyala OCBC NISP", logo: nyalaOcbcLogo },
    { name: "Smart Makara UI", logo: smartMakaraLogo },
    { name: "Colorful Partner", logo: colorfulIconLogo },
    { name: "Fourier", logo: fourierLogo },
    { name: "AIESEC", logo: aiesecLogo },
    { name: "GoKampus", logo: gokampusLogo }
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

        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-md flex items-center justify-center p-4 border"
                data-testid={`partner-logo-${index}`}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
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
            transform: translateX(calc(-100% / 2));
          }
        }
        .animate-scroll {
          animation: scroll 22s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

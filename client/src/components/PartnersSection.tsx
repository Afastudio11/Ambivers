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
import kliqueLogo from "@assets/21_1762456855225.png";
import kelasPejuangLogo from "@assets/22_1762456855225.png";
import sahabatCpnsLogo from "@assets/23_1762456855226.png";
import lifeVitaeLogo from "@assets/24_1762456855226.png";
import uiLogo from "@assets/25_1762456855226.png";
import upnLogo from "@assets/26_1762456855227.png";
import briBankLogo from "@assets/27_1762456855227.png";
import petaScholarLogo from "@assets/28_1762456855227.png";
import campusPediaLogo from "@assets/29_1762456855227.png";
import byULogo from "@assets/30_1762456855228.png";
import digifluxLogo from "@assets/31_1762456855228.png";
import mentorLogo from "@assets/32_1762456855225.png";

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
    { name: "GoKampus", logo: gokampusLogo },
    { name: "KLIQUE", logo: kliqueLogo },
    { name: "Kelas Pejuang", logo: kelasPejuangLogo },
    { name: "Sahabat CPNS", logo: sahabatCpnsLogo },
    { name: "LifeVitae", logo: lifeVitaeLogo },
    { name: "Universitas Indonesia", logo: uiLogo },
    { name: "UPN Veteran Jakarta", logo: upnLogo },
    { name: "Bank BRI", logo: briBankLogo },
    { name: "Peta Scholar", logo: petaScholarLogo },
    { name: "Campus Pedia", logo: campusPediaLogo },
    { name: "by.U", logo: byULogo },
    { name: "Digiflux", logo: digifluxLogo },
    { name: "Mentor", logo: mentorLogo }
  ];

  const row1 = partnerLogos.slice(0, 11);
  const row2 = partnerLogos.slice(11, 22);
  const row3 = partnerLogos.slice(22);

  const renderRow = (logos: typeof partnerLogos, index: number, reverse: boolean = false) => (
    <div key={index} className="relative overflow-hidden mb-8">
      <div className={`flex gap-12 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {[...logos, ...logos, ...logos].map((partner, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center"
            data-testid={`partner-logo-row${index}-${idx}`}
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4" data-testid="text-partners-title">
          Our Partners
        </h2>
        <p className="text-center text-muted-foreground mb-12" data-testid="text-partners-subtitle">
          100+ Corporate Partners & 40+ School Partners
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden space-y-4">
          {renderRow(row1, 1, false)}
          {renderRow(row2, 2, true)}
          {renderRow(row3, 3, false)}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

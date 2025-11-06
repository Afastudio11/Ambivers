import globalMillennialLogo from "@assets/1627104491_1762452204203.png";
import briBankLogo from "@assets/FI004-_-BRI-12_1762452204203.png";
import unpadLogo from "@assets/1612252446056_1762452204204.jpeg";
import petaScholarLogo from "@assets/petascholar_1762452204204.jpg";
import upnVeteranLogo from "@assets/logo_Universitas-Pembangunan-Nasional-Veteran-Jakarta-thumb_1762452204204.png";
import uiLogo from "@assets/Universitas-Indonesia-Logo_1762452204204.png";
import campuspediaLogo from "@assets/campuspedia_id_logo_1762452204205.jpeg";
import nutrifoodLogo from "@assets/nutrifood.jpg";
import mentorLulusLogo from "@assets/mentor-lulus-kampus.jpg";
import digifluxLogo from "@assets/digiflux.jpg";
import byULogo from "@assets/by-u.png";
import sahabatCpnsLogo from "@assets/sahabat-cpns.png";
import diBalikMasaRemajaLogo from "@assets/logo biru_1762452204206.png";
import talentGrowthLogo from "@assets/Logo Talent Growth _1762452204207.png";
import lifeVitaeLogo from "@assets/IMG_3220_1762452204207.png";
import jdLogo from "@assets/logo-jd-dark_1762452204207.png";
import gandengFoundationLogo from "@assets/IMG_9016_1762452204208.png";
import nyalaOcbcLogo from "@assets/IMG_2579_1762452204208.png";
import smartMakaraLogo from "@assets/Logo Smart Makara UI_1762452204208.png";
import grabLogo from "@assets/grab.png";
import temanSalingBerbagiLogo from "@assets/Yayasan Teman Saling Berbagi_1762452390584.png";
import fourierLogo from "@assets/Logo Fourier_1762452390584.png";
import aiesecLogo from "@assets/AIESEC_Logo_1762452390584.png";
import gokampusLogo from "@assets/Logo GoKampus_1762452390585.png";
import kelasPejuangLogo from "@assets/kelas-pejuang.png";
import koperasiIndonesiaLogo from "@assets/koperasi-indonesia.png";
import dinoTeamLogo from "@assets/dino-team.png";
import bsiMaslahatLogo from "@assets/BSI-MASLAHAT_1762452390586.png";
import agrilabsLogo from "@assets/agrilabs.png";
import infimapLogo from "@assets/infimap.png";
import bsiBankLogo from "@assets/bsi-bank.jpg";

export default function PartnersSection() {
  const partnerLogos = [
    { name: "Global Millennial Group", logo: globalMillennialLogo },
    { name: "Bank BRI", logo: briBankLogo },
    { name: "Universitas Padjadjaran", logo: unpadLogo },
    { name: "Peta Scholar", logo: petaScholarLogo },
    { name: "UPN Veteran Jakarta", logo: upnVeteranLogo },
    { name: "Universitas Indonesia", logo: uiLogo },
    { name: "Campuspedia", logo: campuspediaLogo },
    { name: "Nutrifood", logo: nutrifoodLogo },
    { name: "Mentor Lulus Kampus", logo: mentorLulusLogo },
    { name: "Digiflux", logo: digifluxLogo },
    { name: "by.U", logo: byULogo },
    { name: "Sahabat CPNS", logo: sahabatCpnsLogo },
    { name: "Di Balik Masa Remaja", logo: diBalikMasaRemajaLogo },
    { name: "Talent Growth", logo: talentGrowthLogo },
    { name: "LifeVitae", logo: lifeVitaeLogo },
    { name: "JD.id", logo: jdLogo },
    { name: "Gandeng Foundation", logo: gandengFoundationLogo },
    { name: "Nyala OCBC NISP", logo: nyalaOcbcLogo },
    { name: "Smart Makara UI", logo: smartMakaraLogo },
    { name: "Grab", logo: grabLogo },
    { name: "Yayasan Teman Saling Berbagi", logo: temanSalingBerbagiLogo },
    { name: "Fourier", logo: fourierLogo },
    { name: "AIESEC", logo: aiesecLogo },
    { name: "GoKampus", logo: gokampusLogo },
    { name: "Kelas Pejuang", logo: kelasPejuangLogo },
    { name: "Koperasi Indonesia Dana Sejahtera", logo: koperasiIndonesiaLogo },
    { name: "Dino Team", logo: dinoTeamLogo },
    { name: "BSI Maslahat", logo: bsiMaslahatLogo },
    { name: "Agrilabs", logo: agrilabsLogo },
    { name: "Infimap", logo: infimapLogo },
    { name: "Bank Syariah Indonesia", logo: bsiBankLogo }
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
          animation: scroll 12s linear infinite;
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

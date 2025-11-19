import ProgramHero from "@/components/ProgramHero";
import OutcomeSection from "@/components/OutcomeSection";
import ProgramImpact from "@/components/ProgramImpact";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Card } from "@/components/ui/card";
import foundationImg from "@assets/generated_images/Ambivers_Foundation_program_card_7872171c.png";

export default function AFYI() {
  const testimonials = [
    {
      name: "Faiza Yasmin Butsaina",
      institution: "Universitas Negeri Surabaya",
      photo: "https://drive.google.com/uc?export=view&id=1yypxwxRQqVQpaRF9hzsPTAuuz29VL3rQ",
      text: "Jadi untuk kegiatan AFYI kemarin sangat sangat berkesan, menambah pengalaman dan pengetahuan bagi saya (apalagi dengan saya yang bukan termasuk orang kreatif) selain itu juga menambah banyak teman baru.Saya juga merasa kegiatan kemarin sangat menyenangkan karena juga dari kakak-kakak tentornya sangat baik, lalu untuk kegiatan yang diselenggarakan tidak membosankan.Selanjutnya yang sempet saya ANGAN ANGAN TERUS, kok bisa workshop dengan harga segitu tpi suangattt worth it ,sampai rasanya kalau ada  workshop ini lagi wajib ikut Ratenya 1000000000/10"
    },
    {
      name: "Kethy Malika Cahya",
      institution: "SMKN 4 Surabaya",
      photo: "https://drive.google.com/uc?export=view&id=1ANsvbBbwTvK9qXtsboZn-r4o3qwo4Slc",
      text: "Jadi acara kemarin seruu bangettt kakak kakaknya pada humble, welcome dan ceriaa bangett, acaranya juga seruu ga ngebosenin, dan dari acara ini aku jadi tau gimana cara buat ganci dari tutup botol plastik, dan juga menghias tempat skincarenya juga seruu bangetttt terimakasih yaa kakak kakak yang udah ngadain acara ini"
    },
    {
      name: "Aisyah Alfina Putri",
      institution: "Telkom University Surabaya",
      photo: "https://drive.google.com/uc?export=view&id=1Ol6J3cxjOPTmO5onf3IXhuytQaVbHVDU",
      text: "Setelah ikut kegiatan AFYI kemarin tu bener\" nambah pengetahuanku dan juga bermanfaat banget buat aku kedepannya. Contohnya kemarin kan sempet bikin gantungan dari tutup botol nah itu sekarang kalau ada tutup botol yang biasanya kubuang sekarang kusimpen kak buat dibikin kerajinan hehe. Makasii ya AFYI, next time adain lagii ya yang kayak kegiatan kemarin, seruu dan bermanfaat soalnya"
    }
  ];

  const outcomes = [
    {
      title: "Pengembangan Kreativitas",
      description: "Peserta belajar membuat kerajinan tangan dari barang bekas, meningkatkan kreativitas dan kepedulian terhadap lingkungan."
    },
    {
      title: "Pengalaman Sosial",
      description: "Kegiatan yang melibatkan interaksi langsung dan kolaborasi dengan sesama peserta dari berbagai latar belakang."
    },
    {
      title: "Keterampilan Praktis",
      description: "Peserta mendapatkan keterampilan praktis yang bisa diterapkan dalam kehidupan sehari-hari dan memiliki nilai ekonomis."
    },
    {
      title: "Jaringan Relasi",
      description: "Membangun koneksi dengan sesama peserta dan mentor yang berpengalaman di bidang sosial dan pendidikan."
    }
  ];

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="AFYI"
        description="Program unggulan Ambivers Foundation yang dilaksanakan secara online dan offline yang dirancang khusus untuk memberikan dampak nyata bagi masyarakat dengan melibatkan pemuda Indonesia dalam berbagai inisiatif sosial dan pemberdayaan."
        imageUrl={foundationImg}
        primaryButtonText="Ikut program"
        secondaryButtonText="Lebih lanjut"
        secondaryButtonLink="https://www.instagram.com/ambivers.foundation/"
      />

      <OutcomeSection
        title="Outcome of the program"
        outcomes={outcomes}
        singleColumn={false}
      />

      <ProgramImpact
        impacts={[
          "Program AFYI memberikan dampak positif dalam meningkatkan kesadaran lingkungan dan kreativitas generasi muda dalam memanfaatkan barang bekas menjadi produk bernilai.",
          "AFYI juga menumbuhkan semangat gotong royong dan kepedulian sosial di kalangan peserta, serta memberikan pengalaman berharga dalam pengembangan diri melalui kegiatan edukatif dan interaktif."
        ]}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-documentation-title">
            Dokumentasi AFYI
          </h2>
          <Card className="p-8">
            <p className="text-center text-muted-foreground">
              Lihat dokumentasi lengkap kegiatan AFYI di{" "}
              <a 
                href="https://www.instagram.com/ambivers.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC700] hover:underline font-semibold"
                data-testid="link-documentation"
              >
                Instagram Ambivers Foundation
              </a>
            </p>
          </Card>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}

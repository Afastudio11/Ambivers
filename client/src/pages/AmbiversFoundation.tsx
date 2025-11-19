import ProgramHero from "@/components/ProgramHero";
import VisionMission from "@/components/VisionMission";
import ProgramsGrid from "@/components/ProgramsGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import foundationImg from "@assets/generated_images/Ambivers_Foundation_program_card_7872171c.png";

export default function AmbiversFoundation() {
  const programs = [
    {
      title: "AFYI",
      description: "Program unggulan Ambivers Foundation yang dilaksanakan secara online dan offline yang dirancang khusus untuk memberikan dampak nyata bagi masyarakat dengan melibatkan pemuda Indonesia dalam berbagai inisiatif sosial dan pemberdayaan",
      imageUrl: "https://drive.google.com/uc?export=view&id=1hqEzYCjC4aM2ZjFEZcTyu0vBwjCH2ntG",
      link: "/afyi"
    },
    {
      title: "JUMPIVERS",
      description: "JUMPIVERS (Journey to Unlock my Potential with Ambivers) merupakan sebuah program pengembangan diri yang bertujuan untuk memfasilitasi pengembangan keterampilan, memperluas wawasan, dan mempercepat proses pembelajaran bagi individu yang ingin terus tumbuh, mengeksplorasi potensi diri, dan siap menghadapi tantangan zaman.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1_1ts7n25hs0bGGh4d366sdGdGnZuBJd2",
      link: "/jumpivers"
    }
  ];

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

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="Ambivers Foundation"
        description="Ambivers Foundation merupakan NGO yang didirikan sejak Juni 2023, salah satu bagian dari Ambivers.id yang berfokus pada pengembangan mahasiswa melalui berbagai kegiatan sosial dan pendidikan serta sudah 100+ volunteer berpartisipasi untuk memberikan dampak bersama."
        imageUrl={foundationImg}
        primaryButtonText="Ikut program"
        onPrimaryClick={scrollToPrograms}
        secondaryButtonText="Lebih lanjut"
        secondaryButtonLink="https://www.instagram.com/ambivers.foundation/"
      />

      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-who-can-join-title">
            Who Can Join?
          </h2>
          <Card className="bg-background" data-testid="card-eligibility">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="eligibility-age">
                  <CheckCircle className="w-6 h-6 text-[#C00000] flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">
                    All youth around Indonesia with ages 18-21
                  </p>
                </div>
                <div className="flex items-start gap-4" data-testid="eligibility-education">
                  <CheckCircle className="w-6 h-6 text-[#C00000] flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">
                    Final year of high school, first-year, and second-year students in university
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <VisionMission
        vision="Mendorong anak muda Indonesia berkembang jadi generasi yang cerdas, peduli, dan bermanfaat bagi orang lain."
        missions={[
          "Memberikan tempat bagi anak muda untuk belajar dan mengembangkan diri.",
          "Membantu mereka mengasah kemampuan dan pengalaman lewat berbagai kegiatan.",
          "Mengajak anak muda untuk ikut berbuat baik dan membawa perubahan positif di sekitar mereka."
        ]}
      />

      <div id="programs">
        <ProgramsGrid
          title="Program Ambivers Foundation"
          programs={programs}
        />
      </div>

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}

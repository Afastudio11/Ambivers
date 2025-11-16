import ProgramHero from "@/components/ProgramHero";
import OutcomeSection from "@/components/OutcomeSection";
import ProgramImpact from "@/components/ProgramImpact";
import { Card } from "@/components/ui/card";

export default function JUMPIVERS() {
  const outcomes = [
    {
      title: "Pengembangan Keterampilan",
      description: "Peserta memperoleh peningkatan dalam soft skill dan hard skill yang relevan dengan kebutuhan dunia kerja dan akademik."
    },
    {
      title: "Perluasan Wawasan",
      description: "Program ini membuka perspektif baru dan memperluas pengetahuan peserta tentang berbagai bidang dan peluang yang ada."
    },
    {
      title: "Percepatan Pembelajaran",
      description: "Metode pembelajaran yang efektif membantu peserta mempercepat proses belajar dan pengembangan diri mereka."
    },
    {
      title: "Kesiapan Menghadapi Tantangan",
      description: "Peserta menjadi lebih siap dan percaya diri dalam menghadapi berbagai tantangan di era modern."
    }
  ];

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="JUMPIVERS"
        description="Journey to Unlock my Potential with Ambivers merupakan sebuah program pengembangan diri yang bertujuan untuk memfasilitasi pengembangan keterampilan, memperluas wawasan, dan mempercepat proses pembelajaran bagi individu yang ingin terus tumbuh, mengeksplorasi potensi diri, dan siap menghadapi tantangan zaman."
        imageUrl="https://drive.google.com/uc?export=view&id=1_1ts7n25hs0bGGh4d366sdGdGnZuBJd2"
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
          "JUMPIVERS memberikan dampak signifikan dalam meningkatkan kompetensi dan daya saing peserta, baik di bidang akademik maupun profesional.",
          "Program ini juga menumbuhkan mindset pertumbuhan dan semangat untuk terus belajar di kalangan generasi muda Indonesia, serta membekali mereka dengan keterampilan yang dibutuhkan untuk sukses di masa depan."
        ]}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-info-title">
            Informasi Program
          </h2>
          <Card className="p-8">
            <p className="text-center text-muted-foreground">
              Untuk informasi lebih lanjut tentang JUMPIVERS, kunjungi{" "}
              <a 
                href="https://www.instagram.com/ambivers.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC700] hover:underline font-semibold"
                data-testid="link-info"
              >
                Instagram Ambivers Foundation
              </a>
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

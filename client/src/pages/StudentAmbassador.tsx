import ProgramHero from "@/components/ProgramHero";
import OutcomeSection from "@/components/OutcomeSection";
import ambassadorImg from "@assets/generated_images/Student_Ambassador_program_card_77726dae.png";
import { Megaphone, GraduationCap, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";

export default function StudentAmbassador() {
  const outcomes = [
    {
      title: "Peningkatan brand awareness",
      description: "Ambivers menjadi lebih dikenal di kalangan pelajar melalui konten dan aktivitas yang dibagikan oleh Student Ambassador.",
      icon: Megaphone
    },
    {
      title: "Penyebaran nilai edukatif",
      description: "Materi pembelajaran dan program Ambivers dapat menjangkau lebih banyak pelajar secara luas.",
      icon: GraduationCap
    },
    {
      title: "Pengembangan diri pelajar",
      description: "Student Ambassador memperoleh pengalaman dalam komunikasi, pembuatan konten, dan personal branding.",
      icon: Sparkles
    },
    {
      title: "Peningkatan keikutsertaan program Ambivers",
      description: "Lebih banyak pelajar yang tertarik dan bergabung dalam program-program Ambivers.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="Student Ambassador"
        description="Program bagi pelajar untuk membuat dan membagikan konten edukatif, sekaligus memperkenalkan serta menyebarkan berbagai program dan pembelajaran yang dimiliki oleh Ambivers."
        imageUrl={ambassadorImg}
        primaryButtonText="Ikut program"
      />

      <OutcomeSection
        title="Outcome of the programs"
        outcomes={outcomes}
        singleColumn={true}
      />

      <section className="py-20 bg-[#FFC700]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8" data-testid="text-impact-title">
            Impact
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start" data-testid="card-impact-0">
              <CheckCircle2 className="w-6 h-6 text-black mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed text-black" data-testid="text-impact-0">
                Tumbuhnya generasi pelajar yang kreatif dan komunikatif, karena terbiasa membuat serta menyebarkan konten edukatif
              </p>
            </div>
            <div className="flex gap-4 items-start" data-testid="card-impact-1">
              <CheckCircle2 className="w-6 h-6 text-black mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed text-black" data-testid="text-impact-1">
                Meluasnya jangkauan dan pengaruh Ambivers di kalangan pelajar, sehingga Ambivers dikenal sebagai platform edukatif yang relevan dan berdampak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

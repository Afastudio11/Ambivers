import ProgramHero from "@/components/ProgramHero";
import OutcomeSection from "@/components/OutcomeSection";
import ProgramImpact from "@/components/ProgramImpact";
import ambassadorImg from "@assets/generated_images/Student_Ambassador_program_card_77726dae.png";
import { Megaphone, GraduationCap, Sparkles, TrendingUp } from "lucide-react";

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

      <ProgramImpact
        impacts={[
          "Tumbuhnya generasi pelajar yang kreatif dan komunikatif, karena terbiasa membuat serta menyebarkan konten edukatif",
          "Meluasnya jangkauan dan pengaruh Ambivers di kalangan pelajar, sehingga Ambivers dikenal sebagai platform edukatif yang relevan dan berdampak."
        ]}
      />
    </div>
  );
}

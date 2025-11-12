import ProgramHero from "@/components/ProgramHero";
import OutcomeSection from "@/components/OutcomeSection";
import ProgramImpact from "@/components/ProgramImpact";

export default function StudentAmbassador() {
  const outcomes = [
    {
      title: "Peningkatan brand awareness",
      description: "Ambivers menjadi lebih dikenal di kalangan pelajar melalui konten dan aktivitas yang dibagikan oleh Student Ambassador."
    },
    {
      title: "Penyebaran nilai edukatif",
      description: "Materi pembelajaran dan program Ambivers dapat menjangkau lebih banyak pelajar secara luas."
    },
    {
      title: "Pengembangan diri pelajar",
      description: "Student Ambassador memperoleh pengalaman dalam komunikasi, pembuatan konten, dan personal branding."
    },
    {
      title: "Peningkatan keikutsertaan program Ambivers",
      description: "Lebih banyak pelajar yang tertarik dan bergabung dalam program-program Ambivers."
    }
  ];

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="Student Ambassador"
        description="Program bagi pelajar untuk membuat dan membagikan konten edukatif, sekaligus memperkenalkan serta menyebarkan berbagai program dan pembelajaran yang dimiliki oleh Ambivers."
        imageUrl="https://drive.google.com/uc?export=view&id=1pozH108U6RYeTCAtFCXWDxiW9fXXmbqE"
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

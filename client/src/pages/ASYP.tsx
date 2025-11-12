import ProgramHero from "@/components/ProgramHero";
import OutcomeSection from "@/components/OutcomeSection";
import ProgramImpact from "@/components/ProgramImpact";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Card } from "@/components/ui/card";

export default function ASYP() {
  const testimonials = [
    {
      name: "I Gusti Agung Ardhanareswari",
      institution: "Bali, lulusan SMA Negeri 1 Kuta",
      photo: "https://drive.google.com/uc?export=view&id=16mUngvmkENPAfuHu-mlZ1cgD8q24VWi1",
      text: "Awalnya aku iseng daftar Ambivers Summer Youth Program (ASYP) dan ternyata kepilih! Selama 4 hari program, aku banyak belajar hal bermanfaat: personal branding dari Kak Asya, public speaking dari Kak Andika, serta leadership dan project management dari Kak Zeta. Selain materi, aku juga bisa praktik langsung lewat tugas-tugas kreatif dan project plan. Yang paling seru, aku ketemu banyak teman baru dari berbagai daerah dan bisa networking tiap akhir acara. Pengalaman pertamaku ikut ASYP ini benar-benar menyenangkan dan berkesan!"
    },
    {
      name: "Niputu Sterefi Soyasa",
      photo: "https://drive.google.com/uc?export=view&id=1x6gnEyfDD-ACWT0eEPSu3GWfsSKKOo-J",
      text: "Kita belajar mengenai personal branding, public speaking, leadership, dan juga project management"
    },
    {
      name: "Marsya Olivia Irawan",
      institution: "KIR MAN 2 Kota Bogor",
      photo: "https://drive.google.com/uc?export=view&id=1W8-cFzglxfC2afXJ4lms3SNq-TDe4xTZ",
      text: "Selama Ambivers Summer Youth Program 2023, aku belajar banyak hal baru, mulai dari personal branding, public speaking, leadership, hingga project management, yang langsung bisa aku praktikkan. Selain materi, aku dibimbing oleh kakak-kakak berpengalaman dan bertemu teman-teman hebat dari seluruh Indonesia. Pengalaman 4 hari ini benar-benar berkesan dan sangat membantu!"
    },
    {
      name: "Karisma Alif Nuziaki",
      photo: "https://drive.google.com/uc?export=view&id=13JXS7c7XMFVBqBwBX_U_b3TUWLTVig1C",
      text: "Project-project yang diberikan oleh kakak-kakak Ambivers itu sangat mengasah kemampuan kita, sehingga saya rasa ASYP tahun-tahun berikutnya dapat kalian ikuti juga, karena yang pasti ASYP 2023 ini sudah sangat mengajarkan saya banyak hal"
    }
  ];

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="Ambivers Summer Youth Program"
        description="Ambivers Summer Youth Program (ASYP) merupakan program yang berisi seminar dan pelatihan dengan hands-on project bersama mentor berpengalaman di bidangnya, yang ditujukan untuk siswa SMA di seluruh Indonesia."
        imageUrl="https://drive.google.com/uc?export=view&id=1OYetWadlUDnYk40Bw90YGL1_TnyB74gs"
        primaryButtonText="Ikut program"
      />

      <OutcomeSection
        title="Outcome of the programs"
        description="Peserta mampu mengasah keterampilan komunikasi, kepemimpinan, dan kreativitas melalui pengalaman belajar interaktif dan praktik langsung bersama mentor profesional. Mereka juga lebih memahami potensi diri serta arah pengembangan karier di masa depan."
      />

      <ProgramImpact
        impacts={[
          "Program ini berdampak positif dalam meningkatkan kepercayaan diri, kemampuan berpikir kritis, serta kesiapan peserta untuk menghadapi berbagai tantangan di dunia akademik maupun profesional.",
          "ASYP juga menumbuhkan semangat kolaborasi dan eksplorasi diri di kalangan generasi muda Indonesia."
        ]}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-documentation-title">
            Dokumentasi ASYP
          </h2>
          <Card className="p-8">
            <p className="text-center text-muted-foreground">
              Lihat dokumentasi lengkap kegiatan ASYP di{" "}
              <a 
                href="https://drive.google.com/drive/u/2/folders/10URDk3YkUGzA8vVPfQF12bO1e7QZw-np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC700] hover:underline font-semibold"
                data-testid="link-documentation"
              >
                Google Drive
              </a>
            </p>
          </Card>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}

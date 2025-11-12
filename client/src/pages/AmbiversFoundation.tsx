import ProgramHero from "@/components/ProgramHero";
import VisionMission from "@/components/VisionMission";
import ProgramsGrid from "@/components/ProgramsGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function AmbiversFoundation() {
  const programs = [
    {
      title: "AFYI",
      description: "Program unggulan Ambivers Foundation yang dilaksanakan secara online dan offline yang dirancang khusus untuk memberikan dampak nyata bagi masyarakat dengan melibatkan pemuda Indonesia dalam berbagai inisiatif sosial dan pemberdayaan",
      imageUrl: "https://drive.google.com/uc?export=view&id=1hqEzYCjC4aM2ZjFEZcTyu0vBwjCH2ntG",
      link: "#afyi"
    },
    {
      title: "JUMPIVERS",
      description: "JUMPIVERS (Journey to Unlock my Potential with Ambivers) merupakan sebuah program pengembangan diri yang bertujuan untuk memfasilitasi pengembangan keterampilan, memperluas wawasan, dan mempercepat proses pembelajaran bagi individu yang ingin terus tumbuh, mengeksplorasi potensi diri, dan siap menghadapi tantangan zaman.",
      imageUrl: "https://drive.google.com/uc?export=view&id=1_1ts7n25hs0bGGh4d366sdGdGnZuBJd2",
      link: "#jumpivers"
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

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="Ambivers Foundation"
        description="Ambivers Foundation merupakan NGO yang didirikan sejak Juni 2023, salah satu bagian dari Ambivers.id yang berfokus pada pengembangan mahasiswa melalui berbagai kegiatan sosial dan pendidikan serta sudah 100+ volunteer berpartisipasi untuk memberikan dampak bersama."
        imageUrl="https://drive.google.com/uc?export=view&id=1B6LZHNBJOgw_GA913GzQauNlsmNitNXl"
        primaryButtonText="Ikut program"
        secondaryButtonText="Lebih lanjut"
        secondaryButtonLink="https://www.instagram.com/ambivers.foundation/"
      />

      <VisionMission
        vision="Mendorong anak muda Indonesia berkembang jadi generasi yang cerdas, peduli, dan bermanfaat bagi orang lain."
        missions={[
          "Memberikan tempat bagi anak muda untuk belajar dan mengembangkan diri.",
          "Membantu mereka mengasah kemampuan dan pengalaman lewat berbagai kegiatan.",
          "Mengajak anak muda untuk ikut berbuat baik dan membawa perubahan positif di sekitar mereka."
        ]}
      />

      <ProgramsGrid
        title="Program Ambivers Foundation"
        programs={programs}
      />

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}

import ProgramCard from "./ProgramCard";
import foundationImg from "@assets/generated_images/Ambivers_Foundation_program_card_7872171c.png";
import asypImg from "@assets/generated_images/ASYP_program_card_05c8c781.png";
import ambassadorImg from "@assets/generated_images/Student_Ambassador_program_card_77726dae.png";
import utbkImg from "@assets/generated_images/Bimbel_UTBK_program_card_c5c70a1b.png";
import studyAbroadImg from "@assets/generated_images/Study_Abroad_program_card_0f0c03b5.png";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Ambivers Foundation",
      description: "Non-Governmental Organization (NGO) bagian dari Ambivers.id, berdiri sejak Juni 2023 dan berfokus pada pengembangan mahasiswa lewat kegiatan sosial dan pendidikan, dengan lebih dari 100 relawan yang telah berkontribusi.",
      image: foundationImg,
      testId: "card-foundation"
    },
    {
      title: "ASYP",
      description: "Program pelatihan dengan hands-on project bersama mentor berpengalaman untuk mengembangkan soft skill dan hard skill siswa SMA di seluruh Indonesia.",
      image: asypImg,
      testId: "card-asyp"
    },
    {
      title: "Student Ambassador",
      description: "Program bagi pelajar untuk membuat dan membagikan konten edukatif, sekaligus memperkenalkan serta menyebarkan berbagai program dan pembelajaran yang dimiliki oleh Ambivers.",
      image: ambassadorImg,
      testId: "card-ambassador"
    },
    {
      title: "Bimbel UTBK",
      description: "Program persiapan UTBK untuk siswa kelas 12 yang mencakup try out, diskusi, latihan soal, e-book, video materi, dan konsultasi gratis dengan mentor.",
      image: utbkImg,
      testId: "card-utbk"
    },
    {
      title: "Study Abroad",
      description: "Program bantuan dan bimbingan untuk pelajar yang ingin melanjutkan pendidikan ke luar negeri.",
      image: studyAbroadImg,
      comingSoon: true,
      testId: "card-study-abroad"
    },
    {
      title: "Workshop",
      description: "Berbagai workshop dan pelatihan untuk mengembangkan keterampilan pelajar Indonesia.",
      image: foundationImg,
      comingSoon: true,
      testId: "card-workshop"
    }
  ];

  return (
    <section id="program" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16" data-testid="text-programs-title">
          Program Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

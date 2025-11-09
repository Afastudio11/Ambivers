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
      description: "Non-Governmental Organization (NGO) Bagian Dari Ambivers.id, Berdiri Sejak Juni 2023 Dan Berfokus Pada Pengembangan Mahasiswa Lewat Kegiatan Sosial Dan Pendidikan, Dengan Lebih Dari 100 Relawan Yang Telah Berkontribusi.",
      image: foundationImg,
      testId: "card-foundation"
    },
    {
      title: "ASYP",
      description: "Program Pelatihan Dengan Hands-On Project Bersama Mentor Berpengalaman Untuk Mengembangkan Soft Skill Dan Hard Skill Siswa SMA Di Seluruh Indonesia.",
      image: asypImg,
      testId: "card-asyp"
    },
    {
      title: "Student Ambassador",
      description: "Program Bagi Pelajar Untuk Membuat Dan Membagikan Konten Edukatif, Sekaligus Memperkenalkan Serta Menyebarkan Berbagai Program Dan Pembelajaran Yang Dimiliki Oleh Ambivers.",
      image: ambassadorImg,
      testId: "card-ambassador"
    },
    {
      title: "Bimbel UTBK",
      description: "Program Persiapan UTBK Untuk Siswa Kelas 12 Yang Mencakup Try Out, Diskusi, Latihan Soal, E-Book, Video Materi, Dan Konsultasi Gratis Dengan Mentor.",
      image: utbkImg,
      testId: "card-utbk"
    },
    {
      title: "Study Abroad",
      description: "Program Bantuan Dan Bimbingan Untuk Pelajar Yang Ingin Melanjutkan Pendidikan Ke Luar Negeri.",
      image: studyAbroadImg,
      comingSoon: true,
      testId: "card-study-abroad"
    },
    {
      title: "Workshop",
      description: "Berbagai Workshop Dan Pelatihan Untuk Mengembangkan Keterampilan Pelajar Indonesia.",
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

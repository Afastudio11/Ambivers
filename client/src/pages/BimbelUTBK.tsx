import ProgramHero from "@/components/ProgramHero";
import utbkImg from "@assets/generated_images/Happy_UTBK_students_studying_f04a86cd.png";
import tryoutIllustration from "@assets/generated_images/Teen_student_CBT_exam_320fa7c6.png";
import latihanSoalIllustration from "@assets/generated_images/Teen_studying_practice_problems_8705da66.png";
import ebookIllustration from "@assets/generated_images/Teen_reading_digital_ebook_2dc335dd.png";
import videoMateriIllustration from "@assets/generated_images/Teen_watching_video_lesson_e77caf6e.png";
import konsultasiIllustration from "@assets/generated_images/Mentor_consulting_teen_student_355293f0.png";
import grupDiskusiIllustration from "@assets/generated_images/Teen_group_study_discussion_214fd4a6.png";

export default function BimbelUTBK() {
  const features = [
    {
      illustration: tryoutIllustration,
      title: "Try out",
      description: "Ikutin sistem terbaru CBT dengan analisis skor sistem IRT"
    },
    {
      illustration: latihanSoalIllustration,
      title: "Latihan soal",
      description: "Ribuan soal latihan terstruktur lengkap dengan pembahasan"
    },
    {
      illustration: ebookIllustration,
      title: "E-book",
      description: "Berisikan rangkuman materi dan rumus cepat"
    },
    {
      illustration: videoMateriIllustration,
      title: "Video materi",
      description: "Akses video pembelajaran dan pembahasan soal UTBK"
    },
    {
      illustration: konsultasiIllustration,
      title: "Konsultasi 24/7 dengan mentor",
      description: "Pendampingan penuh dan bimbingan personal kapan saja dari mentor berpengalaman"
    },
    {
      illustration: grupDiskusiIllustration,
      title: "Grup diskusi",
      description: "Tempat untuk berdiskusi, bertukar tips, dan membahas soal bersama peserta lain"
    }
  ];

  return (
    <div className="min-h-screen">
      <ProgramHero
        title="Bimbel UTBK"
        description="Bimbel UTBK merupakan program persiapan UTBK untuk siswa kelas 12"
        imageUrl={utbkImg}
        primaryButtonText="Ikut program"
      />

      <section className="py-20 bg-[#FFC700]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900" data-testid="text-features-title">
            Fitur program Bimbel UTBK
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Program persiapan UTBK untuk siswa kelas 12 yang mencakup
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#fef4e2] dark:bg-[#fef4e2] rounded-2xl p-2 hover-elevate flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                data-testid={`card-feature-${index}`}
              >
                <div className="bg-white dark:bg-white rounded-t-xl p-6 flex flex-col">
                  <div className="aspect-square w-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={feature.illustration} 
                      alt={feature.title}
                      className="w-full h-full object-contain transition-transform duration-300"
                      data-testid={`img-feature-${index}`}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-900 min-h-[4rem] flex items-start" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                </div>
                <div className="p-3">
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-900" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

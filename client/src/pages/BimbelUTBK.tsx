import ProgramHero from "@/components/ProgramHero";
import { FileText, BookOpen, Video, MessageCircle, Users, Target } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import utbkImg from "@assets/generated_images/Happy_UTBK_students_studying_f04a86cd.png";

export default function BimbelUTBK() {
  const features = [
    {
      icon: Target,
      title: "Try out",
      description: "Ikutin sistem terbaru CBT dengan analisis skor sistem IRT"
    },
    {
      icon: FileText,
      title: "Latihan soal",
      description: "Ribuan soal latihan terstruktur lengkap dengan pembahasan"
    },
    {
      icon: BookOpen,
      title: "E-book",
      description: "Berisikan rangkuman materi dan rumus cepat"
    },
    {
      icon: Video,
      title: "Video materi",
      description: "Akses video pembelajaran dan pembahasan soal UTBK"
    },
    {
      icon: MessageCircle,
      title: "Konsultasi 24/7 dengan mentor",
      description: "Pendampingan penuh dan bimbingan personal kapan saja dari mentor berpengalaman"
    },
    {
      icon: Users,
      title: "Grup diskusi",
      description: "Tempat untuk berdiskusi, bertukar tips, dan membahas soal bersama peserta lain"
    }
  ];

  const bimbelTestimonials = [
    {
      name: "Ridha Alfinanianty",
      institution: "Ilmu Gizi Universitas Indonesia",
      photo: "https://drive.google.com/uc?export=view&id=11eqqn3z9j5rejH4UjlLQRmKBUKB49BmW",
      text: "Memasuki kelas 12 itu erat banget kaitannya dengan dunia yang kanan kiri nya itu ngebahas tentang sbmptn dan lain-lain. Mulai dari ketatnya saingan, materi yang segunung, dan intinya gimana caranya biar kita bisa menjawab banyak soal secara tepat dengan waktu yang disediakan (mepet) hehe. Alhamdulillah wa syukurillah, ketika lg scroll ig aku ketemu platform yang beneran bikin 'love at the first sight'. Soal-soal yang dibahas beneran sesuai dengan standar ujian masuk PTN dan pembahasannya bukan cuman asal pembahasan, tetapi juga secara konsep. Terima kasih banyak sudah menjadi bagian dari perjuangan aku, so worth it!"
    },
    {
      name: "Margareth Angelin Chatarina",
      institution: "Kedokteran Universitas Diponegoro",
      photo: "https://drive.google.com/uc?export=view&id=12NJULT9urF8QP0qUchfq5TQJyI7Ws8ID",
      text: "Menurut aku, ambivers sangat membantu dalam persiapan sbmptn waktu itu. Tahun 2020, covid sedang sangat tinggi penyebarannya sehingga aku tidak bisa keluar untuk bimbel offline. Selain itu, tipe soal utbk yang baru dan hanya tps membuat aku panik. Untungnya, ambivers membantuku dengan menyediakan latihan soal yang sangat variatif dan disertai pembahasan yang mudah dipahami. Di grup, teman-teman lain juga saling berbagi soal dan membantu untuk pembahasan. Aku merasa sangat terbantu dan merekomendasi ambivers untuk teman-teman yang sedang persiapan untuk masuk PTN impian."
    },
    {
      name: "Abdan Syakuro",
      institution: "Sastra Daerah Universitas Sebelas Maret",
      photo: "https://drive.google.com/uc?export=view&id=1iu0tnPLDBsaeZhViagFLM5UDMw4GHVn4",
      text: "Testimoni untuk bimbelnya bagus, kak, cukup untuk menambah latihan-latihan soal buat saya yang pada saat itu memang masih kurang sekali kemampuannya, terutama dalam kuantitatif. Jadi menurut saya bimbel yang saya ikuti sangat bermanfaat, juga dengan latihan-latihan soal beserta penjelasannya yang mudah dipahami. Begitu kak untuk testimoni dari saya, terima kasih sudah menjadi salah satu bagian dari kesuksesan saya di UNS."
    },
    {
      name: "Intan Putri Syamtomi",
      institution: "Pendidikan Dokter Universitas Andalas",
      photo: "https://drive.google.com/uc?export=view&id=18j5Md9L9ex6J0h2jSoaSXZShDcMzun2U",
      text: "Aku bener-bener beruntung bisa ketemu ambivers ini. Seperti namanya, orang orang di dalamnya bener-bener ambis ditambah saling berbagi. Materi yang di ajarin pun yang bener-bener aku butuhin, kalo ga tau aku bisa nanya secara personal ke kakaknya atau ke temen-temen di grup dan mereka bener-bener bantuin, walaupun kita dari berbagai provinsi. Ambivers bener-bener worth it sebagai tempat untuk persiapan untuk ujian masuk PTN dan dipastikan tidak akan menyesal untuk ikut les ini apalagi sudah ada seperti buku-buku yang sangat membantu kalian dalam menghadapi ujian kedepan."
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

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4" data-testid="text-features-title">
            Fitur program Bimbel UTBK
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Program persiapan UTBK untuk siswa kelas 12 yang mencakup
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#fef4e2] dark:bg-[#fef4e2] rounded-md p-8 hover-elevate"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#FFC700] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-900 mb-2" data-testid={`text-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-700" data-testid={`text-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialCarousel 
        testimonials={bimbelTestimonials}
        title="Apa kata mereka tentang Bimbel UTBK Ambivers?"
      />
    </div>
  );
}

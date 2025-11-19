import { useState, useEffect } from "react";
import ProgramHero from "@/components/ProgramHero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText, BookOpen, Video, MessageCircle, Users, Target } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import utbkImg from "@assets/generated_images/Bimbel_UTBK_program_card_c5c70a1b.png";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + itemsPerView >= features.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerView, features.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, features.length - itemsPerView) : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= features.length ? 0 : prev + 1
    );
  };

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

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
                }}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card 
                      key={index} 
                      className="hover-elevate flex-shrink-0"
                      style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                      data-testid={`card-feature-${index}`}
                    >
                      <CardHeader>
                        <div className="p-3 w-fit rounded-md bg-[#FFC700] dark:bg-[#FFC700] mb-4">
                          <Icon className="w-6 h-6 text-gray-900 dark:text-gray-900" />
                        </div>
                        <CardTitle className="text-xl" data-testid={`text-feature-title-${index}`}>
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base" data-testid={`text-feature-description-${index}`}>
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                size="icon"
                variant="outline"
                onClick={goToPrevious}
                data-testid="button-features-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                onClick={goToNext}
                data-testid="button-features-next"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
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

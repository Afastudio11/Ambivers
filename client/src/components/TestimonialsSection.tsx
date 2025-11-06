import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import photo1 from "@assets/stock_images/professional_headsho_a770d498.jpg";
import photo2 from "@assets/stock_images/professional_headsho_807d636b.jpg";
import photo3 from "@assets/stock_images/professional_headsho_f9d70996.jpg";
import photo4 from "@assets/stock_images/professional_headsho_74055331.jpg";
import photo5 from "@assets/stock_images/professional_headsho_aaf355ba.jpg";
import photo6 from "@assets/stock_images/professional_headsho_74c799fc.jpg";
import photo7 from "@assets/stock_images/professional_headsho_cfb8f0ba.jpg";
import photo8 from "@assets/stock_images/professional_headsho_8d055f6b.jpg";
import photo9 from "@assets/stock_images/professional_headsho_f3907cb0.jpg";
import photo10 from "@assets/stock_images/professional_headsho_bced7773.jpg";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Ridha Alfinanianty",
      institution: "Ilmu Gizi Universitas Indonesia",
      text: "Memasuki kelas 12 itu erat banget kaitannya dengan dunia yang kanan kiri nya itu ngebahas tentang sbmptn dan lain-lain. Mulai dari ketatnya saingan, materi yang segunung, dan intinya gimana caranya biar kita bisa menjawab banyak soal secara tepat dengan waktu yang disediakan (mepet) hehe. Alhamdulillah wa syukurillah, ketika lg scroll ig aku ketemu platform yang beneran bikin love at the first sight. Soal-soal yang dibahas beneran sesuai dengan standar ujian masuk PTN.",
      photo: photo1
    },
    {
      name: "Margareth Angelin Chatarina",
      institution: "Kedokteran Universitas Diponegoro",
      text: "Menurut aku, ambivers sangat membantu dalam persiapan sbmptn waktu itu. Tahun 2020, covid sedang sangat tinggi penyebarannya sehingga aku tidak bisa keluar untuk bimbel offline. Selain itu, tipe soal utbk yang baru dan hanya tps membuat aku panik. Untungnya, ambivers membantuku dengan menyediakan latihan soal yang sangat variatif dan disertai pembahasan yang mudah dipahami.",
      photo: photo2
    },
    {
      name: "Abdan Syakuro",
      institution: "Sastra Daerah Universitas Sebelas Maret",
      text: "Testimoni untuk bimbelnya bagus, kak, cukup untuk menambah latihan-latihan soal buat saya yang pada saat itu memang masih kurang sekali kemampuannya, terutama dalam kuantitatif. Jadi menurut saya bimbel yang saya ikuti sangat bermanfaat, juga dengan latihan-latihan soal beserta penjelasannya yang mudah dipahami. Begitu kak untuk testimoni dari saya, terima kasih sudah menjadi salah satu bagian dari kesuksesan saya di UNS.",
      photo: photo3
    },
    {
      name: "Intan Putri Syamtomi",
      institution: "Pendidikan Dokter Universitas Andalas",
      text: "Aku bener-bener beruntung bisa ketemu ambivers ini. Seperti namanya, orang orang di dalamnya bener-bener ambis ditambah saling berbagi. Materi yang di ajarin pun yang bener-bener aku butuhin, kalo ga tau aku bisa nanya secara personal ke kakaknya atau ke temen-temen di grup dan mereka bener-bener bantuin, walaupun kita dari berbagai provinsi. Ambivers bener-bener worth it sebagai tempat untuk persiapan untuk ujian masuk PTN.",
      photo: photo4
    },
    {
      name: "Della Nurbait",
      institution: "Universitas Sriwijaya",
      text: "Aku merasa Student Ambassador ini meningkatkan personal branding apalagi disertai dengan upgrading class. Pesannya semoga bisa tetap berkontribusi banyak bersama nanti dan semoga bisa meet up sama Student Ambassador 2022. KERENNN POLL",
      photo: photo5
    },
    {
      name: "Nabila Putri Herdianti",
      institution: "Universitas Negeri Jakarta",
      text: "Aku seneng banget bisa menjadi bagian dari Student Ambassador kali ini, bisa mendapatkan banyak pengalaman, relasi, menambah wawasan dan juga pengalaman. Semoga kedepannya banyak program-program yang semakin baik dan keren tentunya. Terima kasih Ambivers <3",
      photo: photo6
    },
    {
      name: "I Gusti Agung Ardhanareswari",
      institution: "SMA Negeri 1 Kuta, Bali",
      text: "Awalnya aku iseng daftar Ambivers Summer Youth Program (ASYP) dan ternyata kepilih! Selama 4 hari program, aku banyak belajar hal bermanfaat: personal branding dari Kak Asya, public speaking dari Kak Andika, serta leadership dan project management dari Kak Zeta. Selain materi, aku juga bisa praktik langsung lewat tugas-tugas kreatif dan project plan. Yang paling seru, aku ketemu banyak teman baru dari berbagai daerah!",
      photo: photo7
    },
    {
      name: "Niputu Sterefi Soyasa",
      institution: "Peserta ASYP 2023",
      text: "Kita belajar mengenai personal branding, public speaking, leadership, dan juga project management. Pengalaman yang sangat berharga dan berkesan!",
      photo: photo8
    },
    {
      name: "Marsya Olivia Irawan",
      institution: "KIR MAN 2 Kota Bogor",
      text: "Aku Marsha Olivia Irawan dari KIR MAN 2 Kota Bogor. Selama Ambivers Summer Youth Program 2023, aku belajar banyak hal baru, mulai dari personal branding, public speaking, leadership, hingga project management, yang langsung bisa aku praktikkan. Selain materi, aku dibimbing oleh kakak-kakak berpengalaman dan bertemu teman-teman hebat dari seluruh Indonesia. Pengalaman 4 hari ini benar-benar berkesan dan sangat membantu!",
      photo: photo9
    },
    {
      name: "Karisma Alif Nuziaki",
      institution: "Peserta ASYP 2023",
      text: "Project-project yang diberikan oleh kakak-kakak Ambivers itu sangat mengasah kemampuan kita, sehingga saya rasa ASYP tahun-tahun berikutnya dapat kalian ikuti juga, karena yang pasti ASYP 2023 ini sudah sangat mengajarkan saya banyak hal",
      photo: photo10
    }
  ];

  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4" data-testid="text-testimonials-title">
          Apa Kata Mereka Tentang Belajar bersama Ambivers?
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Testimoni dari pelajar yang telah merasakan manfaat program Ambivers
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {slides[currentSlide]?.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                testId={`testimonial-${currentSlide}-${index}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  data-testid={`dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

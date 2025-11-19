import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ridhaPhoto from "@assets/Ridha Alfinanianty_1763550478826.png";
import margarethPhoto from "@assets/Margareth Angelin Chatarina_1763550478825.png";
import abdanPhoto from "@assets/Abdan Syakuro_1763550478824.png";
import intanPhoto from "@assets/Intan Putri Syamtomi_1763550478825.png";
import dellaPhoto from "@assets/Della Nurbait_1763550478825.png";
import nabilaPhoto from "@assets/Nabila Putri Herdianti_1763550478826.png";

export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "Universitas Indonesia",
      rating: 4.9,
      text: "Memasuki kelas 12 itu erat banget kaitannya dengan dunia yang kanan kiri nya itu ngebahas tentang sbmptn dan lain-lain. Mulai dari ketatnya saingan, materi yang segunung, dan intinya gimana caranya biar kita bisa menjawab banyak soal secara tepat dengan waktu yang disediakan (mepet) hehe. Alhamdulillah wa syukurillah, ketika lg scroll ig aku ketemu platform yang beneran bikin \"love at the first sight\". Soal-soal yang dibahas beneran sesuai dengan standar ujian masuk PTN dan pembahasan yang diberikan mudah dipahami. Yang paling aku suka adalah soal-soal yang disediakan itu variatif dan banyak banget, jadi aku bisa latihan sebanyak-banyaknya.",
      name: "Ridha Alfinanianty",
      username: "ridha_alfin_21",
      major: "Ilmu Gizi",
      photo: ridhaPhoto
    },
    {
      company: "Universitas Diponegoro",
      rating: 4.8,
      text: "Menurut aku, ambivers sangat membantu dalam persiapan sbmptn waktu itu. Tahun 2020, covid sedang sangat tinggi penyebarannya sehingga aku tidak bisa keluar untuk bimbel offline. Selain itu, tipe soal utbk yang baru dan hanya tps membuat aku panik. Untungnya, ambivers membantuku dengan menyediakan latihan soal yang sangat variatif dan disertai pembahasan yang mudah dipahami. Di grup, teman-teman lain juga saling berbagi soal dan membantu untuk pembahasan. Aku merasa sangat terbantu dengan adanya ambivers ini.",
      name: "Margareth Angelin Chatarina",
      username: "margareth_angel",
      major: "Kedokteran",
      photo: margarethPhoto
    },
    {
      company: "Universitas Sebelas Maret",
      rating: 4.9,
      text: "Testimoni untuk bimbelnya bagus, kak, cukup untuk menambah latihan-latihan soal buat saya yang pada saat itu memang masih kurang sekali kemampuannya, terutama dalam kuantitatif. Jadi menurut saya bimbel yang saya ikuti sangat bermanfaat, juga dengan latihan-latihan soal beserta penjelasannya yang mudah dipahami. Begitu kak untuk testimoni dari saya, terima kasih sudah menjadi salah satu bagian dari kesuksesan saya di UNS.",
      name: "Abdan Syakuro",
      username: "abdan_syakuro",
      major: "Sastra Daerah",
      photo: abdanPhoto
    },
    {
      company: "Universitas Andalas",
      rating: 5.0,
      text: "Aku bener-bener beruntung bisa ketemu ambivers ini. Seperti namanya, orang orang di dalamnya bener-bener ambis ditambah saling berbagi. Materi yang di ajarin pun yang bener-bener aku butuhin, kalo ga tau aku bisa nanya secara personal ke kakaknya atau ke temen-temen di grup dan mereka bener-bener bantuin, walaupun kita dari berbagai provinsi. Ambivers bener-bener worth it sebagai tempat untuk persiapan untuk ujian masuk PTN dan dipastikan tidak akan menyesal untuk ikut les ini apa lagi dengan harga yang sangat terjangkau.",
      name: "Intan Putri Syamtomi",
      username: "intan_syamtomi",
      major: "Pendidikan Dokter",
      photo: intanPhoto
    },
    {
      company: "Universitas Sriwijaya",
      rating: 4.7,
      text: "Aku merasa Student Ambassador ini meningkatkan personal branding apalagi disertai dengan upgrading class. Pesannya semoga bisa tetap berkontribusi banyak bersama nanti dan semoga bisa meet up sama Student Ambassador 2022. KERENNN POLL",
      name: "Della Nurbait",
      username: "della_nurbait",
      major: "",
      photo: dellaPhoto
    },
    {
      company: "Universitas Negeri Jakarta",
      rating: 4.9,
      text: "Aku seneng banget bisa menjadi bagian dari Student Ambassador kali ini, bisa mendapatkan banyak pengalaman, relasi, menambah wawasan dan juga pengalaman. Semoga kedepannya banyak program-program yang semakin baik dan keren tentunya. Terima kasih Ambivers <3",
      name: "Nabila Putri Herdianti",
      username: "nabila_putri_h",
      major: "",
      photo: nabilaPhoto
    }
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimoni" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4" data-testid="text-testimonials-title">
          Apa kata mereka tentang belajar bersama Ambivers?
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTestimonial(testimonial)}
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                data-testid={`testimonial-card-${idx}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                    {testimonial.company}
                  </div>
                  <div className="flex items-center gap-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-lg">
                    <span className="font-semibold text-sm">{testimonial.rating}</span>
                    <Star className="w-4 h-4 fill-green-500 text-green-500" />
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 line-clamp-4">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {testimonial.name}
                    </div>
                    {testimonial.major && (
                      <div className="text-sm text-primary">
                        {testimonial.major}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Centered */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            data-testid="button-testimonials-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            data-testid="button-testimonials-next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-2xl" data-testid="dialog-testimonial">
          {selectedTestimonial && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-start justify-between gap-4">
                  <span className="text-xl font-bold">{selectedTestimonial.company}</span>
                  <div className="flex items-center gap-1 bg-white border border-gray-200 px-2 py-1 rounded-lg">
                    <span className="font-semibold text-sm">{selectedTestimonial.rating}</span>
                    <Star className="w-4 h-4 fill-green-500 text-green-500" />
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {selectedTestimonial.text}
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={selectedTestimonial.photo} alt={selectedTestimonial.name} />
                      <AvatarFallback>{selectedTestimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">
                        {selectedTestimonial.name}
                      </div>
                      {selectedTestimonial.major && (
                        <div className="text-sm text-primary">
                          {selectedTestimonial.major}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

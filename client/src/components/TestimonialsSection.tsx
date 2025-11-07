import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "Universitas Indonesia",
      rating: 4.9,
      text: "Memasuki kelas 12 itu erat banget kaitannya dengan dunia yang kanan kiri nya itu ngebahas tentang sbmptn dan lain-lain. Mulai dari ketatnya saingan, materi yang segunung, dan intinya gimana caranya biar kita bisa menjawab banyak soal secara tepat dengan waktu yang disediakan (mepet) hehe. Alhamdulillah wa syukurillah, ketika lg scroll ig aku ketemu platform yang beneran bikin \"love at the first sight\". Soal-soal yang dibahas beneran sesuai dengan standar ujian masuk PTN dan pe...",
      name: "Ridha Alfinanianty",
      username: "ridha_alfin_21",
      major: "Ilmu Gizi"
    },
    {
      company: "Universitas Diponegoro",
      rating: 4.8,
      text: "Menurut aku, ambivers sangat membantu dalam persiapan sbmptn waktu itu. Tahun 2020, covid sedang sangat tinggi penyebarannya sehingga aku tidak bisa keluar untuk bimbel offline. Selain itu, tipe soal utbk yang baru dan hanya tps membuat aku panik. Untungnya, ambivers membantuku dengan menyediakan latihan soal yang sangat variatif dan disertai pembahasan yang mudah dipahami.",
      name: "Margareth Angelin Chatarina",
      username: "margareth_angel",
      major: "Kedokteran"
    },
    {
      company: "Universitas Sebelas Maret",
      rating: 4.9,
      text: "Testimoni untuk bimbelnya bagus, kak, cukup untuk menambah latihan-latihan soal buat saya yang pada saat itu memang masih kurang sekali kemampuannya, terutama dalam kuantitatif. Jadi menurut saya bimbel yang saya ikuti sangat bermanfaat, juga dengan latihan-latihan soal beserta penjelasannya yang mudah dipahami.",
      name: "Abdan Syakuro",
      username: "abdan_syakuro",
      major: "Sastra Daerah"
    },
    {
      company: "Universitas Andalas",
      rating: 5.0,
      text: "Aku bener-bener beruntung bisa ketemu ambivers ini. Seperti namanya, orang orang di dalamnya bener-bener ambis ditambah saling berbagi. Materi yang di ajarin pun yang bener-bener aku butuhin, kalo ga tau aku bisa nanya secara personal ke kakaknya atau ke temen-temen di grup dan mereka bener-bener bantuin, walaupun kita dari berbagai provinsi.",
      name: "Intan Putri Syamtomi",
      username: "intan_syamtomi",
      major: "Pendidikan Dokter"
    },
    {
      company: "Universitas Sriwijaya",
      rating: 4.7,
      text: "Aku merasa Student Ambassador ini meningkatkan personal branding apalagi disertai dengan upgrading class. Pesannya semoga bisa tetap berkontribusi banyak bersama nanti dan semoga bisa meet up sama Student Ambassador 2022. KERENNN POLL",
      name: "Della Nurbait",
      username: "della_nurbait",
      major: ""
    },
    {
      company: "Universitas Negeri Jakarta",
      rating: 4.9,
      text: "Aku seneng banget bisa menjadi bagian dari Student Ambassador kali ini, bisa mendapatkan banyak pengalaman, relasi, menambah wawasan dan juga pengalaman. Semoga kedepannya banyak program-program yang semakin baik dan keren tentunya. Terima kasih Ambivers <3",
      name: "Nabila Putri Herdianti",
      username: "nabila_putri_h",
      major: ""
    },
    {
      company: "Ambivers Summer Youth Program",
      rating: 5.0,
      text: "Aku I Gusti Agung Ardhanareswari dari Bali, lulusan SMA Negeri 1 Kuta. Awalnya aku iseng daftar Ambivers Summer Youth Program (ASYP) dan ternyata kepilih! Selama 4 hari program, aku banyak belajar hal bermanfaat: personal branding dari Kak Asya, public speaking dari Kak Andika, serta leadership dan project management dari Kak Zeta.",
      name: "I Gusti Agung Ardhanareswari",
      username: "ardhanareswari",
      major: "SMA Negeri 1 Kuta, Bali"
    },
    {
      company: "Ambivers Summer Youth Program",
      rating: 5.0,
      text: "Kita belajar mengenai personal branding, public speaking, leadership, dan juga project management",
      name: "Niputu Sterefi Soyasa",
      username: "niputu_soyasa",
      major: ""
    },
    {
      company: "Ambivers Summer Youth Program",
      rating: 5.0,
      text: "Aku Marsha Olivia Irawan dari KIR MAN 2 Kota Bogor. Selama Ambivers Summer Youth Program 2023, aku belajar banyak hal baru, mulai dari personal branding, public speaking, leadership, hingga project management, yang langsung bisa aku praktikkan. Selain materi, aku dibimbing oleh kakak-kakak berpengalaman dan bertemu teman-teman hebat dari seluruh Indonesia.",
      name: "Marsya Olivia Irawan",
      username: "marsya_olivia",
      major: "KIR MAN 2 Kota Bogor"
    },
    {
      company: "Ambivers Summer Youth Program",
      rating: 5.0,
      text: "Project-project yang diberikan oleh kakak-kakak Ambivers itu sangat mengasah kemampuan kita, sehingga saya rasa ASYP tahun-tahun berikutnya dapat kalian ikuti juga, karena yang pasti ASYP 2023 ini sudah sangat mengajarkan saya banyak hal",
      name: "Karisma Alif Nuziaki",
      username: "karisma_alif",
      major: ""
    }
  ];

  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 7);
  const row3 = testimonials.slice(7);

  const renderRow = (testimonials: typeof row1, index: number, reverse: boolean = false) => (
    <div key={index} className="relative overflow-hidden mb-8">
      <div className={`flex gap-6 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[400px] bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            data-testid={`testimonial-card-row${index}-${idx}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="font-bold text-lg text-gray-900">
                {testimonial.company}
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                <span className="font-semibold text-sm">{testimonial.rating}</span>
                <Star className="w-4 h-4 fill-green-500 text-green-500" />
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-6 line-clamp-4">
              {testimonial.text}
            </p>
            
            <div>
              <div className="font-bold text-gray-900 mb-1">
                {testimonial.name}
              </div>
              {testimonial.major && (
                <div className="text-sm text-gray-600 mb-1">
                  {testimonial.major}
                </div>
              )}
              <div className="text-sm text-gray-500">
                {testimonial.username}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="testimoni" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4" data-testid="text-testimonials-title">
          Apa Kata Mereka Tentang{" "}
          <span className="bg-[#FFC727] text-black px-3 py-1 rounded-md">Belajar bersama Ambivers?</span>
        </h2>
      </div>

      <div className="w-full">
        {renderRow(row1, 0, false)}
        {renderRow(row2, 1, true)}
        {renderRow(row3, 2, false)}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 90s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 90s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

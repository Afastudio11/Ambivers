import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "Universitas Indonesia",
      rating: 4.9,
      text: "Program Ambivers sangat membantu saya dalam persiapan UTBK. Materi yang diberikan sangat komprehensif dan pembahasan soalnya mudah dipahami.",
      name: "Ridha Alfinanianty",
      username: "ridha_alfin_21"
    },
    {
      company: "Universitas Diponegoro",
      rating: 4.8,
      text: "Mentornya sangat responsif dan membantu. Soal-soal latihannya benar-benar mirip dengan soal UTBK yang sebenarnya.",
      name: "Margareth Angelin",
      username: "margareth_angel"
    },
    {
      company: "Universitas Sebelas Maret",
      rating: 4.9,
      text: "Sangat bermanfaat! Latihan soal yang variatif dan penjelasan yang detail membantu saya memahami materi dengan baik.",
      name: "Abdan Syakuro",
      username: "abdan_syakuro"
    },
    {
      company: "Universitas Andalas",
      rating: 5.0,
      text: "Ambivers benar-benar worth it! Materi lengkap, mentor ramah, dan komunitas yang supportif. Sangat recommended!",
      name: "Intan Putri Syamtomi",
      username: "intan_syamtomi"
    },
    {
      company: "Universitas Sriwijaya",
      rating: 4.7,
      text: "Program Student Ambassador sangat meningkatkan personal branding saya. Pengalaman yang luar biasa!",
      name: "Della Nurbait",
      username: "della_nurbait"
    },
    {
      company: "Universitas Negeri Jakarta",
      rating: 4.9,
      text: "Saya mendapatkan banyak pengalaman, relasi, dan wawasan baru. Program-programnya sangat keren dan bermanfaat!",
      name: "Nabila Putri",
      username: "nabila_putri_h"
    }
  ];

  return (
    <section id="testimoni" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4" data-testid="text-testimonials-title">
          Our trusted <span className="bg-[#FF5733] text-white px-3 py-1 rounded-md">Clients</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              data-testid={`testimonial-card-${index}`}
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
                <div className="text-sm text-gray-500">
                  {testimonial.username}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

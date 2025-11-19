import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialDemo() {
  const testimonials = [
    {
      name: "Jeremy Kester Hanani",
      institution: "Universitas Indonesia",
      photo: "https://drive.google.com/uc?export=view&id=11eqqn3z9j5rejH4UjlLQRmKBUKB49BmW",
      text: "AIESEC Future Leaders is a positive and enjoyable experience for me. Through the program provided, I feel that I have learned a lot, especially about self-development, and increased revealing of my potential. Besides that, I also get new networking, both domestic and foreign. That's another advantage I feel I get and I'm so happy with it. After this lesson, I feel that I have good self-sufficiency and can explore it's potential again in order to develop and run better sustainability of life for the surrounding environment and even wider environmental coverage."
    },
    {
      name: "Inyo Hansen",
      institution: "Universitas Ciputra Surabaya",
      photo: "https://drive.google.com/uc?export=view&id=12NJULT9urF8QP0qUchfq5TQJyI7Ws8ID",
      text: "AIESEC Future Leaders has been an adventure for me, at quite a lot because it is my first time going out of my comfort zone. But since I decided to join AFYI, I felt that it teaches me a lot of things for my future hence I joined AFYI. It taught me on how to start a business development. Each videos are very individual for yourself. For those who want to find something more meaning in their spare time, I recommend AFYI as it really helped me to become a better person."
    },
    {
      name: "Ridha Alfinanianty",
      institution: "Ilmu Gizi Universitas Indonesia",
      photo: "https://drive.google.com/uc?export=view&id=1iu0tnPLDBsaeZhViagFLM5UDMw4GHVn4",
      text: "Memasuki kelas 12 itu erat banget kaitannya dengan dunia yang kanan kiri nya itu ngebahas tentang sbmptn dan lain-lain. Mulai dari ketatnya saingan, materi yang segunung, dan intinya gimana caranya biar kita bisa menjawab banyak soal secara tepat dengan waktu yang disediakan (mepet) hehe. Alhamdulillah wa syukurillah, ketika lg scroll ig aku ketemu platform yang beneran bikin 'love at the first sight'."
    },
    {
      name: "Margareth Angelin Chatarina",
      institution: "Kedokteran Universitas Diponegoro",
      photo: "https://drive.google.com/uc?export=view&id=18j5Md9L9ex6J0h2jSoaSXZShDcMzun2U",
      text: "Menurut aku, ambivers sangat membantu dalam persiapan sbmptn waktu itu. Tahun 2020, covid sedang sangat tinggi penyebarannya sehingga aku tidak bisa keluar untuk bimbel offline. Selain itu, tipe soal utbk yang baru dan hanya tps membuat aku panik."
    }
  ];

  return (
    <div className="min-h-screen">
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}

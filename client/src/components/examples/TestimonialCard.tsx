import TestimonialCard from '../TestimonialCard'
import photo1 from "@assets/stock_images/professional_headsho_a770d498.jpg";

export default function TestimonialCardExample() {
  return (
    <div className="max-w-lg">
      <TestimonialCard
        name="Ridha Alfinanianty"
        institution="Ilmu Gizi Universitas Indonesia"
        text="Memasuki kelas 12 itu erat banget kaitannya dengan dunia yang kanan kiri nya itu ngebahas tentang sbmptn dan lain-lain. Mulai dari ketatnya saingan, materi yang segunung, dan intinya gimana caranya biar kita bisa menjawab banyak soal secara tepat dengan waktu yang disediakan (mepet) hehe. Alhamdulillah wa syukurillah, ketika lg scroll ig aku ketemu platform yang beneran bikin love at the first sight."
        photo={photo1}
        testId="testimonial-ridha"
      />
    </div>
  )
}

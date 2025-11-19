import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import utbkImg from "@assets/generated_images/UTBK_exam_preparation_illustration_b7ac0acd.png";
import majorSelectionImg from "@assets/generated_images/College_major_selection_illustration_67050b7e.png";
import studyAbroadImg from "@assets/generated_images/Study_abroad_scholarship_illustration_65c7b73b.png";
import upcycleImg from "@assets/generated_images/Upcycle_workshop_blue_yellow_illustration_554e1da2.png";
import studyStrategyImg from "@assets/generated_images/Effective_study_strategies_illustration_84643aa3.png";
import portfolioImg from "@assets/generated_images/University_portfolio_building_illustration_bec1a407.png";
import softSkillsImg from "@assets/generated_images/Digital_soft_skills_development_7fe69c97.png";
import techCareerImg from "@assets/generated_images/Technology_career_opportunities_illustration_46d098fa.png";
import domesticScholarshipImg from "@assets/generated_images/Domestic_scholarship_success_illustration_84323294.png";
import jumpiversDoc1 from "@assets/WhatsApp Image 2025-08-10 at 15.18.11_1763534976418.jpeg";
import jumpiversDoc2 from "@assets/IMG-20250809-WA0000_1763534976419.jpg";
import afyiDoc1 from "@assets/DSCF0450_1763535140988.jpg";
import afyiDoc2 from "@assets/DSCF0352_1763535140989.jpg";
import afyiDoc3 from "@assets/DSCF0358_1763535140989.jpg";
import upcycleDoc1 from "@assets/IMG_1916_1763535603520.jpg";
import upcycleDoc2 from "@assets/IMG_1715_1763535603521.jpg";
import upcycleDoc3 from "@assets/IMG_1980_1763535603522.jpg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  documentationImages?: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 10,
    title: "Bootcamp JUMPIVERS 1.0 Social Media Mastery : Mengasah Keterampilan Digital di Era Media Sosial",
    excerpt: "Bootcamp JUMPIVERS 1.0 menjadi langkah nyata Ambivers Foundation dalam memberdayakan generasi muda agar mampu memanfaatkan media sosial secara lebih cerdas dan strategis.",
    content: `
      <h2>Tentang Bootcamp JUMPIVERS 1.0</h2>
      <p>Jakarta, Agustus 2025 - Ambivers Foundation berkesempatan mengadakan Bootcamp JUMPIVERS 1.0 Social Media Mastery, sebuah ruang belajar interaktif yang dirancang untuk membantu peserta memahami strategi dasar dalam pengelolaan media sosial secara komprehensif dan aplikatif.</p>
      
      <h2>Tujuan Program</h2>
      <p>Bootcamp JUMPIVERS 1.0 Social Media Mastery menjadi langkah nyata Ambivers Foundation dalam memberdayakan generasi muda agar mampu memanfaatkan media sosial secara lebih cerdas dan strategis. Dengan berfokus pada penambahan wawasan terkait kemampuan dasar dalam dunia digital, para peserta diajak untuk mengikuti empat sesi pembelajaran yang dikemas intensif dan menyenangkan.</p>
      
      <h2>Materi Pembelajaran</h2>
      <p>Peserta diajak untuk mengenal dasar dari social media management, membuat konten, mempelajari cara menganalisis performa media sosial, dan memahami strategi engagement yang efektif. Seluruh sesi dilaksanakan secara daring pada 2, 3, 9, dan 10 Agustus 2025 melalui Zoom Meeting.</p>
      
      <h2>Narasumber Berpengalaman</h2>
      <p>Kegiatan ini menghadirkan tiga narasumber berpengalaman di bidang media digital, yaitu Zahirah Oktrabiul, Nadia Lumongga Nasution, dan Akbar Pangestu. Mereka berbagi pengalaman dan insights berharga tentang dunia social media management.</p>
      
      <h2>Metode Pembelajaran Interaktif</h2>
      <p>Tak sekadar mendengarkan, peserta juga diajak untuk belajar sambil praktik melalui tugas-tugas kreatif, diskusi terbuka, dan sesi final project. Interaksi hangat antara peserta dan narasumber menjadi salah satu kekuatan utama bootcamp ini, membuat suasana belajar terasa hidup dan inspiratif.</p>
      
      <h2>Komitmen Ambivers Foundation</h2>
      <p>Bootcamp JUMPIVERS 1.0: Social Media Mastery menjadi bukti komitmen Ambivers Foundation dalam menghadirkan pembelajaran digital yang tidak hanya informatif, tetapi juga transformatif. Melalui ruang belajar ini, peserta diajak untuk berani berkreasi, mengasah potensi, dan tumbuh menjadi individu yang siap bersaing di dunia digital.</p>
      
      <p>Karena bagi Ambivers Foundation, setiap langkah kecil dalam proses belajar adalah bagian penting dari perjalanan menuju perubahan besar.</p>
    `,
    category: "Bootcamp",
    date: "Agustus 2025",
    readTime: "8 menit",
    image: techCareerImg,
    author: "Friska Setya",
    documentationImages: [jumpiversDoc1, jumpiversDoc2]
  },
  {
    id: 11,
    title: "AFYI: Beyond The Frame — Merayakan Kreativitas dan Pemikiran Inovatif Generasi Muda",
    excerpt: "AFYI menjadi salah satu inisiator kegiatan offline yang bukan hanya tentang penghargaan, tetapi tentang perjalanan untuk menumbuhkan keberanian berpikir di luar batas.",
    content: `
      <h2>Tentang AFYI: Beyond The Frame</h2>
      <p>Jakarta, 21 Desember 2024 - Ambivers Foundation berkesempatan mengadakan acara Ambivers Foundation Youth Impact (AFYI) Beyond the frame: Celebrating Ideas and Insight yang bertempat di Nutrihub Menteng Jakarta. Kegiatan tersebut merupakan seminar yang diselenggarakan dengan kolaborasi antara Ambivers Foundation dan Nutrifood Jakarta.</p>
      
      <h2>Tujuan Program</h2>
      <p>Ambivers Foundation Youth Impact (AFYI) Beyond the frame: Celebrating Ideas and Insight merupakan sebuah rangkaian program yang diadakan untuk membekali generasi muda dengan wawasan berpikir kritis dan kreatif. Kegiatan ini diawali dengan lomba menulis artikel dan membuat infografis pada tanggal 1-10 Desember 2024, yang kemudian seluruh karya dari peserta kompetisi diapresiasi secara offline pada tanggal 21 Desember 2024.</p>
      
      <h2>Rangkaian Acara</h2>
      <p>Secara garis besar, kegiatan seminar ini dikemas dalam dua rangkaian utama:</p>
      <ul>
        <li><strong>Seminar Interaktif</strong> dengan topik Creativity & Critical Thinking, menghadirkan narasumber inspiratif yang memberikan insight mendalam seputar pengembangan pola pikir kreatif.</li>
        <li><strong>Awarding Session</strong>, sebagai bentuk apresiasi terhadap para pemenang lomba yang diadakan oleh Divisi Creative Writing (CW) Ambivers Foundation.</li>
      </ul>
      
      <h2>Pentingnya Berpikir Kreatif dan Kritis</h2>
      <p>Kegiatan ini diadakan untuk menumbuhkan kesadaran akan pentingnya berpikir kreatif dan kritis, serta mendorong generasi muda untuk terus menghadirkan solusi baru di berbagai bidang kehidupan.</p>
      
      <h2>Visi dan Misi</h2>
      <p>AFYI: Beyond The Frame menjadi salah satu inisiator kegiatan offline yang bukan hanya tentang penghargaan, tetapi tentang perjalanan untuk menumbuhkan keberanian berpikir di luar batas, berbagi ide, dan membangun masa depan yang lebih inovatif.</p>
      
      <p>Melalui program ini, Ambivers Foundation menegaskan komitmennya untuk menjadi ruang tumbuh bagi generasi muda yang berani, kreatif, dan berdampak.</p>
    `,
    category: "Seminar",
    date: "21 Desember 2024",
    readTime: "7 menit",
    image: studyStrategyImg,
    author: "Friska Setya",
    documentationImages: [afyiDoc1, afyiDoc2, afyiDoc3]
  },
  {
    id: 1,
    title: "Tips Sukses Menghadapi UTBK 2024",
    excerpt: "Panduan lengkap dan strategi efektif untuk menghadapi Ujian Tulis Berbasis Komputer dengan percaya diri dan hasil maksimal.",
    content: `
      <h2>Persiapan Mental dan Fisik</h2>
      <p>Menghadapi UTBK bukan hanya soal kemampuan akademis, tetapi juga kesiapan mental dan fisik. Pastikan kamu mendapatkan istirahat yang cukup dan menjaga pola makan sehat selama persiapan ujian.</p>
      
      <h2>Strategi Belajar Efektif</h2>
      <p>Buat jadwal belajar yang terstruktur dan fokus pada materi yang paling sering muncul di UTBK. Jangan lupa untuk melakukan try out secara rutin untuk mengukur kemampuanmu.</p>
      
      <h2>Manajemen Waktu</h2>
      <p>Latih kemampuanmu dalam mengerjakan soal dengan batasan waktu. Ini akan membantumu lebih efisien saat menghadapi ujian yang sebenarnya.</p>
      
      <h2>Teknik Mengerjakan Soal</h2>
      <p>Kerjakan soal yang mudah terlebih dahulu, lalu baru kerjakan yang sulit. Jangan terlalu lama di satu soal yang sulit - lanjutkan dan kembali lagi jika ada waktu.</p>
      
      <h2>Sumber Belajar</h2>
      <p>Manfaatkan berbagai sumber belajar seperti buku UTBK, video pembelajaran online, dan bimbingan belajar. Ambivers menyediakan program Bimbel UTBK yang dapat membantumu mempersiapkan diri dengan lebih baik.</p>
    `,
    category: "Pendidikan",
    date: "15 Januari 2024",
    readTime: "5 menit",
    image: utbkImg,
    author: "Tim Ambivers"
  },
  {
    id: 2,
    title: "Cara Memilih Jurusan Kuliah yang Tepat",
    excerpt: "Memilih jurusan kuliah adalah keputusan penting yang akan mempengaruhi masa depanmu.",
    content: `
      <h2>Kenali Minat dan Bakatmu</h2>
      <p>Langkah pertama dalam memilih jurusan adalah memahami apa yang benar-benar kamu minati dan di mana bakatmu berada. Jangan terpengaruh oleh pilihan orang lain atau tren semata.</p>
      
      <h2>Riset Prospek Karir</h2>
      <p>Pelajari peluang karir yang tersedia untuk lulusan jurusan yang kamu minati. Pertimbangkan proyeksi kebutuhan industri di masa depan.</p>
      
      <h2>Konsultasi dengan Mentor</h2>
      <p>Bicarakan pilihanmu dengan guru, konselor, atau profesional di bidang yang kamu minati. Mereka dapat memberikan perspektif berharga tentang jurusan tersebut.</p>
      
      <h2>Pertimbangkan Kemampuan Finansial</h2>
      <p>Pikirkan juga tentang biaya kuliah dan ketersediaan beasiswa untuk jurusan yang kamu pilih.</p>
    `,
    category: "Karir",
    date: "12 Januari 2024",
    readTime: "7 menit",
    image: majorSelectionImg,
    author: "Tim Ambivers"
  },
  {
    id: 3,
    title: "Beasiswa Luar Negeri: Peluang dan Persiapan",
    excerpt: "Raih kesempatan emas untuk kuliah di luar negeri dengan beasiswa.",
    content: `
      <h2>Jenis-jenis Beasiswa</h2>
      <p>Ada berbagai jenis beasiswa untuk kuliah di luar negeri, mulai dari beasiswa pemerintah seperti LPDP, hingga beasiswa dari universitas langsung atau organisasi internasional.</p>
      
      <h2>Persiapan Dokumen</h2>
      <p>Siapkan dokumen-dokumen penting seperti transkrip nilai, sertifikat bahasa (TOEFL/IELTS), motivation letter, dan recommendation letters jauh-jauh hari.</p>
      
      <h2>Tingkatkan Kemampuan Bahasa</h2>
      <p>Kemampuan bahasa Inggris yang baik adalah kunci sukses mendapatkan beasiswa luar negeri. Mulai latihan dari sekarang.</p>
      
      <h2>Buat Portfolio yang Kuat</h2>
      <p>Tunjukkan prestasi akademis, pengalaman organisasi, dan kontribusi sosialmu dalam application beasiswa.</p>
    `,
    category: "Beasiswa",
    date: "8 Januari 2024",
    readTime: "6 menit",
    image: studyAbroadImg,
    author: "Tim Ambivers"
  },
  {
    id: 4,
    title: "AFYI : Workshop Upcycle Magic",
    excerpt: "Workshop Upcycle Magic mengajak generasi muda mengubah sampah menjadi karya bernilai guna melalui pendekatan fun learning yang menyenangkan dan bermakna.",
    content: `
      <h2>Tentang AFYI Workshop Upcycle Magic</h2>
      <p>Surabaya, 05 Oktober 2025 - Ambivers Foundation kembali mengadakan acara Ambivers Foundation Youth Impact atau AFYI. Kegiatan kali ini berlangsung pada tanggal 5 Oktober 2025 secara offline di Surabaya, tepatnya di Kedai Ori Manyar. Dengan mengangkat tema Upcycle Magic, kegiatan AFYI kali ini mengangkat isu terkait daur ulang sampah.</p>
      
      <h2>Latar Belakang Program</h2>
      <p>Isu lingkungan, terutama persoalan sampah, kini menjadi tantangan besar yang membutuhkan langkah nyata dari berbagai pihak, termasuk generasi muda. Melihat pentingnya edukasi lingkungan yang aplikatif dan menyenangkan, Ambivers Foundation melalui program Ambivers Foundation Youth Impact (AFYI) menghadirkan kegiatan Workshop "Upcycle Magic", sebuah inisiatif kreatif yang mengajak peserta untuk mengubah sampah menjadi karya bernilai guna.</p>
      
      <h2>Rangkaian Kegiatan</h2>
      <p>Kegiatan yang diikuti oleh 12 peserta ini dimulai dengan sesi mini talk mengenai konsep upcycle dan pentingnya pengelolaan sampah berkelanjutan. Selanjutnya, peserta diajak untuk praktik langsung membuat kerajinan dari bahan daur ulang, dilanjutkan dengan sesi sharing dan refleksi untuk saling bertukar ide serta memperkuat semangat kreatif dan peduli lingkungan.</p>
      
      <h2>Pendekatan Fun Learning</h2>
      <p>Upcycle Magic menggabungkan pendekatan fun learning dengan praktik langsung, sehingga pembelajaran terasa menyenangkan dan bermakna. Peserta tidak hanya mendapatkan pengetahuan baru, tetapi juga menghasilkan karya unik dari bahan daur ulang.</p>
      
      <h2>Dampak dan Harapan</h2>
      <p>Workshop Upcycle Magic bukan sekadar kegiatan daur ulang, melainkan langkah kecil yang membawa dampak besar. Melalui kegiatan ini, Ambivers Foundation berharap semakin banyak anak muda yang sadar bahwa menjaga bumi dapat dimulai dari kreativitas — dari sampah yang diubah menjadi karya.</p>
      
      <p>Karena perubahan besar selalu dimulai dari tangan-tangan kecil yang peduli.</p>
    `,
    category: "Workshop",
    date: "5 Oktober 2025",
    readTime: "5 menit",
    image: upcycleImg,
    author: "Friska Setya",
    documentationImages: [upcycleDoc1, upcycleDoc2, upcycleDoc3]
  },
  {
    id: 5,
    title: "Strategi Belajar Efektif untuk Siswa SMA",
    excerpt: "Tingkatkan produktivitas belajarmu dengan strategi yang terbukti efektif.",
    content: `
      <h2>Buat Jadwal Belajar</h2>
      <p>Susun jadwal belajar yang realistis dan konsisten. Alokasikan waktu untuk setiap mata pelajaran berdasarkan tingkat kesulitannya.</p>
      
      <h2>Teknik Pomodoro</h2>
      <p>Gunakan teknik Pomodoro: belajar fokus selama 25 menit, lalu istirahat 5 menit. Ulangi beberapa kali dan ambil istirahat lebih panjang.</p>
      
      <h2>Active Learning</h2>
      <p>Jangan hanya membaca pasif. Buat catatan, mind map, atau mengajarkan konsep ke orang lain untuk pemahaman yang lebih dalam.</p>
      
      <h2>Manfaatkan Teknologi</h2>
      <p>Gunakan aplikasi belajar dan sumber daya online untuk mendukung pembelajaran konvensionalmu.</p>
    `,
    category: "Pendidikan",
    date: "2 Januari 2024",
    readTime: "5 menit",
    image: studyStrategyImg,
    author: "Tim Ambivers"
  },
  {
    id: 6,
    title: "Membangun Portofolio untuk Pendaftaran Universitas",
    excerpt: "Pelajari cara membuat portofolio yang menarik dan menonjol.",
    content: `
      <h2>Pentingnya Portofolio</h2>
      <p>Portofolio yang baik dapat membedakanmu dari kandidat lain dalam proses seleksi universitas. Ini menunjukkan pencapaian dan komitmenmu.</p>
      
      <h2>Dokumentasi Prestasi</h2>
      <p>Kumpulkan sertifikat, penghargaan, dan bukti pencapaianmu. Susun secara rapi dan sistematis.</p>
      
      <h2>Tunjukkan Leadership</h2>
      <p>Sertakan pengalaman kepemimpinanmu di organisasi sekolah atau kegiatan ekstrakurikuler.</p>
      
      <h2>Project dan Karya</h2>
      <p>Masukkan project atau karya terbaikmu yang relevan dengan jurusan yang kamu inginkan.</p>
    `,
    category: "Karir",
    date: "29 Desember 2023",
    readTime: "6 menit",
    image: portfolioImg,
    author: "Tim Ambivers"
  },
  {
    id: 7,
    title: "Mengembangkan Soft Skills di Era Digital",
    excerpt: "Soft skills seperti komunikasi dan kolaborasi menjadi semakin penting.",
    content: `
      <h2>Komunikasi Efektif</h2>
      <p>Belajar berkomunikasi dengan jelas dan persuasif, baik secara verbal maupun tertulis. Ini penting di era digital di mana banyak komunikasi terjadi online.</p>
      
      <h2>Kolaborasi Tim</h2>
      <p>Kembangkan kemampuan bekerja dalam tim, termasuk menggunakan tools kolaborasi digital seperti Slack, Trello, atau Google Workspace.</p>
      
      <h2>Critical Thinking</h2>
      <p>Latih kemampuan berpikir kritis untuk menganalisis informasi dan membuat keputusan yang tepat di tengah banjir informasi digital.</p>
      
      <h2>Adaptabilitas</h2>
      <p>Dunia digital terus berubah. Kemampuan untuk cepat beradaptasi dengan teknologi dan metode kerja baru sangat berharga.</p>
    `,
    category: "Pengembangan Diri",
    date: "27 Desember 2023",
    readTime: "5 menit",
    image: softSkillsImg,
    author: "Tim Ambivers"
  },
  {
    id: 8,
    title: "Peluang Karir di Bidang Teknologi",
    excerpt: "Eksplorasi berbagai peluang karir menarik di industri teknologi.",
    content: `
      <h2>Software Developer</h2>
      <p>Salah satu karir paling diminati dengan prospek gaji yang menarik. Pelajari bahasa pemrograman dan development frameworks.</p>
      
      <h2>Data Scientist</h2>
      <p>Profesi yang menggabungkan matematika, statistik, dan programming untuk menganalisis data dan memberikan insight bisnis.</p>
      
      <h2>UI/UX Designer</h2>
      <p>Merancang pengalaman pengguna yang intuitif dan menarik untuk aplikasi dan website.</p>
      
      <h2>Persiapan Karir</h2>
      <p>Mulai belajar skill teknis sejak dini, buat project portfolio, dan ikuti bootcamp atau kursus online untuk memperdalam kemampuan.</p>
    `,
    category: "Karir",
    date: "23 Desember 2023",
    readTime: "6 menit",
    image: techCareerImg,
    author: "Tim Ambivers"
  },
  {
    id: 9,
    title: "Tips Mendapatkan Beasiswa Dalam Negeri",
    excerpt: "Raih impianmu kuliah dengan beasiswa dalam negeri.",
    content: `
      <h2>Beasiswa Pemerintah</h2>
      <p>Pemerintah Indonesia menyediakan berbagai program beasiswa seperti Bidikmisi (sekarang KIP Kuliah) untuk siswa berprestasi dari keluarga kurang mampu.</p>
      
      <h2>Beasiswa Universitas</h2>
      <p>Banyak universitas swasta dan negeri menawarkan beasiswa berdasarkan prestasi akademik atau non-akademik.</p>
      
      <h2>Beasiswa Swasta</h2>
      <p>Perusahaan dan yayasan swasta juga banyak yang memberikan beasiswa. Riset dan apply ke berbagai program beasiswa.</p>
      
      <h2>Tips Sukses</h2>
      <p>Siapkan dokumen dengan lengkap, tulis essay yang menarik dan jujur, dan tunjukkan komitmenmu untuk berkontribusi ke masyarakat.</p>
    `,
    category: "Beasiswa",
    date: "20 Desember 2023",
    readTime: "5 menit",
    image: domesticScholarshipImg,
    author: "Tim Ambivers"
  }
];

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:id");
  const blogId = params?.id ? parseInt(params.id) : null;
  const post = blogPosts.find(p => p.id === blogId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog tidak ditemukan</h1>
          <Link href="/blog" data-testid="link-back-to-blog-fallback">
            <Button data-testid="button-back-to-blog">Kembali ke Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" data-testid="link-back-to-blog">
            <Button variant="ghost" className="mb-6 -ml-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Blog
            </Button>
          </Link>

          <div className="mb-6">
            <span className="bg-[#FFC700] text-black text-sm font-semibold px-4 py-2 rounded-md" data-testid="text-category">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-title">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2" data-testid="text-author">
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2" data-testid="text-date">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2" data-testid="text-readtime">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <div className="w-full rounded-xl overflow-hidden mb-8 bg-white">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-contain"
                data-testid="img-featured"
              />
            </AspectRatio>
          </div>

          <div 
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
            data-testid="text-content"
          />

          {post.documentationImages && post.documentationImages.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dokumentasi Kegiatan</h2>
              <p className="text-gray-600 mb-6">
                Berikut adalah dokumentasi kegiatan {post.title}:
              </p>
              <div className="grid grid-cols-1 gap-6">
                {post.documentationImages.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Dokumentasi ${post.title} - ${index + 1}`}
                      className="w-full h-auto"
                      data-testid={`img-documentation-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Bagikan artikel ini:</span>
              <Button variant="outline" size="sm" data-testid="button-share">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8" data-testid="text-related-title">
              Artikel Terkait
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} data-testid={`link-related-${relatedPost.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 group cursor-pointer" data-testid={`card-related-${relatedPost.id}`}>
                    <div className="bg-white">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          data-testid={`img-related-${relatedPost.id}`}
                        />
                      </AspectRatio>
                    </div>
                    
                    <CardContent className="p-6">
                      <span className="text-xs font-semibold text-gray-600 mb-2 block" data-testid={`text-related-category-${relatedPost.id}`}>
                        {relatedPost.category}
                      </span>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#FFC700] transition-colors" data-testid={`text-related-title-${relatedPost.id}`}>
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm line-clamp-2" data-testid={`text-related-excerpt-${relatedPost.id}`}>
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

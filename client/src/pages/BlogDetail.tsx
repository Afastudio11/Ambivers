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
import mentoringImg from "@assets/generated_images/Mentoring_program_illustration_c7797291.png";
import studyStrategyImg from "@assets/generated_images/Effective_study_strategies_illustration_84643aa3.png";
import portfolioImg from "@assets/generated_images/University_portfolio_building_illustration_bec1a407.png";
import softSkillsImg from "@assets/generated_images/Digital_soft_skills_development_7fe69c97.png";
import techCareerImg from "@assets/generated_images/Technology_career_opportunities_illustration_46d098fa.png";
import domesticScholarshipImg from "@assets/generated_images/Domestic_scholarship_success_illustration_84323294.png";

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
}

const blogPosts: BlogPost[] = [
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
    title: "Manfaat Mengikuti Program Mentoring",
    excerpt: "Temukan bagaimana program mentoring dapat membantumu mengembangkan potensi.",
    content: `
      <h2>Bimbingan Personal</h2>
      <p>Mentoring memberikan kesempatan untuk mendapatkan bimbingan personal dari seseorang yang lebih berpengalaman di bidangmu.</p>
      
      <h2>Networking</h2>
      <p>Melalui program mentoring, kamu dapat memperluas jaringan profesional yang akan sangat berguna untuk karirmu di masa depan.</p>
      
      <h2>Pengembangan Skill</h2>
      <p>Mentor dapat membantu mengidentifikasi skill apa yang perlu kamu kembangkan dan memberikan guidance untuk meningkatkannya.</p>
      
      <h2>Dukungan Motivasi</h2>
      <p>Mentor memberikan dukungan moral dan motivasi saat kamu menghadapi tantangan dalam perjalanan akademis atau karirmu.</p>
    `,
    category: "Pengembangan Diri",
    date: "5 Januari 2024",
    readTime: "4 menit",
    image: mentoringImg,
    author: "Tim Ambivers"
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
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            data-testid="text-content"
          />

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

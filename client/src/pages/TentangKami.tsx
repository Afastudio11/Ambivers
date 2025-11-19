import teamImage from "@assets/Desain tanpa judul_1763533204443.png";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import softSkillsImg from "@assets/generated_images/Digital_soft_skills_development_7fe69c97.png";
import upcycleImg from "@assets/image_1763534634658.png";
import techCareerImg from "@assets/generated_images/Technology_career_opportunities_illustration_46d098fa.png";
import studyStrategyImg from "@assets/generated_images/Effective_study_strategies_illustration_84643aa3.png";

export default function TentangKami() {
  const highlights = [
    {
      id: 10,
      title: "Bootcamp JUMPIVERS 1.0 Social Media Mastery : Mengasah Keterampilan Digital di Era Media Sosial",
      description: "Jakarta, Agustus 2025 - Ambivers Foundation berkesempatan mengadakan Bootcamp JUMPIVERS 1.0 Social Media Mastery, sebuah ruang belajar interaktif yang dirancang untuk membantu peserta memahami strategi dasar dalam pengelolaan media sosial secara komprehensif dan aplikatif.",
      excerpt: "Bootcamp JUMPIVERS 1.0 menjadi langkah nyata Ambivers Foundation dalam memberdayakan generasi muda agar mampu memanfaatkan media sosial secara lebih cerdas dan strategis.",
      date: "Agustus 2025",
      category: "Bootcamp",
      image: techCareerImg
    },
    {
      id: 11,
      title: "AFYI: Beyond The Frame — Merayakan Kreativitas dan Pemikiran Inovatif Generasi Muda",
      description: "Jakarta, 21 Desember 2024 - Ambivers Foundation berkesempatan mengadakan acara Ambivers Foundation Youth Impact (AFYI) Beyond the frame: Celebrating Ideas and Insight yang bertempat di Nutrihub Menteng Jakarta.",
      excerpt: "AFYI menjadi salah satu inisiator kegiatan offline yang bukan hanya tentang penghargaan, tetapi tentang perjalanan untuk menumbuhkan keberanian berpikir di luar batas.",
      date: "21 Desember 2024",
      category: "Seminar",
      image: studyStrategyImg
    },
    {
      id: 7,
      title: "Mengembangkan Soft Skills di Era Digital",
      description: "Di era digital, soft skills seperti komunikasi dan kolaborasi menjadi semakin penting. Pelajari cara mengembangkan kemampuan ini untuk kesuksesan karirmu.",
      excerpt: "Soft skills seperti komunikasi dan kolaborasi menjadi semakin penting di dunia kerja modern.",
      date: "27 Desember 2023",
      category: "Pengembangan Diri",
      image: softSkillsImg
    },
    {
      id: 4,
      title: "AFYI : Workshop Upcycle Magic",
      description: "Surabaya, 05 Oktober 2025 - Ambivers Foundation kembali mengadakan acara Ambivers Foundation Youth Impact atau AFYI. Kegiatan kali ini berlangsung pada tanggal 5 Oktober 2025 secara offline di Surabaya, tepatnya di Kedai Ori Manyar. Dengan mengangkat tema Upcycle Magic, kegiatan AFYI kali ini mengangkat isu terkait daur ulang sampah. Isu lingkungan, terutama persoalan sampah, kini menjadi tantangan besar yang membutuhkan langkah nyata dari berbagai pihak, termasuk generasi muda. Melihat pentingnya edukasi lingkungan yang aplikatif dan menyenangkan, Ambivers Foundation melalui program Ambivers Foundation Youth Impact (AFYI) menghadirkan kegiatan Workshop \"Upcycle Magic\", sebuah inisiatif kreatif yang mengajak peserta untuk mengubah sampah menjadi karya bernilai guna. Kegiatan yang diikuti oleh 12 peserta ini dimulai dengan sesi mini talk mengenai konsep upcycle dan pentingnya pengelolaan sampah berkelanjutan. Selanjutnya, peserta diajak untuk praktik langsung membuat kerajinan dari bahan daur ulang, dilanjutkan dengan sesi sharing dan refleksi untuk saling bertukar ide serta memperkuat semangat kreatif dan peduli lingkungan. Upcycle Magic menggabungkan pendekatan fun learning dengan praktik langsung, sehingga pembelajaran terasa menyenangkan dan bermakna. Peserta tidak hanya mendapatkan pengetahuan baru, tetapi juga menghasilkan karya unik dari bahan daur ulang. Workshop Upcycle Magic bukan sekadar kegiatan daur ulang, melainkan langkah kecil yang membawa dampak besar. Melalui kegiatan ini, Ambivers Foundation berharap semakin banyak anak muda yang sadar bahwa menjaga bumi dapat dimulai dari kreativitas — dari sampah yang diubah menjadi karya. Karena perubahan besar selalu dimulai dari tangan-tangan kecil yang peduli.",
      excerpt: "Workshop Upcycle Magic mengajak generasi muda mengubah sampah menjadi karya bernilai guna melalui pendekatan fun learning yang menyenangkan dan bermakna.",
      date: "5 Oktober 2025",
      category: "Workshop",
      image: upcycleImg
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background team image - full screen */}
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={teamImage} 
            alt="Team Ambivers" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark overlay 45% */}
        <div className="absolute inset-0 bg-black/45" />
        
        {/* Text overlay in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 lg:px-12 max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" data-testid="text-tentang-kami-title">
              Tentang Kami
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed" data-testid="text-tentang-kami-description">
              Ambivers.id merupakan platform edukasi digital yang menyediakan beragam media pembelajaran untuk mendukung pelajar dalam proses belajar dan pengembangan diri.
            </p>
          </div>
        </div>
      </section>
      {/* What we do Section */}
      <section className="py-20 px-6 lg:px-12 bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block text-primary text-sm font-semibold px-4 py-2 rounded-full bg-black" data-testid="badge-what-we-do">What we do?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-foreground" data-testid="text-what-we-do-title">
            Kami percaya setiap individu punya potensi besar untuk bertumbuh.
          </h2>
          
          <div className="space-y-6 text-lg lg:text-xl leading-relaxed text-foreground">
            <p data-testid="text-what-we-do-paragraph-1">
              Ambivers hadir sebagai ruang belajar dan pengembangan diri yang berfokus pada pendidikan dan peningkatan keterampilan.
            </p>
            
            <p data-testid="text-what-we-do-paragraph-2">
              Melalui program, pelatihan, dan pengalaman belajar yang relevan, kami membantu generasi muda menemukan arah, membangun kompetensi, dan melangkah lebih percaya diri menuju masa depan.
            </p>
          </div>
        </div>
      </section>
      {/* Highlight Program Section */}
      <section className="py-16 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" data-testid="text-highlights-title">
            Highlight Program atau Insight & Blog
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {highlights.map((item) => (
              <Link key={item.id} href={`/blog/${item.id}`} data-testid={`link-highlight-${item.id}`}>
                <Card className="hover-elevate cursor-pointer group overflow-hidden h-full flex flex-col" data-testid={`card-highlight-${item.id}`}>
                  <div className="relative bg-muted">
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-testid={`img-highlight-${item.id}`}
                      />
                    </AspectRatio>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-md shadow-md" data-testid={`text-highlight-category-${item.id}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="text-sm text-muted-foreground" data-testid={`text-highlight-date-${item.id}`}>
                        {item.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2" data-testid={`text-highlight-title-${item.id}`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1" data-testid={`text-highlight-description-${item.id}`}>
                      {item.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto hover:bg-transparent font-semibold text-sm self-start group-hover:text-primary"
                      data-testid={`button-read-${item.id}`}
                    >
                      Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/blog" data-testid="link-view-all-blog">
              <Button size="lg" data-testid="button-view-all-blog">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

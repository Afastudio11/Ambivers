import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
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
    category: "Pendidikan",
    date: "15 Januari 2024",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    author: "Tim Ambivers"
  },
  {
    id: 2,
    title: "Cara Memilih Jurusan Kuliah yang Tepat",
    excerpt: "Memilih jurusan kuliah adalah keputusan penting. Simak tips dan pertimbangan yang perlu kamu pikirkan sebelum menentukan pilihan.",
    category: "Karir",
    date: "12 Januari 2024",
    readTime: "7 menit",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    author: "Tim Ambivers"
  },
  {
    id: 3,
    title: "Beasiswa Luar Negeri: Peluang dan Persiapan",
    excerpt: "Raih kesempatan emas untuk kuliah di luar negeri dengan beasiswa. Pelajari cara mempersiapkan diri dan meningkatkan peluang diterima.",
    category: "Beasiswa",
    date: "8 Januari 2024",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    author: "Tim Ambivers"
  },
  {
    id: 4,
    title: "Manfaat Mengikuti Program Mentoring",
    excerpt: "Temukan bagaimana program mentoring dapat membantumu mengembangkan potensi dan mencapai tujuan akademis serta karir.",
    category: "Pengembangan Diri",
    date: "5 Januari 2024",
    readTime: "4 menit",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    author: "Tim Ambivers"
  },
  {
    id: 5,
    title: "Strategi Belajar Efektif untuk Siswa SMA",
    excerpt: "Tingkatkan produktivitas belajarmu dengan strategi dan teknik yang sudah terbukti efektif untuk siswa SMA.",
    category: "Pendidikan",
    date: "2 Januari 2024",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
    author: "Tim Ambivers"
  },
  {
    id: 6,
    title: "Membangun Portofolio untuk Pendaftaran Universitas",
    excerpt: "Pelajari cara membuat portofolio yang menarik dan menonjol untuk meningkatkan peluang diterima di universitas impian.",
    category: "Karir",
    date: "29 Desember 2023",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    author: "Tim Ambivers"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" data-testid="text-blog-title">
              Insight & <span className="text-[#FFC700]">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="text-blog-subtitle">
              Dapatkan wawasan, tips, dan inspirasi untuk perjalanan pendidikanmu
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200 group"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-blog-${post.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FFC700] text-black text-xs font-semibold px-3 py-1 rounded-full" data-testid={`text-category-${post.id}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1" data-testid={`text-date-${post.id}`}>
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1" data-testid={`text-readtime-${post.id}`}>
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FFC700] transition-colors" data-testid={`text-title-${post.id}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3" data-testid={`text-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-[#FFC700] hover:text-[#FFD700] hover:bg-transparent font-semibold"
                    data-testid={`button-read-${post.id}`}
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

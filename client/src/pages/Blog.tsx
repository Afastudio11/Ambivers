import { useState, useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

const categories = ["All", "Pendidikan", "Karir", "Beasiswa", "Pengembangan Diri", "Tips & Trik"];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tips Sukses Menghadapi UTBK 2024",
    excerpt: "Panduan lengkap dan strategi efektif untuk menghadapi Ujian Tulis Berbasis Komputer dengan percaya diri dan hasil maksimal. Pelajari teknik-teknik yang terbukti meningkatkan skor UTBK.",
    category: "Pendidikan",
    date: "15 Januari 2024",
    readTime: "5 menit",
    image: utbkImg,
    author: "Tim Ambivers"
  },
  {
    id: 2,
    title: "Cara Memilih Jurusan Kuliah yang Tepat",
    excerpt: "Memilih jurusan kuliah adalah keputusan penting yang akan mempengaruhi masa depanmu. Simak tips dan pertimbangan yang perlu kamu pikirkan sebelum menentukan pilihan.",
    category: "Karir",
    date: "12 Januari 2024",
    readTime: "7 menit",
    image: majorSelectionImg,
    author: "Tim Ambivers"
  },
  {
    id: 3,
    title: "Beasiswa Luar Negeri: Peluang dan Persiapan",
    excerpt: "Raih kesempatan emas untuk kuliah di luar negeri dengan beasiswa. Pelajari cara mempersiapkan diri dan meningkatkan peluang diterima.",
    category: "Beasiswa",
    date: "8 Januari 2024",
    readTime: "6 menit",
    image: studyAbroadImg,
    author: "Tim Ambivers"
  },
  {
    id: 4,
    title: "Manfaat Mengikuti Program Mentoring",
    excerpt: "Temukan bagaimana program mentoring dapat membantumu mengembangkan potensi dan mencapai tujuan akademis serta karir dengan bimbingan mentor berpengalaman.",
    category: "Pengembangan Diri",
    date: "5 Januari 2024",
    readTime: "4 menit",
    image: mentoringImg,
    author: "Tim Ambivers"
  },
  {
    id: 5,
    title: "Strategi Belajar Efektif untuk Siswa SMA",
    excerpt: "Tingkatkan produktivitas belajarmu dengan strategi dan teknik yang sudah terbukti efektif untuk siswa SMA dalam mempersiapkan ujian dan masa depan.",
    category: "Pendidikan",
    date: "2 Januari 2024",
    readTime: "5 menit",
    image: studyStrategyImg,
    author: "Tim Ambivers"
  },
  {
    id: 6,
    title: "Membangun Portofolio untuk Pendaftaran Universitas",
    excerpt: "Pelajari cara membuat portofolio yang menarik dan menonjol untuk meningkatkan peluang diterima di universitas impian dengan tips dari para ahli.",
    category: "Karir",
    date: "29 Desember 2023",
    readTime: "6 menit",
    image: portfolioImg,
    author: "Tim Ambivers"
  },
  {
    id: 7,
    title: "Mengembangkan Soft Skills di Era Digital",
    excerpt: "Di era digital, soft skills seperti komunikasi dan kolaborasi menjadi semakin penting. Pelajari cara mengembangkan kemampuan ini untuk kesuksesan karirmu.",
    category: "Pengembangan Diri",
    date: "27 Desember 2023",
    readTime: "5 menit",
    image: softSkillsImg,
    author: "Tim Ambivers"
  },
  {
    id: 8,
    title: "Peluang Karir di Bidang Teknologi",
    excerpt: "Eksplorasi berbagai peluang karir menarik di industri teknologi yang terus berkembang dan cara mempersiapkan diri untuk memasuki dunia kerja.",
    category: "Karir",
    date: "23 Desember 2023",
    readTime: "6 menit",
    image: techCareerImg,
    author: "Tim Ambivers"
  },
  {
    id: 9,
    title: "Tips Mendapatkan Beasiswa Dalam Negeri",
    excerpt: "Raih impianmu kuliah dengan beasiswa dalam negeri. Ketahui tips dan trik untuk mempersiapkan aplikasi beasiswa yang sukses.",
    category: "Beasiswa",
    date: "20 Desember 2023",
    readTime: "5 menit",
    image: domesticScholarshipImg,
    author: "Tim Ambivers"
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const topReads = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="text-latest-title">
                The Latest
              </h2>
              
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 group" data-testid="card-featured">
                <div className="relative bg-white">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      data-testid="img-featured"
                    />
                  </AspectRatio>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-md shadow-md" data-testid="text-featured-category">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#FFC700] transition-colors" data-testid="text-featured-title">
                    {featuredPost.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span data-testid="text-featured-date">{featuredPost.date}</span>
                    <span>|</span>
                    <span data-testid="text-featured-author">{featuredPost.author}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-featured-excerpt">
                    {featuredPost.excerpt}
                  </p>
                  
                  <Link href={`/blog/${featuredPost.id}`} data-testid="link-featured-read">
                    <Button 
                      className="bg-gray-900 hover:bg-[#FFC700] hover:text-black text-white transition-colors"
                      data-testid="button-featured-read"
                    >
                      Read more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="text-topreads-title">
                Top Reads
              </h2>
              
              <div className="space-y-4">
                {topReads.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} data-testid={`link-topread-${post.id}`}>
                    <Card 
                      className="overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200 group cursor-pointer"
                      data-testid={`card-topread-${post.id}`}
                    >
                      <div className="flex gap-4 p-4">
                        <div className="w-32 flex-shrink-0 rounded-lg overflow-hidden bg-white">
                          <AspectRatio ratio={16 / 9}>
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                              data-testid={`img-topread-${post.id}`}
                            />
                          </AspectRatio>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#FFC700] transition-colors" data-testid={`text-topread-title-${post.id}`}>
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span data-testid={`text-topread-date-${post.id}`}>{post.date}</span>
                            <span>|</span>
                            <span data-testid={`text-topread-author-${post.id}`}>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900" data-testid="text-categories-title">
                Browse by categories
              </h2>
              
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search blogs"
                  className="pl-10 border-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-gray-900 hover:bg-white/50"
                  }`}
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} data-testid={`link-blog-${post.id}`}>
                <Card 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 group cursor-pointer h-full flex flex-col"
                  data-testid={`card-blog-${post.id}`}
                >
                  <div className="relative bg-white">
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        data-testid={`img-blog-${post.id}`}
                      />
                    </AspectRatio>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow" data-testid={`text-category-${post.id}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span data-testid={`text-date-${post.id}`}>{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#FFC700] transition-colors" data-testid={`text-title-${post.id}`}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1" data-testid={`text-excerpt-${post.id}`}>
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-gray-900 hover:text-[#FFC700] hover:bg-transparent font-semibold text-sm self-start"
                      data-testid={`button-read-${post.id}`}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

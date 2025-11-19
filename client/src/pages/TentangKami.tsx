import teamImage from "@assets/Desain tanpa judul_1763533204443.png";
import { Card, CardContent } from "@/components/ui/card";

export default function TentangKami() {
  const highlights = [
    {
      id: 1,
      title: "Bootcamp JUMPIVERS 1.0 Social Media Mastery : Mengasah Keterampilan Digital di Era Media Sosial",
      description: "Jakarta, Agustus 2025 - Ambivers Foundation berkesempatan mengadakan Bootcamp JUMPIVERS 1.0 Social Media Mastery, sebuah ruang belajar interaktif yang dirancang untuk membantu peserta memahami strategi dasar dalam pengelolaan media sosial secara komprehensif dan aplikatif.",
      date: "Agustus 2025",
      category: "Bootcamp"
    },
    {
      id: 2,
      title: "AFYI: Beyond The Frame — Merayakan Kreativitas dan Pemikiran Inovatif Generasi Muda",
      description: "Jakarta, 21 Desember 2024 - Ambivers Foundation berkesempatan mengadakan acara Ambivers Foundation Youth Impact (AFYI) Beyond the frame: Celebrating Ideas and Insight yang bertempat di Nutrihub Menteng Jakarta.",
      date: "21 Desember 2024",
      category: "Seminar"
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
      <section className="py-16 px-6 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center" data-testid="text-what-we-do-title">
            What we do?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p data-testid="text-what-we-do-paragraph-1">
              Kami percaya setiap individu punya potensi besar untuk bertumbuh.
            </p>
            
            <p data-testid="text-what-we-do-paragraph-2">
              Ambivers hadir sebagai ruang belajar dan pengembangan diri yang berfokus pada pendidikan dan peningkatan keterampilan.
            </p>
            
            <p data-testid="text-what-we-do-paragraph-3">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item) => (
              <Card key={item.id} className="hover-elevate" data-testid={`card-highlight-${item.id}`}>
                <CardContent className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="text-sm text-muted-foreground" data-testid={`text-highlight-date-${item.id}`}>
                      {item.date}
                    </span>
                    <span className="text-sm font-medium text-primary" data-testid={`text-highlight-category-${item.id}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 leading-snug" data-testid={`text-highlight-title-${item.id}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-highlight-description-${item.id}`}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

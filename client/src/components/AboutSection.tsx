import aboutPhoto1 from "@assets/generated_images/About_section_grid_photo_1_9d542f8e.png";
import aboutPhoto2 from "@assets/generated_images/About_section_grid_photo_2_5f9c4eca.png";
import aboutPhoto3 from "@assets/generated_images/About_section_grid_photo_3_a4561e16.png";
import aboutPhoto4 from "@assets/generated_images/About_section_grid_photo_4_73076f62.png";

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
              Ambivers didirikan pada tahun <span className="text-primary">2020</span> dengan fokus pada bidang pendidikan dan pengembangan sumber daya manusia
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-about-impact">
              Ambivers telah memberikan dampak kepada <span className="font-bold text-foreground">50.000+ pelajar</span> di seluruh Indonesia
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-md overflow-hidden">
              <img src={aboutPhoto1} alt="Ambivers team" className="w-full h-full object-cover" data-testid="img-about-1" />
            </div>
            <div className="aspect-square rounded-md overflow-hidden">
              <img src={aboutPhoto2} alt="Ambivers activities" className="w-full h-full object-cover" data-testid="img-about-2" />
            </div>
            <div className="aspect-square rounded-md overflow-hidden">
              <img src={aboutPhoto3} alt="Ambivers students" className="w-full h-full object-cover" data-testid="img-about-3" />
            </div>
            <div className="aspect-square rounded-md overflow-hidden">
              <img src={aboutPhoto4} alt="Ambivers learning" className="w-full h-full object-cover" data-testid="img-about-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

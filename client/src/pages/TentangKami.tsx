import teamImage from "@assets/Ahmad Fathanah Porto(1)_1763532577249.png";

export default function TentangKami() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 lg:py-48 overflow-hidden min-h-[700px] lg:min-h-[800px]">
        {/* Background team image - full without cropping */}
        <div 
          className="absolute inset-0 flex items-center justify-center p-8 lg:p-12"
        >
          <img 
            src={teamImage} 
            alt="Team Ambivers" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8" data-testid="text-tentang-kami-title">
            Tentang kami
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto" data-testid="text-tentang-kami-description">
            Ambivers.id merupakan platform edukasi digital yang menyediakan beragam media pembelajaran untuk mendukung pelajar dalam proses belajar dan pengembangan diri.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ambivers didirikan pada tahun 2020 dengan fokus pada bidang pendidikan dan pengembangan sumber daya manusia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sejak didirikan, Ambivers telah berkomitmen untuk memberikan dampak positif bagi lebih dari 50.000 pelajar di seluruh Indonesia, membantu mereka melangkah lebih dekat menuju impian dan membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

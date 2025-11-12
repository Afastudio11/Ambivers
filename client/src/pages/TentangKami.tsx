export default function TentangKami() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-32 overflow-hidden bg-[#FFC700] dark:bg-[#FFC700]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px)`
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground dark:text-gray-900 mb-8" data-testid="text-tentang-kami-title">
            Tentang kami
          </h1>
          <p className="text-xl lg:text-2xl text-foreground/80 dark:text-gray-800 leading-relaxed" data-testid="text-tentang-kami-description">
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

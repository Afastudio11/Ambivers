export default function WhatWeDo() {
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
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground dark:text-gray-900 mb-8" data-testid="text-what-we-do-title">
            What we do?
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-8 text-center">
            <p className="text-2xl font-semibold leading-relaxed" data-testid="text-belief">
              Kami percaya setiap individu punya potensi besar untuk bertumbuh.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-presence">
              Ambivers hadir sebagai ruang belajar dan pengembangan diri yang berfokus pada pendidikan dan peningkatan keterampilan.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-mission">
              Melalui program, pelatihan, dan pengalaman belajar yang relevan, kami membantu generasi muda menemukan arah, membangun kompetensi, dan melangkah lebih percaya diri menuju masa depan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

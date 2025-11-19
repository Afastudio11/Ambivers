export default function TentangKami() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background images grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="bg-gray-300" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1591084728795-1149f32d9866?w=400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8" data-testid="text-tentang-kami-title">
            Tentang kami
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed" data-testid="text-tentang-kami-description">
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

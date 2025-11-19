import teamImage from "@assets/Ahmad Fathanah Porto(1)_1763532577249.png";

export default function TentangKami() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background team image - full screen */}
        <div className="w-full h-full flex items-center justify-center p-4">
          <img 
            src={teamImage} 
            alt="Team Ambivers" 
            className="w-full h-auto max-h-full object-contain"
          />
        </div>
        
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
    </div>
  );
}

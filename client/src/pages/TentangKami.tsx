import teamImage from "@assets/Ahmad Fathanah Porto(1)_1763532577249.png";

export default function TentangKami() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background team image - full screen */}
        <img 
          src={teamImage} 
          alt="Team Ambivers" 
          className="w-full h-full object-contain"
        />
      </section>
    </div>
  );
}

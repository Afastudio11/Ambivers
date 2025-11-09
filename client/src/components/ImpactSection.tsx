import indonesiaMapImage from "@assets/Document@3x_1762520850335.png";

export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-impact-title">
            Ambivers Telah Memberikan Dampak Kepada{" "}
            <span className="text-[#FFC700]">50.000+ Pelajar</span>{" "}
            Di Seluruh Indonesia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-impact-description">
            Dari Sabang Sampai Merauke, Kami Berkomitmen Untuk Membantu Pelajar Indonesia Mencapai Impian Mereka Melalui Pendidikan Berkualitas Dan Bimbingan Yang Tepat.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <img 
                src={indonesiaMapImage} 
                alt="Peta Indonesia"
                className="w-full h-auto"
                data-testid="map-indonesia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

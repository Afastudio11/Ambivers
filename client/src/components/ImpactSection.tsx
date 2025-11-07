import indonesiaMapImage from "@assets/Document_1762520193879.png";

export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-impact-title">
            Ambivers telah memberikan dampak kepada{" "}
            <span className="text-[#FFC700]">50.000+ pelajar</span>{" "}
            di seluruh Indonesia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-impact-description">
            Dari Sabang sampai Merauke, kami berkomitmen untuk membantu pelajar Indonesia mencapai impian mereka melalui pendidikan berkualitas dan bimbingan yang tepat.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <img 
              src={indonesiaMapImage} 
              alt="Peta Indonesia"
              className="w-full max-w-4xl h-auto"
              data-testid="map-indonesia"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md" data-testid="stat-students">
              <div className="text-4xl font-bold text-[#FFC700] mb-2">50.000+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Pelajar Terdampak</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md" data-testid="stat-provinces">
              <div className="text-4xl font-bold text-[#FFC700] mb-2">34</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Provinsi di Indonesia</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md" data-testid="stat-cities">
              <div className="text-4xl font-bold text-[#FFC700] mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Kota & Kabupaten</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

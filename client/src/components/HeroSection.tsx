import photo1 from "@assets/DSCF0315_1763550940459.jpg";

export default function HeroSection() {
  const scrollToProgram = () => {
    const element = document.getElementById("program");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FFC700] dark:bg-[#FFC700]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-900 leading-tight" data-testid="text-hero-headline">
              Bantu Raih Impianmu Jadi Nyata!
            </h1>
            <p className="text-base lg:text-lg text-gray-800 dark:text-gray-800 leading-relaxed" data-testid="text-hero-description">
              Ambivers telah memberikan dampak positif bagi <strong>50.000+ pelajar</strong> di seluruh Indonesia. Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProgram}
                className="rounded-md px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 bg-gray-900 dark:bg-gray-900 text-white dark:text-white hover-elevate active-elevate-2"
                data-testid="button-jelajahi"
              >
                Jelajahi program kami
              </button>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <img 
              src={photo1} 
              alt="Ambivers Program"
              className="w-full h-auto rounded-lg"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

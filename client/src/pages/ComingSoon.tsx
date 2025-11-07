import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import comingSoonImg from "@assets/generated_images/Coming_soon_page_illustration_0e62bd07.png";

export default function ComingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src={comingSoonImg} 
              alt="Coming Soon Illustration"
              className="w-full max-w-2xl mx-auto rounded-2xl"
              data-testid="img-coming-soon"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-testid="text-title">
            Segera Hadir!
          </h1>
          
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto" data-testid="text-description">
            Kami sedang mempersiapkan sesuatu yang luar biasa untuk Anda.
          </p>
          
          <p className="text-lg text-gray-500 mb-12" data-testid="text-subtitle">
            Fitur login dan registrasi akan segera tersedia. Nantikan update selanjutnya!
          </p>
          
          <Link href="/" data-testid="link-home">
            <Button 
              size="lg"
              className="bg-[#FFC700] text-black hover:bg-[#FFD700] font-semibold px-8"
              data-testid="button-back-home"
            >
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

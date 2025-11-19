import { SiInstagram, SiX, SiTiktok, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import logoImage from "@assets/logo-ambivers.png";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img 
              src={logoImage} 
              alt="Ambivers" 
              className="h-10 w-auto object-contain mb-4"
              data-testid="img-logo-footer"
            />
            <p className="text-sm text-gray-600 mt-4" data-testid="text-footer-company">
              PT Ambivers Indonesia Group
            </p>
            <p className="text-sm text-gray-600 mt-4" data-testid="text-footer-address">
              Jl. Raya Pajajaran No.39, RT.04/RW.06<br />
              Babakan, Kecamatan Bogor Tengah<br />
              Kota Bogor, Jawa Barat 16128
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#program" className="text-sm text-gray-600 hover:text-[#FFC700] transition-colors" data-testid="link-footer-program">
                  Program
                </Link>
              </li>
              <li>
                <Link href="#tentang-kami" className="text-sm text-gray-600 hover:text-[#FFC700] transition-colors" data-testid="link-footer-tentang-kami">
                  Tentang kami
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-[#FFC700] transition-colors" data-testid="link-footer-blog">
                  Insight & blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Kemitraan</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://docs.google.com/forms/d/1hXOxbFtEDLw2B9FnsXQB-3h_QVnmWWtRC-p30t-RV-I/edit?hl=id"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-600 hover:text-[#FFC700] transition-colors" 
                  data-testid="link-footer-partnership"
                >
                  Partnership with us
                </a>
              </li>
              <li>
                <Link href="/coming-soon" className="text-sm text-gray-600 hover:text-[#FFC700] transition-colors" data-testid="link-footer-daftar">
                  Daftar
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-sm text-gray-600 hover:text-[#FFC700] transition-colors" data-testid="link-footer-masuk">
                  Masuk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Hubungi kami</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/ambivers.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFC700] transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/ambiversID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFC700] transition-colors"
                data-testid="link-x"
              >
                <SiX className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@ambivers.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFC700] transition-colors"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/ambivers-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFC700] transition-colors"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:people@ambivers.site"
                className="text-gray-600 hover:text-[#FFC700] transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p data-testid="text-footer-copyright">&copy; 2024 Ambivers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

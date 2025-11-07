import { SiInstagram, SiX, SiTiktok, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import logoImage from "@assets/logo-ambivers.png";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img 
              src={logoImage} 
              alt="Ambivers" 
              className="h-10 w-auto object-contain mb-4"
              data-testid="img-logo-footer"
            />
            <p className="text-sm text-muted-foreground mt-4" data-testid="text-footer-company">
              PT Ambivers Indonesia Group
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#program" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-program">
                  Program
                </Link>
              </li>
              <li>
                <Link href="#tentang-kami" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-tentang-kami">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">
                  Insight & Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Akun</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-daftar">
                  Daftar
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-masuk">
                  Masuk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/ambivers.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/ambiversID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-x"
              >
                <SiX className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@ambivers.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/ambivers-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:people@ambivers.site"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-address">
              Jl. Raya Pajajaran No.39<br />
              Bogor, Jawa Barat 16128
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">&copy; 2024 Ambivers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

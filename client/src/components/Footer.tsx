import { SiInstagram, SiX, SiTiktok, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl">Ambivers</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-company">
              PT Ambivers Indonesia Group
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Alamat</h4>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-address">
              Jl. Raya Pajajaran No.39, RT.04/RW.06,<br />
              Babakan, Kecamatan Bogor Tengah,<br />
              Kota Bogor, Jawa Barat 16128
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ambivers.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/ambiversID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-x"
              >
                <SiX className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@ambivers.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/ambivers-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:people@ambivers.site"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">&copy; 2024 Ambivers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

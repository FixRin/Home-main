import React from "react";
import { Facebook, Instagram, MapPin, Mail } from "lucide-react";
import Logo from "../assets/LogoWhite.png";

{/* ikTok Icon */}
const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
    <path d="M41,14.35a12.39,12.39,0,0,1-7.27-2.34A12.57,12.57,0,0,1,30.27,5H24V31.18a5.18,5.18,0,1,1-5.18-5.18h.09V19.51a12.48,12.48,0,1,0,12.48,12.48V17.43A19.59,19.59,0,0,0,41,20.38V14.35Z"/>
  </svg>
);

{/* WhatsApp Icon */}
const WhatsAppIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3.5 20.5l1.2-4.2a8.5 8.5 0 1 1 3 3l-4.2 1.2z" />
    <path d="M16.2 13.8c-.3-.2-.7-.4-1-.5-.3-.1-.6-.1-.8.2l-.4.5c-.1.1-.2.2-.4.2s-.4-.1-.6-.2c-.8-.4-1.5-1.1-1.9-1.9-.1-.2-.2-.4-.2-.6s.1-.3.2-.4l.3-.4c.2-.3.3-.6.2-.9-.1-.3-.3-.7-.5-1-.3-.3-.6-.3-.9-.3h-.6c-.3 0-.6.2-.8.4l-.4.5c-.3.5-.5 1.1-.5 1.7 0 1 .4 2 1.1 2.9.9 1.2 2.1 2.2 3.4 2.8.8.4 1.7.6 2.6.6.7 0 1.3-.3 1.7-.7l.4-.4c.3-.3.4-.7.3-1.1-.1-.3-.3-.6-.6-.8z" />
  </svg>
);

{/* Social Icon Wrapper */}
type SocialButtonProps = {
  Icon: React.ComponentType<any>;
  href: string;
  label?: string;
};

const SocialIcon: React.FC<SocialButtonProps> = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="
      flex items-center justify-center
      w-10 h-10 rounded-full border border-white
      text-white hover:bg-white hover:text-[#485AE9]
      transition-colors mx-1
    "
  >
    <Icon className="w-5 h-5" />
  </a>
);

{/* FOOTER */}
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#293282] text-white p-8 sm:p-12">
      <div className="max-w-7xl mx-auto">

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-[279px] h-64 flex items-center justify-center">
              <img
                src={Logo}
                alt="Renter.az Loqo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Social Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-3">Bizimlə sosial mediada əlaqədə qalın.</h4>

            <div className="flex justify-center md:justify-start">
              <SocialIcon
                Icon={Facebook}
                href="https://www.facebook.com/share/1Fh9rK6eLc/"
                label="Facebook səhifəsi"
              />
              <SocialIcon
                Icon={Instagram}
                href="https://www.instagram.com/renter.az.official?igsh=MTBjNXJxbHRpbzExZQ=="
                label="Instagram səhifəsi"
              />
              <SocialIcon
                Icon={TikTokIcon}
                href="https://www.tiktok.com/@renter.az?_r=1&_t=ZS-91sRgZyHHvg"
                label="TikTok səhifəsi"
              />
              <SocialIcon
                Icon={WhatsAppIcon}
                href="https://wa.me/message/7IMVDJIDVIMTK1"
                label="WhatsApp əlaqəsi"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-3">Bizimlə əlaqə</h4>
            
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-2 min-w-4" size={16} />
                +994 55 264 14 69
              </p>

              <p className="flex items-center justify-center md:justify-start">
                <Mail className="mr-2 min-w-4" size={16} />
                renter@renter.az
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-4 text-sm text-right">
          <p>© 2025 Renter.az. Bütün hüquqlar qorunur.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

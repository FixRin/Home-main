import Logo from "../assets/Logo.png";
import FlagAz from "../assets/flag-az.png"; 

export default function Header() {
  return (
    <header className="w-full bg-white shadow-2xl">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <a href="#">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-auto"
          />
          </a>
        </div>

        {/* LANGUAGE  */}
        <div className="flex items-center gap-2">
          <img
            src={FlagAz}
            alt="Azərbaycan dili"
            className="w-6 h-4 rounded-[2px] object-cover"
          />
          <span className="text-sm font-medium tracking-wide">
            AZ
          </span>
        </div>
      </div>
    </header>
  );
}

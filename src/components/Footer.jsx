import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e0c18] border-t border-white/5">
      <div className="container mx-auto px-5 py-16 flex flex-col items-center gap-10">

        {/* Logo + name */}
        <div className="flex flex-col items-center gap-3">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8 object-cover opacity-80" />
          <p className="gradient-title-accent text-lg font-semibold tracking-widest uppercase">
            Maaz Khan
          </p>
          <p className="text-white/30 text-sm text-center max-w-xs">
            Full Stack Developer · Building the future, one line at a time.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-sm text-white/40">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white/80 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4f8aff]/20 to-transparent" />

        {/* Social icons */}
        <div className="flex items-center gap-8">
          {footerIconsList.map((icon, index) => (
            <a
              key={index}
              href={icon.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
            >
              <img src={icon.icon} alt={icon.name} className="md:size-8 size-6" />
            </a>
          ))}
        </div>

        <p className="text-white/20 text-xs tracking-wide">
          © 2025 Maaz Khan · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

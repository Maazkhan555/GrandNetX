import { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`w-full flex-center fixed z-50 top-0 left-0 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3" : "py-6"
      }`}
    >
      <div className="container md:px-0 px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="logo" className="md:size-10 size-8 object-cover" />
          <span className="gradient-title font-bold md:text-xl text-base tracking-wider">GRANDNETX</span>
        </a>

        {/* Desktop nav */}
        <div className="md:flex items-center gap-6 hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white/50 hover:text-white text-sm transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4f8aff] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-[#4f8aff] text-white font-semibold text-sm hover:bg-[#3a6fd8] transition-all duration-300 shadow-lg shadow-[#4f8aff]/20"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

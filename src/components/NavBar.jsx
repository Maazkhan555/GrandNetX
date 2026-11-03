import { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      {/* Scroll progress */}
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <nav
        className={`w-full fixed z-50 left-0 transition-all duration-500 ${
          scrolled
            ? "bg-[#fafafa]/95 backdrop-blur-xl border-b border-black/5 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "py-5 bg-transparent"
        }`}
        style={{ top: "var(--banner-height, 0px)" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5" onClick={handleNavClick}>
            <img src="/images/logo.png" alt="GrandNetX logo" className="size-8 object-contain" />
            <span className="font-bold text-sm tracking-wider text-black leading-none">GRANDNETX</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-black/40 hover:text-black text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm py-2 px-5">
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-black/10 bg-white/80 backdrop-blur-sm"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-5 h-px bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>

        {/* Progress bar */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/4">
            <div className="h-full bg-black/20 transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
        )}
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ paddingTop: "calc(var(--banner-height, 0px) + 72px)" }}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={handleNavClick}
                className="text-black/60 hover:text-black text-base font-medium py-3 border-b border-black/5 transition-colors duration-200 last:border-0"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="px-6 mt-4">
            <a href="#contact" onClick={handleNavClick} className="btn-primary w-full justify-center text-sm py-3">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

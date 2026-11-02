import { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState("Opening");
  const chapterMap = {
    home: "Opening", about: "Origin", founders: "Visionaries",
    services: "Capabilities", "why-us": "Difference", process: "Method",
    projects: "Work", testimonials: "Impact", contact: "Connect",
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting && chapterMap[e.target.id]) setActiveChapter(chapterMap[e.target.id]);
      }),
      { threshold: 0.4 }
    );
    Object.keys(chapterMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <div className={`w-full flex-center fixed z-50 left-0 transition-all duration-500 ${
        scrolled
          ? "bg-[#fafafa]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "py-6 bg-transparent"
      }`}
        style={{ top: "var(--banner-height, 0px)" }}
      >
        <div className="container md:px-0 px-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="logo" className="md:size-9 size-8 object-cover" />
            <div className="flex flex-col">
              <span className="font-bold md:text-base text-sm tracking-wider text-black dark:text-white leading-none">GRANDNETX</span>
              {scrolled && (
                <span className="text-black/25 dark:text-white/25 text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5">
                  {activeChapter}
                </span>
              )}
            </div>
          </a>

          {/* Nav links */}
          <div className="md:flex items-center gap-6 hidden">
            {navItems.map((item, i) => (
              <a key={i} href={item.href}
                className="text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white text-sm font-medium transition-colors duration-200 relative group">
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black dark:bg-white group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a href="#contact" className="btn-primary text-sm py-2.5 px-6">
              Get a Quote
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3" />
        </div>

        {/* Progress bar */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/4 dark:bg-white/4">
            <div className="h-full bg-black/20 dark:bg-white/20 transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;

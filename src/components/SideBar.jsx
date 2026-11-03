import { useState } from "react";
import { navItems } from "../constants";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        className="fixed z-[200] top-5 right-5 w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl border border-black/10 bg-white/90 backdrop-blur-sm shadow-sm"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        style={{ top: "calc(var(--banner-height, 0px) + 12px)" }}
      >
        <span className="block w-5 h-px bg-black" />
        <span className="block w-5 h-px bg-black" />
        <span className="block w-3.5 h-px bg-black self-start ml-[5px]" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[300] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[400] h-full w-[75vw] max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5"
          style={{ paddingTop: "calc(var(--banner-height, 0px) + 20px)" }}>
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="GrandNetX" className="w-7 h-7 object-contain" />
            <span className="font-bold text-sm tracking-wider text-black">GRANDNETX</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg border border-black/10 flex items-center justify-center text-black/40 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-black/60 hover:text-black hover:bg-black/4 font-medium text-base transition-all duration-200"
            >
              {item.name}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-black/20">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-4 pb-8">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full justify-center text-sm py-3.5"
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

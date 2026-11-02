import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">

      {/* CTA Banner */}
      <div className="border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-5 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative z-10">
          <div>
            <div className="chapter-marker mb-4">
              <span className="chapter-marker-line" style={{ background: "rgba(255,255,255,0.2)" }} />
              <span className="chapter-marker-text" style={{ color: "rgba(255,255,255,0.3)" }}>Ready to start?</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Let&apos;s build something<br />
              <span className="text-white/25">extraordinary together.</span>
            </h2>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 active:scale-[0.98] transition-all duration-300"
            >
              Start a Project
            </a>
            <a
              href="https://wa.me/923103581426"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full border border-white/15 text-white/60 font-semibold text-sm hover:border-white/40 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/logo.png" alt="logo" className="w-8 h-8 object-cover opacity-90" />
            <span className="font-bold text-base tracking-wider text-white">GRANDNETX</span>
          </div>
          <p className="text-white/28 text-sm leading-relaxed mb-6">
            Full-service IT company delivering software, AI, design, marketing, and cloud solutions globally.
          </p>
          <div className="flex items-center gap-2.5">
            {footerIconsList.map((icon, i) => (
              <a
                key={i}
                href={icon.href || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center hover:border-white/25 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
              >
                <img src={icon.icon} alt={icon.name} className="w-4 h-4 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white/30 font-semibold text-xs mb-5 tracking-widest uppercase">Services</h4>
          <ul className="flex flex-col gap-3">
            {["Software Development", "AI & Machine Learning", "Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing"].map((s) => (
              <li key={s}>
                <a href="#services" className="footer-link text-white/35 text-sm hover:text-white/80 transition-colors duration-200">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white/30 font-semibold text-xs mb-5 tracking-widest uppercase">Company</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "About Us", href: "#about" },
              { label: "Our Founders", href: "#founders" },
              { label: "How We Work", href: "#process" },
              { label: "Projects", href: "#projects" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer-link text-white/35 text-sm hover:text-white/80 transition-colors duration-200">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white/30 font-semibold text-xs mb-5 tracking-widest uppercase">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="https://wa.me/923103581426" target="_blank" rel="noreferrer"
                className="footer-link text-white/35 text-sm hover:text-white/80 transition-colors">
                +92 310 3581426
              </a>
            </li>
            <li>
              <span className="text-white/35 text-sm">contact@grandnetx.com</span>
            </li>
            <li>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/35 text-sm">Available Worldwide</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/18 text-xs">© 2025 GrandNetX. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white/15" />
            <p className="text-white/18 text-xs">Built with passion by the GrandNetX team.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

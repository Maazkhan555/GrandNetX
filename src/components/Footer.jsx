import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/5">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-5 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="gradient-title text-3xl md:text-4xl font-bold mb-2">
              Ready to build something great?
            </h2>
            <p className="text-white/40 text-sm">
              Let&apos;s turn your idea into a real product. Free consultation, no commitment.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-[#4f8aff] text-white font-semibold text-sm hover:bg-[#3a6fd8] transition-all duration-300"
            >
              Start a Project
            </a>
            <a
              href="https://wa.me/923103581426"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="logo" className="w-8 h-8 object-cover" />
            <span className="gradient-title font-bold text-xl tracking-wider">GRANDNETX</span>
          </div>
          <p className="text-white/30 text-sm leading-relaxed mb-6">
            Full-service IT company delivering software, AI, design, marketing, and cloud solutions globally.
          </p>
          <div className="flex items-center gap-4">
            {footerIconsList.map((icon, i) => (
              <a key={i} href={icon.href || "#"} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                <img src={icon.icon} alt={icon.name} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Services</h4>
          <ul className="flex flex-col gap-3">
            {["Software Development", "AI & Machine Learning", "Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/30 text-sm hover:text-white/70 transition-colors duration-200">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Company</h4>
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
                <a href={l.href} className="text-white/30 text-sm hover:text-white/70 transition-colors duration-200">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#4f8aff] mt-0.5 flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="https://wa.me/923103581426" target="_blank" rel="noreferrer" className="text-white/30 text-sm hover:text-white/70 transition-colors">+92 310 3581426</a>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#4f8aff] mt-0.5 flex-shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="text-white/30 text-sm">contact@grandnetx.com</span>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#4f8aff] mt-0.5 flex-shrink-0">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="text-white/30 text-sm">Available Worldwide</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© 2025 GrandNetX. All rights reserved.</p>
          <p className="text-white/20 text-xs">Built with passion by the GrandNetX team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

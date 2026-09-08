import { navItems } from "../constants";

const NavBar = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex-center fixed z-50 top-0 left-0 md:px-0 px-5">
      <div className="container md:my-8 my-5 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="logo"
          className="md:size-11 size-9 object-cover object-center"
        />

        {/* Nav links */}
        <div className="md:flex items-center gap-8 hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative text-white/50 hover:text-white text-sm tracking-wide transition-colors duration-300
                after:absolute after:bottom-0 after:left-0 after:h-px after:w-full
                after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100
                after:bg-[#4f8aff] after:transition-transform after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="md:flex items-center gap-3 hidden">
          <a
            href="/My-Resume.pdf"
            download
            className="text-sm text-white/70 hover:text-white px-5 py-2 rounded-full
              border border-white/10 hover:border-[#4f8aff]/50
              bg-white/5 hover:bg-[#4f8aff]/10
              transition-all duration-300 tracking-wide"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="text-sm text-[#05030f] font-semibold px-5 py-2 rounded-full
              bg-gradient-to-r from-[#4f8aff] to-[#00e5ff]
              hover:opacity-90 active:scale-95
              transition-all duration-300 tracking-wide
              shadow-[0_0_20px_rgba(79,138,255,0.35)]"
          >
            Hire Me
          </a>
        </div>

      </div>
    </div>
  );
};

export default NavBar;

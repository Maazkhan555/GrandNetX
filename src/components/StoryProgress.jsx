import { useEffect, useState } from "react";

const chapters = [
  { id: "home", label: "Opening" },
  { id: "about", label: "Origin" },
  { id: "founders", label: "Visionaries" },
  { id: "services", label: "Capabilities" },
  { id: "why-us", label: "Difference" },
  { id: "process", label: "Method" },
  { id: "projects", label: "Work" },
  { id: "pricing", label: "Investment" },
  { id: "testimonials", label: "Impact" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Connect" },
];

const StoryProgress = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    const attach = () => {
      chapters.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    };

    // Attach immediately, then retry after lazy sections mount
    attach();
    const t1 = setTimeout(attach, 500);
    const t2 = setTimeout(attach, 1500);

    // Also watch for new sections added by Suspense
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <nav className="chapter-nav hidden md:flex" aria-label="Story chapters">
      {chapters.map((ch) => (
        <button
          key={ch.id}
          className={`chapter-dot ${active === ch.id ? "active" : ""}`}
          onClick={() => document.getElementById(ch.id)?.scrollIntoView({ behavior: "smooth" })}
          aria-label={ch.label}
        >
          <span className="chapter-dot-label">{ch.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default StoryProgress;

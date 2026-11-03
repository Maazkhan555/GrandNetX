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
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let current = "home";
      for (const { id } of chapters) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
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

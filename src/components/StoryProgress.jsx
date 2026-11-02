import { useEffect, useState } from "react";

const chapters = [
  { id: "home", label: "Opening" },
  { id: "about", label: "Origin" },
  { id: "founders", label: "Visionaries" },
  { id: "services", label: "Capabilities" },
  { id: "why-us", label: "Difference" },
  { id: "process", label: "Method" },
  { id: "projects", label: "Work" },
  { id: "testimonials", label: "Impact" },
  { id: "contact", label: "Connect" },
];

const StoryProgress = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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

import { useEffect, useState, lazy, Suspense } from "react";

const HeroExperience = lazy(() => import("../components/HeroExperience"));

const words = ["INNOVATIVE", "INTELLIGENT", "SCALABLE", "POWERFUL", "UNSTOPPABLE"];

const tickerItems = [
  "Software Development", "AI & Machine Learning", "Web Development",
  "Mobile Apps", "UI/UX Design", "Digital Marketing", "Cloud & DevOps",
  "Cybersecurity", "Data Analytics", "Branding", "Automation",
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section id="home" className="w-screen h-dvh overflow-hidden relative bg-[#fafafa] noise">

      {/* Grid */}
      <div className="absolute inset-0 z-0 hero-grid pointer-events-none" />

      {/* Spheres */}
      <div className="gradient-sphere sphere-1 absolute" />
      <div className="gradient-sphere sphere-2 absolute" />

      {/* GRANDNETX — behind 3D model */}
      <div className="absolute top-0 left-0 z-0 w-full md:px-16 px-5 md:pt-36 pt-28 pointer-events-none">
        <h1 className="cinematic-title animate-fade-up" style={{ animationDelay: "0.15s" }}>
          GRANDNETX
        </h1>
      </div>

      {/* 3D model — lazy loaded */}
      <div className="absolute inset-0 z-[1]">
        <Suspense fallback={null}>
          <HeroExperience />
        </Suspense>
      </div>

      {/* Fades */}
      <div className="hero-fade-top absolute top-0 left-0 w-full h-64 z-[2] bg-gradient-to-b from-[#fafafa] via-[#fafafa]/70 to-transparent pointer-events-none" />
      <div className="hero-fade-bottom absolute bottom-0 left-0 w-full h-96 z-[2] bg-gradient-to-t from-[#fafafa] via-[#fafafa]/80 to-transparent pointer-events-none" />
      <div className="hero-fade-left absolute top-0 left-0 w-2/5 h-full z-[2] bg-gradient-to-r from-[#fafafa]/85 to-transparent pointer-events-none hidden md:block" />

      {/* UI OVERLAY */}
      <div className="absolute top-0 left-0 z-[10] w-full md:px-16 px-5 md:pt-36 pt-28">

        {/* Chapter marker */}
        <div className="chapter-marker animate-fade-in">
          <span className="chapter-marker-line" />
          <span className="chapter-marker-text">Chapter I — The Opening</span>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/8 bg-white/80 backdrop-blur-md mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          <span className="text-black/45 text-xs tracking-widest uppercase font-medium">Open for Projects — Let&apos;s Build Together</span>
        </div>

        {/* Typewriter */}
        <div className="md:mt-[7.5rem] mt-[4.5rem] animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <div className="flex items-center gap-3">
            <h1 className="cinematic-title text-black/75 min-w-[2ch]">{displayed}</h1>
            <span className="cinematic-title text-black/20 animate-blink">|</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-0 left-0 z-[10] w-full md:px-16 px-5 md:pb-24 pb-20">
        <div className="flex justify-between items-end gap-6">
          <div className="max-w-lg animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <p className="text-black/40 md:text-lg text-sm leading-relaxed mb-6">
              We build software, apps, AI systems, and digital brands.<br />
              From idea to launch — everything under one roof.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="#services" className="btn-primary hero-btn-primary">
                Explore Services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex flex-col items-end gap-4 flex-shrink-0">
            <div className="cinematic-title-ghost text-right" style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}>
              IT SOLUTIONS
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-black/20 text-xs tracking-widest uppercase">Scroll to explore</span>
              <div className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* TICKER STRIP */}
      <div className="hero-ticker absolute bottom-0 left-0 right-0 z-[3] border-t border-black/5 bg-white/60 backdrop-blur-sm py-2.5 overflow-hidden">
        <div className="story-ticker">
          <div className="story-ticker-inner">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6 text-xs tracking-widest uppercase text-black/30 font-medium">
                {item}
                <span className="w-1 h-1 rounded-full bg-black/15 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

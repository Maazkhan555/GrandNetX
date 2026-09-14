import { useEffect, useState } from "react";
import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";

const words = ["INNOVATIVE", "INTELLIGENT", "SCALABLE", "POWERFUL"];

const floatingBadges = [
  { label: "AI Integration", color: "#a855f7", delay: "0s" },
  { label: "Mobile Apps", color: "#4f8aff", delay: "0.4s" },
  { label: "Web Development", color: "#00e5ff", delay: "0.8s" },
  { label: "UI/UX Design", color: "#f472b6", delay: "1.2s" },
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50"
    >
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />

      {/* Grid background */}
      <div className="absolute inset-0 z-0 hero-grid opacity-20 pointer-events-none" />

      {/* 3D model — full section */}
      <div className="absolute inset-0 z-[1]">
        <HeroExperience />
      </div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-72 z-[2] bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-96 z-[2] bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

      {/* Left gradient — keeps left text readable */}
      <div className="absolute top-0 left-0 w-1/3 h-full z-[2] bg-gradient-to-r from-black/60 to-transparent pointer-events-none hidden md:block" />

      {/* ── TOP CONTENT ── */}
      <div className="absolute top-0 left-0 z-[10] w-full md:px-16 px-5 md:pt-36 pt-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4f8aff]/30 bg-black/50 backdrop-blur-md mb-6">
          <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="text-white/60 text-xs tracking-widest uppercase">Open for Projects — Let&apos;s Build Together</span>
        </div>

        {/* Main heading */}
        <h1 className="font-bold md:text-[7rem] text-5xl gradient-title leading-none tracking-tight">
          GRANDNETX
        </h1>

        {/* Typewriter line */}
        <div className="flex items-center gap-3 md:mt-2 mt-1">
          <h1 className="font-bold md:text-[7rem] text-5xl leading-none tracking-tight text-white/90">
            {displayed}
          </h1>
          <span className="md:text-[7rem] text-5xl font-bold text-[#4f8aff] leading-none animate-pulse">|</span>
        </div>
      </div>

      {/* ── FLOATING SERVICE BADGES (desktop only) ── */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 z-[10] hidden md:flex flex-col gap-3">
        {floatingBadges.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full border bg-black/50 backdrop-blur-md hero-float"
            style={{ borderColor: `${b.color}40`, animationDelay: b.delay }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: b.color }} />
            <span className="text-white/70 text-xs font-medium">{b.label}</span>
          </div>
        ))}
      </div>

      {/* ── BOTTOM CONTENT ── */}
      <div className="absolute bottom-0 left-0 z-[10] w-full md:px-16 px-5 md:pb-16 pb-10">
        <div className="flex justify-between items-end gap-6">

          {/* Left — tagline + buttons */}
          <div className="max-w-lg">
            <p className="text-white/50 md:text-lg text-sm leading-relaxed mb-6">
              We build software, apps, AI systems, and digital brands.<br />
              From idea to launch — everything under one roof.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="#services"
                className="hero-btn-primary px-7 py-3 rounded-full bg-[#4f8aff] text-white font-semibold text-sm transition-all duration-300"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:border-white/50 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Get a Free Quote →
              </a>
            </div>
          </div>

          {/* Right — IT SOLUTIONS + scroll */}
          <div className="flex flex-col items-end gap-4 flex-shrink-0">
            <h1 className="font-bold md:text-[5rem] text-3xl leading-none text-white/20 tracking-tight hidden md:block">
              IT SOLUTIONS
            </h1>
            <div className="flex flex-col items-center gap-1">
              <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
              <img src="images/arrowdown.svg" alt="scroll" className="size-5 animate-bounce opacity-20" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;

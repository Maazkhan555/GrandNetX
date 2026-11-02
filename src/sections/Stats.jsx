import { useEffect, useRef, useState } from "react";
import GradientSpheres from "../components/GradientSpheres";
import { statsList } from "../constants";

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, "")) || 0;
    if (num === 0) { setCount(target); return; }
    const step = Math.ceil(num / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      setCount(current);
      if (current >= num) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
};

const StatCard = ({ stat, index, visible }) => {
  const suffix = stat.number.replace(/[0-9]/g, "");
  const count = useCountUp(stat.number, 1800 + index * 200, visible);
  return (
    <div className="stat-card rounded-2xl p-6" style={{ transitionDelay: `${index * 0.1}s` }}>
      <h3 className="stat-number text-black md:text-5xl text-4xl font-bold">
        {typeof count === "number" ? count + suffix : stat.number}
      </h3>
      <p className="stat-label text-black/35 text-sm mt-2 font-medium">{stat.label}</p>
    </div>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full relative md:px-0 px-5 overflow-hidden bg-[#fafafa] py-24 md:py-32" ref={sectionRef}>
      <GradientSpheres
        sphere1Class="stats-gradient-sphere stats-sphere-1"
        sphere2Class="stats-gradient-sphere stats-sphere-2"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — image */}
          <div className="relative reveal-left">
            <div className="rounded-3xl overflow-hidden h-[520px] border border-black/6 shadow-2xl">
              <img
                src="/images/ChatGPT Image Aug 14, 2026, 03_14_49 PM.png"
                alt="GrandNetX Team"
                className="w-full h-full object-cover object-top"
                style={{ filter: "grayscale(20%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/50 text-xs tracking-widest uppercase mb-1">Full-Service IT Company</p>
                <h2 className="text-white text-3xl font-bold">GrandNetX</h2>
                <div className="mt-3 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-black rounded-2xl px-5 py-3 hidden md:block shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white/60 text-sm font-medium">Open for Projects</span>
              </div>
            </div>
            {/* Year badge */}
            <div className="absolute bottom-6 -right-4 bg-white rounded-2xl px-5 py-3 hidden md:block shadow-lg border border-black/6">
              <p className="text-black/30 text-xs tracking-widest uppercase">Est.</p>
              <p className="text-black font-bold text-xl">2022</p>
            </div>
          </div>

          {/* Right — stats + text */}
          <div className="flex flex-col gap-8 reveal-right">
            <div>
              <div className="chapter-marker">
                <span className="chapter-marker-line" />
                <span className="chapter-marker-text">By the numbers</span>
              </div>
              <h2 className="text-black md:text-5xl text-3xl font-bold leading-tight">
                Turning ideas into<br />
                <span className="text-black/20">real products</span>
              </h2>
              <p className="text-black/35 mt-4 md:text-base text-sm leading-relaxed max-w-md">
                From concept to deployment — GrandNetX builds fast, scalable, and visually stunning
                digital solutions that drive real business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {statsList.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} visible={visible} />
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#contact" className="btn-secondary">Contact Us →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

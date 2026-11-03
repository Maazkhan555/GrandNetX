import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Zap, Target, ShieldCheck } from "lucide-react";
import { Alien } from "../components/models/Alien";
import TitleHeader from "../components/TitleHeader";
import { bentoSocialLinks } from "../constants";

const stats = [
  { n: "50+", l: "Projects" },
  { n: "12+", l: "Services" },
  { n: "3", l: "Founders" },
  { n: "100%", l: "Satisfaction" },
];

const values = [
  { icon: Zap, title: "Speed", desc: "Fast delivery without cutting corners" },
  { icon: Target, title: "Precision", desc: "Every pixel and line of code matters" },
  { icon: ShieldCheck, title: "Reliability", desc: "We ship what we promise, on time" },
];

const About = () => {
  return (
    <section id="about" className="relative px-5 md:px-0 bg-[#fafafa] py-24 md:py-32 overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] bg-black blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <TitleHeader title="About Us" number="01" text="Empowering Businesses Through Technology" />

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* ── CARD 1: Identity — large left card ── */}
          <div className="md:col-span-7 reveal-left">
            <div className="glow-card rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="chapter-marker mb-5">
                  <span className="chapter-marker-line" />
                  <span className="chapter-marker-text">Who We Are</span>
                </div>
                <h2 className="text-black text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-none">
                  GRAND<span className="text-black/20">NETX</span>
                </h2>
                <p className="text-black/45 text-base md:text-lg leading-relaxed max-w-lg">
                  A full-service IT company delivering cutting-edge solutions across web, mobile,
                  AI, cloud, cybersecurity, and digital marketing. We transform ideas into powerful
                  digital products that drive real business growth.
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-4 gap-4">
                {stats.map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-black font-bold text-2xl md:text-3xl stat-number">{n}</p>
                    <p className="text-black/30 text-[10px] tracking-widest uppercase mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CARD 2: 3D Model ── */}
          <div className="md:col-span-5 reveal-right">
            <div className="bg-[#0a0a0a] rounded-3xl overflow-hidden relative h-[280px] md:h-full min-h-[280px] group">
              <Canvas frameloop="demand">
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 2, 3]} intensity={2} color="#FF28D5" />
                <directionalLight position={[2, 0, 3]} intensity={2} color="#1C34FF" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                <Suspense fallback={null}>
                  <Alien scale={2} position={[0, -5.5, 0]} rotation={[0, -0.5, 0]} />
                </Suspense>
              </Canvas>
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">3D Interactive — Drag to rotate</p>
              </div>
            </div>
          </div>

          {/* ── CARD 3: Mantra (black) ── */}
          <div className="md:col-span-4 reveal">
            <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-10 h-full min-h-[220px] flex flex-col justify-between relative overflow-hidden">
              {/* Subtle diagonal lines */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "repeating-linear-gradient(-45deg, #fff, #fff 1px, transparent 1px, transparent 40px)" }} />
              <div className="relative z-10">
                <div className="chapter-marker mb-6">
                  <span className="chapter-marker-line" style={{ background: "rgba(255,255,255,0.15)" }} />
                  <span className="chapter-marker-text" style={{ color: "rgba(255,255,255,0.25)" }}>Our Mantra</span>
                </div>
                <div className="space-y-1">
                  <p className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-none">INNOVATE.</p>
                  <p className="text-white/35 font-bold text-3xl md:text-4xl tracking-tight leading-none">BUILD FAST.</p>
                  <p className="text-white/12 font-bold text-3xl md:text-4xl tracking-tight leading-none">SCALE SMART.</p>
                </div>
              </div>
              <div className="relative z-10 mt-6">
                <div className="w-8 h-px bg-white/15" />
              </div>
            </div>
          </div>

          {/* ── CARD 4: Values ── */}
          <div className="md:col-span-4 reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="glow-card rounded-3xl p-8 h-full min-h-[220px] flex flex-col justify-between">
              <div className="chapter-marker mb-5">
                <span className="chapter-marker-line" />
                <span className="chapter-marker-text">Core Values</span>
              </div>
              <div className="space-y-4 flex-1">
                {values.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black/[0.05] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} strokeWidth={2} className="text-black/60" />
                    </div>
                    <div>
                      <p className="text-black font-semibold text-sm">{title}</p>
                      <p className="text-black/35 text-xs leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CARD 5: Mission ── */}
          <div className="md:col-span-4 reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="glow-card rounded-3xl p-8 h-full min-h-[220px] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="chapter-marker mb-5">
                  <span className="chapter-marker-line" />
                  <span className="chapter-marker-text">Our Mission</span>
                </div>
                <p className="text-black/50 text-sm leading-relaxed">
                  To make world-class technology accessible to every business — from startups to enterprises — through innovative, reliable, and affordable digital solutions.
                </p>
              </div>
              {/* Large ghost text */}
              <p className="text-black/[0.04] font-bold text-6xl leading-none mt-4 select-none">MISSION</p>
            </div>
          </div>

          {/* ── CARD 6: Social links ── */}
          <div className="md:col-span-12 reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bentoSocialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-social glow-card rounded-2xl p-5 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-black/[0.04] flex items-center justify-center flex-shrink-0">
                      <img src={item.icon} alt={item.name} className="w-4 h-4 opacity-50" />
                    </div>
                    <span className="text-black font-medium text-sm">{item.name}</span>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-4 h-4 text-black/15 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

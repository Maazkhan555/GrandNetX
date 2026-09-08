import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GradientSpheres from "../components/GradientSpheres";
import { Alien } from "../components/models/Alien";
import TitleHeader from "../components/TitleHeader";
import { bentoSocialLinks } from "../constants";

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Full Stack Developer · UI/UX Enthusiast · AI Explorer"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">

            {/* Bio card */}
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="glow-card rounded-2xl p-7 w-full h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 rounded-full bg-[#4f8aff]" />
                  <span className="text-[#4f8aff] text-sm tracking-widest uppercase">Who I Am</span>
                </div>
                <h1 className="gradient-title-accent md:text-5xl text-3xl font-bold mb-4">
                  MAAZ KHAN
                </h1>
                <p className="md:text-lg text-base leading-relaxed text-white/60">
                  I am a <span className="text-white/90 font-medium">Full Stack Developer</span> specializing in
                  web & mobile development. I build production-grade apps with React, Flutter, Node.js,
                  and AI integrations. My goal is always to craft fast, beautiful, and user-friendly experiences.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["React", "Flutter", "Node.js", "Three.js", "AI/ML", "GSAP"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-[#4f8aff]/25 text-[#4f8aff]/80 bg-[#4f8aff]/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3D Alien */}
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#0a0818] border border-[#4f8aff]/10 hover:border-[#4f8aff]/30 transition-colors hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <Canvas>
                  <ambientLight intensity={0.8} />
                  <pointLight position={[0, 5, 5]} intensity={1} color="#4f8aff" />
                  <OrbitControls enableZoom={false} />
                  <Alien scale={2} position={[0, -5.5, 0]} rotation={[0, -0.5, 0]} />
                </Canvas>
              </div>
            </div>

            {/* Quotation card — first slot */}
            <div className="md:col-span-4 col-span-12 row-span-6">
              <div className="glow-card rounded-2xl w-full md:h-full h-72 p-7 flex flex-col justify-between overflow-hidden relative">
                {/* big decorative quote mark */}
                <span className="absolute -top-4 -left-2 text-[10rem] leading-none font-bold text-[#4f8aff]/8 select-none pointer-events-none">
                  &ldquo;
                </span>
                {/* top accent line */}
                <div className="w-10 h-0.5 bg-[#4f8aff]/50" />
                {/* quote text fills the space */}
                <div className="flex-1 flex flex-col justify-center gap-1 py-4">
                  <p className="gradient-title font-bold md:text-3xl text-2xl leading-tight">
                    Everything
                  </p>
                  <p className="gradient-title font-bold md:text-3xl text-2xl leading-tight">
                    can be done,
                  </p>
                  <p className="gradient-title font-bold md:text-3xl text-2xl leading-tight mt-2">
                    nothing can be
                  </p>
                  <p className="gradient-title font-bold md:text-3xl text-2xl leading-tight">
                    undone &mdash;
                  </p>
                  <p className="gradient-title-accent font-bold md:text-3xl text-2xl leading-tight mt-2">
                    if it can be,
                  </p>
                  <p className="gradient-title-accent font-bold md:text-3xl text-2xl leading-tight">
                    nothing can
                  </p>
                  <p className="gradient-title-accent font-bold md:text-3xl text-2xl leading-tight">
                    be done.
                  </p>
                </div>
                {/* author */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-px bg-[#4f8aff]/40" />
                  <p className="text-white/25 text-xs tracking-widest uppercase">Maaz Khan</p>
                </div>
              </div>
            </div>

            {/* Personal photo 1 — second card */}
            <div className="md:col-span-4 col-span-12 row-span-6">
              <div className="glow-card rounded-2xl w-full md:h-full h-64 overflow-hidden group">
                <img
                  src="/images/ChatGPT Image Aug 14, 2026, 03_14_49 PM.png"
                  alt="Maaz Khan"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Personal photo 2 */}
            <div className="md:col-span-4 col-span-12 row-span-6">
              <div className="glow-card rounded-2xl w-full md:h-full h-64 overflow-hidden group">
                <img
                  src="/images/ChatGPT Image Aug 20, 2026, 07_45_50 AM.png"
                  alt="Maaz Khan"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Web Dev card */}
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="glow-card rounded-2xl p-7 w-full h-full group">
                <div className="flex flex-col h-full justify-center gap-2">
                  <div className="w-8 h-0.5 bg-[#4f8aff] mb-1" />
                  <h1 className="gradient-title md:text-3xl text-2xl font-semibold">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-base text-sm text-white/50">
                    Cleanly designed, conversion-focused, built for performance.
                  </p>
                </div>
              </div>
            </div>

            {/* UX UI card */}
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="glow-card rounded-2xl p-7 w-full h-full group">
                <div className="flex flex-col h-full justify-center gap-2">
                  <div className="w-8 h-0.5 bg-[#00e5ff] mb-1" />
                  <h1 className="gradient-title md:text-3xl text-2xl font-semibold">
                    UX / UI Design
                  </h1>
                  <p className="md:text-base text-sm text-white/50">
                    Seamless web & mobile app design to wow your users.
                  </p>
                </div>
              </div>
            </div>

            {/* Motto */}
            <div className="md:col-span-6 col-span-12 row-span-4">
              <div className="glow-card rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">BE YOURSELF!</h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">BE DIFFERENT!</h1>
                  <h1 className="gradient-title-accent md:text-5xl text-3xl font-bold">BUILD DIFFERENT!</h1>
                </div>
              </div>
            </div>

            {/* Social links */}
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-3 col-span-12 row-span-2">
                <a
                  href={item.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-card rounded-2xl p-7 w-full h-full group cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center md:gap-4 gap-3">
                    <img src={item.icon} alt={item.name} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <h1 className="gradient-title md:text-2xl text-lg font-medium">{item.name}</h1>
                  </div>
                  <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <img src="/images/arrowupright.svg" alt="arrow" className="md:w-5 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

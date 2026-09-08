import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";
import useTypewriter from "../hooks/useTypewriter";

const ROLES = [
  "Full Stack Developer",
  "Flutter Developer",
  "React Expert",
  "AI Builder",
  "UI/UX Enthusiast",
];

const Hero = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
    >
      {/* ── Right-side portrait ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/ChatGPT Image Aug 14, 2026, 03_14_49 PM.png"
          alt="Maaz Khan"
          className="absolute right-0 top-0 h-full w-[55%] object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05030f] from-40% via-[#05030f]/60 via-55% to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#05030f] to-transparent" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#05030f] to-transparent" />
      </div>

      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />

      {/* 3D model */}
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <HeroExperience />
      </div>

      {/* Text */}
      <div className="w-full h-full absolute top-0 left-0 z-20 pointer-events-none">
        <div className="container mx-auto relative w-full h-full">

          {/* top-left block */}
          <div className="absolute top-0 left-0 md:pt-40 pt-24 md:px-0 px-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
              <p className="md:text-sm text-xs text-[#00e5ff] tracking-[0.3em] uppercase font-medium">
                Available for work
              </p>
            </div>
            <h1 className="font-bold md:text-9xl text-5xl gradient-title leading-none tracking-tight">
              MAAZ KHAN
            </h1>
            <h1 className="font-bold md:text-9xl text-5xl gradient-title-accent leading-none tracking-tight">
              CREATIVE
            </h1>

            {/* typewriter */}
            <div className="mt-5 flex items-center gap-3">
              <div className="w-10 h-px bg-[#4f8aff]/50" />
              <p className="text-white/60 text-sm tracking-widest uppercase min-w-[220px]">
                {typed}
                <span className="inline-block w-0.5 h-4 bg-[#00e5ff] ml-0.5 animate-pulse align-middle" />
              </p>
            </div>
          </div>

          {/* bottom bar */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-between items-end md:px-0 px-5">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#4f8aff]/60" />
              <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <img src="/images/shape.svg" alt="shape" className="opacity-30" />
              <h1 className="font-bold md:text-9xl text-5xl gradient-title leading-none tracking-tight">
                DEVELOPER
              </h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import GradientSpheres from "../components/GradientSpheres";
import { statsList } from "../constants";

const Stats = () => {
  return (
    <section className="w-full relative md:p-0 px-5 overflow-hidden">
      <GradientSpheres
        sphere1Class="stats-gradient-sphere stats-sphere-1"
        sphere2Class="stats-gradient-sphere stats-sphere-2"
      />

      <div className="container mx-auto md:my-32 my-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left — image */}
          <div className="relative">
            <div className="glow-card rounded-3xl overflow-hidden h-[500px]">
              <img
                src="/images/ChatGPT Image Aug 20, 2026, 07_48_05 AM.png"
                alt="Maaz Khan"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05030f]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Full Stack Developer</p>
                <h2 className="gradient-title text-3xl font-bold">Maaz Khan</h2>
              </div>
            </div>
            {/* floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#0e0c18] border border-[#4f8aff]/25 rounded-2xl px-5 py-3 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                <span className="text-white/70 text-sm">Open to work</span>
              </div>
            </div>
          </div>

          {/* Right — stats + text */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[#4f8aff] text-sm tracking-widest uppercase mb-3">By the numbers</p>
              <h2 className="gradient-title md:text-5xl text-3xl font-bold leading-tight">
                Turning ideas into<br />
                <span className="gradient-title-accent">real products</span>
              </h2>
              <p className="text-white/40 mt-4 md:text-base text-sm leading-relaxed max-w-md">
                From concept to deployment — I build fast, scalable, and visually stunning
                applications that solve real problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {statsList.map((stat, i) => (
                <div key={i} className="glow-card rounded-2xl p-6">
                  <h3 className="gradient-title-accent md:text-5xl text-4xl font-bold">{stat.number}</h3>
                  <p className="text-white/40 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#4f8aff]/10 border border-[#4f8aff]/25 hover:bg-[#4f8aff]/20 hover:border-[#4f8aff]/50 text-white/80 hover:text-white text-sm transition-all duration-300"
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 hover:bg-[#00e5ff]/20 hover:border-[#00e5ff]/50 text-white/80 hover:text-white text-sm transition-all duration-300"
              >
                Hire Me →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

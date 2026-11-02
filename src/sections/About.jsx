import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GradientSpheres from "../components/GradientSpheres";
import { Alien } from "../components/models/Alien";
import TitleHeader from "../components/TitleHeader";
import { bentoSocialLinks } from "../constants";

const About = () => {
  return (
    <section id="about" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container mx-auto relative z-10">
        <TitleHeader title="About Us" number="01" text="Empowering Businesses Through Technology" />

        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 gap-5">

            {/* Main info card */}
            <div className="md:col-span-7 col-span-12">
              <div className="glow-card rounded-2xl p-8 w-full h-full reveal-left">
                <div className="chapter-marker mb-4">
                  <span className="chapter-marker-line" />
                  <span className="chapter-marker-text">Our Identity</span>
                </div>
                <h1 className="text-black md:text-5xl text-3xl font-bold mb-4">GRANDNETX</h1>
                <p className="text-black/45 md:text-lg text-base leading-relaxed">
                  GrandNetX is a full-service IT company delivering cutting-edge solutions across
                  web development, mobile apps, UI/UX design, cloud infrastructure, cybersecurity,
                  AI integration, and digital marketing. We transform ideas into powerful digital
                  products that drive real business growth.
                </p>
                <div className="mt-6 pt-6 border-t border-black/5 flex items-center gap-6">
                  {[["12+", "Services"], ["50+", "Projects"], ["100%", "Satisfaction"]].map(([n, l]) => (
                    <div key={l}>
                      <p className="text-black font-bold text-2xl">{n}</p>
                      <p className="text-black/30 text-xs tracking-widest uppercase mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3D alien */}
            <div className="md:col-span-5 col-span-12">
              <div className="bg-black hover:cursor-grab rounded-2xl w-full md:h-full h-60 reveal-right overflow-hidden relative">
                <Canvas>
                  <ambientLight />
                  <OrbitControls enableZoom={false} />
                  <Alien scale={2} position={[0, -5.5, 0]} rotation={[0, -0.5, 0]} />
                </Canvas>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/20 text-xs tracking-widest uppercase">3D Interactive</span>
                </div>
              </div>
            </div>

            {/* Motto */}
            <div className="md:col-span-6 col-span-12">
              <div className="bg-black rounded-2xl p-8 w-full h-full reveal">
                <div className="flex flex-col justify-between h-full gap-4">
                  <div className="chapter-marker">
                    <span className="chapter-marker-line" style={{ background: "rgba(255,255,255,0.2)" }} />
                    <span className="chapter-marker-text" style={{ color: "rgba(255,255,255,0.3)" }}>Our Mantra</span>
                  </div>
                  <h1 className="text-white md:text-5xl text-3xl font-bold">INNOVATE!</h1>
                  <h1 className="text-white/40 md:text-5xl text-3xl font-bold">BUILD FAST!</h1>
                  <h1 className="text-white/15 md:text-5xl text-3xl font-bold">SCALE SMART!</h1>
                </div>
              </div>
            </div>

            {/* Social links */}
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-3 col-span-12">
                <a href={item.href || "#"} target="_blank" rel="noreferrer"
                  className="bento-social glow-card rounded-2xl p-6 w-full h-full group flex justify-between items-center reveal"
                  style={{ transitionDelay: `${index * 0.08}s` }}>
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.name} className="w-5 h-5 opacity-60" />
                    <span className="text-black font-medium md:text-base text-sm">{item.name}</span>
                  </div>
                  <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-black/20">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
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

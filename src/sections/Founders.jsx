import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const founders = [
  {
    name: "MAAZKHAN",
    role: "CEO & Co-Founder",
    img: "/images/ChatGPT Image Aug 14, 2026, 03_14_49 PM.png",
  },
  {
    name: "Syed Waleed",
    role: "CTO & Co-Founder",
    img: "/images/WhatsApp Image 2026-09-14 at 7.11.30 AM.jpeg",
  },
];

const Founders = () => {
  return (
    <section id="founders" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="Our Founders"
          number="02"
          text="The visionaries behind GrandNetX"
        />
        <div className="md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <article key={founder.name} className="group relative glow-card rounded-3xl overflow-hidden min-h-[480px] md:min-h-[560px]">
              <img
                src={founder.img}
                alt={founder.name}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-7">
                <span className="border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] tracking-[0.25em] text-white/70 uppercase backdrop-blur-sm">
                  GrandNetX / 0{index + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#4f8aff] shadow-[0_0_14px_#4f8aff]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="mb-2 text-xs tracking-[0.28em] text-[#4f8aff] uppercase">
                  {founder.role}
                </p>
                <h2 className="gradient-title text-3xl md:text-4xl font-bold">{founder.name}</h2>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-[#4f8aff]/70 via-white/20 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

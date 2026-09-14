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
  {
    name: "Nabeel khan",
    role: "COO & Co-Founder",
    img: null,
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
        <div className="md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="group relative glow-card rounded-3xl overflow-hidden">
              <div className="h-96 overflow-hidden">
                {founder.img ? (
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0d0d0d] to-[#111] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-28 h-28 rounded-full bg-[#4f8aff]/10 border border-[#4f8aff]/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#4f8aff" strokeWidth="1.2" className="w-14 h-14">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span className="text-white/20 text-xs tracking-widest uppercase">Photo Coming Soon</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[#4f8aff] text-xs tracking-widest uppercase mb-1">
                  {founder.role}
                </p>
                <h2 className="gradient-title text-2xl font-bold">{founder.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

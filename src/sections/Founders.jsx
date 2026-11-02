import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const founders = [
  {
    name: "MAAZKHAN",
    role: "CEO & Co-Founder",
    quote: "We build technology that outlasts trends.",
    img: "/images/ChatGPT Image Aug 14, 2026, 03_14_49 PM.png",
  },
  {
    name: "Syed Waleed",
    role: "CTO & Co-Founder",
    quote: "Every line of code is a decision about the future.",
    img: "/images/ChatGPT Image Sep 14, 2026, 06_30_49 AM.png",
  },
];

const Founders = () => {
  return (
    <section id="founders" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container mx-auto relative z-10">
        <TitleHeader title="Our Founders" number="02" text="The visionaries behind GrandNetX" />

        <div className="md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <article
              key={index}
              className="founder-card group relative rounded-3xl overflow-hidden min-h-[540px] border border-black/6 shadow-xl reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img
                src={founder.img}
                alt={founder.name}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                style={{ filter: "grayscale(15%)" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="border border-white/15 bg-black/40 px-3 py-1 text-[10px] tracking-[0.2em] text-white/50 uppercase backdrop-blur-sm rounded-full">
                  GrandNetX / 0{index + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                {/* Quote */}
                <p className="text-white/35 text-sm italic leading-relaxed mb-4">
                  &ldquo;{founder.quote}&rdquo;
                </p>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4" />
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">{founder.role}</p>
                <h2 className="text-white text-3xl font-bold">{founder.name}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

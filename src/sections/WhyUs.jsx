import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    color: "#4f8aff",
    title: "End-to-End Delivery",
    desc: "From idea to launch — we handle design, development, AI, backend, deployment, and marketing under one roof. No need to hire multiple agencies.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    color: "#00e5ff",
    title: "Fast Turnaround",
    desc: "We move fast without cutting corners. Most projects are delivered on time with clear milestones and regular updates throughout.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    color: "#a855f7",
    title: "Quality Guaranteed",
    desc: "Every product we ship is tested, optimized, and built to scale. We don't just build — we build it right.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#f472b6",
    title: "Dedicated Team",
    desc: "You get a real team — not freelancers. Our founders are directly involved in every project to ensure the highest standard.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "#34d399",
    title: "Transparent Pricing",
    desc: "No hidden fees. We give you a clear breakdown before we start. You always know exactly what you're paying for.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#fbbf24",
    title: "24/7 Support",
    desc: "We're always reachable. After delivery, we provide ongoing support, maintenance, and updates whenever you need them.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-2"
        sphere2Class="about-gradient-sphere about-sphere-1"
      />
      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="Why GrandNetX"
          number="05"
          text="What makes us different from the rest"
        />
        <div className="md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div key={i} className="glow-card rounded-2xl p-7 group hover:scale-[1.02] transition-transform duration-300">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${r.color}18`, color: r.color }}
              >
                {r.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{r.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

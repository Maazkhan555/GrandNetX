import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const reasons = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    title: "End-to-End Delivery",
    desc: "From idea to launch — design, development, AI, backend, deployment, and marketing under one roof.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    title: "Fast Turnaround",
    desc: "We move fast without cutting corners. Clear milestones and regular updates throughout every project.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    title: "Quality Guaranteed",
    desc: "Every product is tested, optimized, and built to scale. We don't just build — we build it right.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    title: "Dedicated Team",
    desc: "A real team — not freelancers. Our founders are directly involved in every project.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
    title: "Transparent Pricing",
    desc: "No hidden fees. A clear breakdown before we start. You always know exactly what you're paying for.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    title: "24/7 Support",
    desc: "Always reachable. Ongoing support, maintenance, and updates whenever you need them.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-2"
        sphere2Class="about-gradient-sphere about-sphere-1"
      />
      <div className="container mx-auto relative z-10">
        <TitleHeader title="Why GrandNetX" number="05" text="What makes us different from the rest" />

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 stagger">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="story-card rounded-2xl p-7 reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-5 text-black/50">
                {r.icon}
              </div>
              <h3 className="text-black font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-black/40 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

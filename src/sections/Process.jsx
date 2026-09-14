import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const steps = [
  {
    number: "01",
    color: "#4f8aff",
    title: "Discovery & Consultation",
    desc: "We start with a free consultation to understand your business, goals, and requirements. No commitment needed — just a conversation.",
    tags: ["Free Call", "Requirement Analysis", "Goal Setting"],
  },
  {
    number: "02",
    color: "#a855f7",
    title: "Strategy & Planning",
    desc: "We create a detailed project plan — timeline, tech stack, design direction, and cost breakdown. Everything is transparent before we begin.",
    tags: ["Project Roadmap", "Tech Stack", "Timeline & Budget"],
  },
  {
    number: "03",
    color: "#00e5ff",
    title: "Design & Prototyping",
    desc: "Our designers build wireframes and interactive prototypes. You see exactly how your product will look and feel before a single line of code is written.",
    tags: ["Wireframes", "UI/UX Design", "Prototype Review"],
  },
  {
    number: "04",
    color: "#f472b6",
    title: "Development & AI Integration",
    desc: "Our engineers build your product with clean, scalable code. AI features, APIs, and backend systems are integrated seamlessly.",
    tags: ["Frontend & Backend", "AI Integration", "API Development"],
  },
  {
    number: "05",
    color: "#34d399",
    title: "Testing & Quality Assurance",
    desc: "Every feature is rigorously tested across devices and scenarios. We fix bugs, optimize performance, and ensure everything works perfectly.",
    tags: ["QA Testing", "Performance Optimization", "Bug Fixes"],
  },
  {
    number: "06",
    color: "#fbbf24",
    title: "Launch & Growth",
    desc: "We deploy your product to production, handle app store submissions, and set up analytics. Post-launch, we support your growth with marketing and updates.",
    tags: ["Deployment", "App Store Publishing", "Ongoing Support"],
  },
];

const Process = () => {
  return (
    <section id="process" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="How We Work"
          number="06"
          text="A clear, proven process from idea to launch"
        />
        <div className="md:mt-20 mt-10 relative">
          {/* vertical line desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                  {/* dot */}
                  <div
                    className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black hidden md:block z-10"
                    style={{ background: step.color }}
                  />
                  {/* number side */}
                  <div className={`md:w-1/2 flex ${isLeft ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16"}`}>
                    {isLeft ? (
                      <div className="md:text-right">
                        <span className="font-bold text-6xl leading-none" style={{ color: `${step.color}25` }}>{step.number}</span>
                        <p className="text-white/20 text-xs tracking-widest uppercase mt-1">{step.tags.join(" · ")}</p>
                      </div>
                    ) : (
                      <div className="glow-card rounded-2xl p-6 md:max-w-sm w-full" style={{ borderColor: `${step.color}20` }}>
                        <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>{step.number}</span>
                        <h3 className="text-white font-semibold text-lg mt-2 mb-2">{step.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-4">{step.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: `${step.color}30`, color: step.color, background: `${step.color}0d` }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* content side */}
                  <div className={`md:w-1/2 flex ${isLeft ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"}`}>
                    {isLeft ? (
                      <div className="glow-card rounded-2xl p-6 md:max-w-sm w-full" style={{ borderColor: `${step.color}20` }}>
                        <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>{step.number}</span>
                        <h3 className="text-white font-semibold text-lg mt-2 mb-2">{step.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-4">{step.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: `${step.color}30`, color: step.color, background: `${step.color}0d` }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="md:text-left">
                        <span className="font-bold text-6xl leading-none" style={{ color: `${step.color}25` }}>{step.number}</span>
                        <p className="text-white/20 text-xs tracking-widest uppercase mt-1">{step.tags.join(" · ")}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

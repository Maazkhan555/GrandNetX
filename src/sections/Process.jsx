import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const steps = [
  { number: "01", title: "Discovery & Consultation", desc: "Free consultation to understand your business, goals, and requirements. No commitment needed.", tags: ["Free Call", "Requirement Analysis", "Goal Setting"] },
  { number: "02", title: "Strategy & Planning", desc: "Detailed project plan — timeline, tech stack, design direction, and cost breakdown. Fully transparent.", tags: ["Project Roadmap", "Tech Stack", "Timeline & Budget"] },
  { number: "03", title: "Design & Prototyping", desc: "Wireframes and interactive prototypes so you see exactly how your product looks before any code is written.", tags: ["Wireframes", "UI/UX Design", "Prototype Review"] },
  { number: "04", title: "Development & AI Integration", desc: "Clean, scalable code with AI features, APIs, and backend systems integrated seamlessly.", tags: ["Frontend & Backend", "AI Integration", "API Development"] },
  { number: "05", title: "Testing & Quality Assurance", desc: "Rigorous testing across devices. We fix bugs, optimize performance, and ensure everything works perfectly.", tags: ["QA Testing", "Performance Optimization", "Bug Fixes"] },
  { number: "06", title: "Launch & Growth", desc: "Deploy to production, app store submissions, analytics setup, and post-launch marketing support.", tags: ["Deployment", "App Store Publishing", "Ongoing Support"] },
];

const Process = () => {
  return (
    <section id="process" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres sphere1Class="about-gradient-sphere about-sphere-1" sphere2Class="about-gradient-sphere about-sphere-2" />
      <div className="container mx-auto relative z-10">
        <TitleHeader title="How We Work" number="06" text="A clear, proven process from idea to launch" />

        <div className="md:mt-20 mt-10 relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row gap-6 md:gap-0 py-10 md:py-14 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="timeline-dot hidden md:block" style={{ top: "50%" }} />

                  {/* Number side */}
                  <div className={`md:w-1/2 flex ${isLeft ? "md:justify-end md:pr-20" : "md:justify-start md:pl-20"}`}>
                    {isLeft ? (
                      <div className="md:text-right reveal-right" style={{ transitionDelay: `${i * 0.05}s` }}>
                        <span className="font-bold text-8xl leading-none text-black/4">{step.number}</span>
                        <p className="text-black/18 text-xs tracking-widest uppercase mt-2">{step.tags.join(" · ")}</p>
                      </div>
                    ) : (
                      <div className="story-card process-step rounded-2xl p-7 md:max-w-sm w-full reveal-left" style={{ transitionDelay: `${i * 0.05}s` }}>
                        <span className="text-xs font-bold tracking-widest text-black/25 uppercase">{step.number}</span>
                        <h3 className="text-black font-bold text-xl mt-3 mb-2 leading-tight">{step.title}</h3>
                        <p className="text-black/40 text-sm leading-relaxed mb-4">{step.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-black/8 text-black/35 font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content side */}
                  <div className={`md:w-1/2 flex ${isLeft ? "md:justify-start md:pl-20" : "md:justify-end md:pr-20"}`}>
                    {isLeft ? (
                      <div className="story-card process-step rounded-2xl p-7 md:max-w-sm w-full reveal-right" style={{ transitionDelay: `${i * 0.05}s` }}>
                        <span className="text-xs font-bold tracking-widest text-black/25 uppercase">{step.number}</span>
                        <h3 className="text-black font-bold text-xl mt-3 mb-2 leading-tight">{step.title}</h3>
                        <p className="text-black/40 text-sm leading-relaxed mb-4">{step.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-black/8 text-black/35 font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="md:text-right reveal-left" style={{ transitionDelay: `${i * 0.05}s` }}>
                        <span className="font-bold text-8xl leading-none text-black/4">{step.number}</span>
                        <p className="text-black/18 text-xs tracking-widest uppercase mt-2">{step.tags.join(" · ")}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* End of process */}
          <div className="flex flex-col items-center mt-4 reveal">
            <div className="w-px h-12 bg-gradient-to-b from-black/10 to-transparent" />
            <div className="w-2.5 h-2.5 rounded-full bg-black" />
            <p className="text-black/20 text-xs tracking-widest uppercase mt-3">Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

const milestones = [
  {
    year: "2022",
    chapter: "Chapter I",
    title: "The Spark",
    desc: "Three engineers with a shared obsession — build technology that actually matters. GrandNetX was born in a small room with big ambitions.",
    stat: "3 Founders",
    tag: "Origin Story",
  },
  {
    year: "2023",
    chapter: "Chapter II",
    title: "First Clients. Real Problems.",
    desc: "We shipped our first 10 products. Each one taught us something new. We learned that great software isn't just code — it's empathy, precision, and relentless iteration.",
    stat: "10+ Products",
    tag: "Growth",
  },
  {
    year: "2024",
    chapter: "Chapter III",
    title: "AI Changes Everything",
    desc: "We integrated AI into every layer of our stack. Chatbots, automation, computer vision, LLMs. Our clients didn't just get software — they got intelligence.",
    stat: "AI-First",
    tag: "Evolution",
  },
  {
    year: "2025",
    chapter: "Chapter IV",
    title: "Scale Without Limits",
    desc: "50+ projects. 12 service categories. Clients across 3 continents. GrandNetX became the one team that could do it all — and do it exceptionally.",
    stat: "50+ Projects",
    tag: "Today",
  },
];

const StoryTimeline = () => {
  return (
    <section className="w-full relative md:px-0 px-5 bg-[#fafafa] overflow-hidden">
      {/* Cinematic header stripe */}
      <div className="cinematic-stripe w-full py-16 md:py-24 film-grain">
        <div className="container mx-auto px-5 md:px-0">
          <div className="chapter-marker">
            <span className="chapter-marker-line" style={{ background: "rgba(255,255,255,0.3)" }} />
            <span className="chapter-marker-text" style={{ color: "rgba(255,255,255,0.4)" }}>The GrandNetX Story</span>
          </div>
          <h2 className="cinematic-title text-white leading-none mb-6">
            Every great company<br />
            <span style={{ color: "rgba(255,255,255,0.25)" }}>has a story.</span>
          </h2>
          <p className="text-white/40 max-w-xl md:text-lg text-base leading-relaxed">
            This is ours. From a single idea to a full-service technology powerhouse — built one breakthrough at a time.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto py-24 md:py-32 relative">
        <div className="timeline-line hidden md:block" />

        <div className="flex flex-col gap-0">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 py-12 md:py-16">
                {/* Timeline dot */}
                <div className="timeline-dot hidden md:block" style={{ top: "50%" }} />

                {/* Left side */}
                <div className={`md:w-1/2 ${isLeft ? "md:pr-20 md:text-right" : "md:pl-20"} ${!isLeft && "md:order-2"}`}>
                  {isLeft ? (
                    <div className="reveal-right">
                      <span className="timeline-year">{m.year}</span>
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/8 bg-black/3">
                        <span className="text-xs font-semibold text-black/40 tracking-widest uppercase">{m.tag}</span>
                      </div>
                      <p className="text-black/20 font-bold text-6xl mt-3 leading-none">{m.stat}</p>
                    </div>
                  ) : (
                    <div className="story-card rounded-2xl p-8 reveal-left">
                      <span className="text-xs font-bold tracking-widest text-black/25 uppercase">{m.chapter}</span>
                      <h3 className="text-black font-bold text-2xl mt-3 mb-3 leading-tight">{m.title}</h3>
                      <p className="text-black/45 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  )}
                </div>

                {/* Right side */}
                <div className={`md:w-1/2 ${isLeft ? "md:pl-20" : "md:pr-20 md:text-right"} ${!isLeft && "md:order-1"}`}>
                  {isLeft ? (
                    <div className="story-card rounded-2xl p-8 reveal-left">
                      <span className="text-xs font-bold tracking-widest text-black/25 uppercase">{m.chapter}</span>
                      <h3 className="text-black font-bold text-2xl mt-3 mb-3 leading-tight">{m.title}</h3>
                      <p className="text-black/45 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  ) : (
                    <div className="reveal-right">
                      <span className="timeline-year">{m.year}</span>
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/8 bg-black/3">
                        <span className="text-xs font-semibold text-black/40 tracking-widest uppercase">{m.tag}</span>
                      </div>
                      <p className="text-black/20 font-bold text-6xl mt-3 leading-none">{m.stat}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* End marker */}
        <div className="flex flex-col items-center mt-8 reveal">
          <div className="w-px h-16 bg-gradient-to-b from-black/10 to-transparent" />
          <div className="w-3 h-3 rounded-full bg-black" />
          <p className="text-black/25 text-xs tracking-widest uppercase mt-4">The story continues</p>
        </div>
      </div>

      {/* Manifesto quote */}
      <div className="bg-black w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-5 md:px-0 text-center reveal">
          <span className="large-quote-mark text-white/5">"</span>
          <p className="large-quote text-white max-w-4xl mx-auto">
            We don't just build products.<br />
            <span className="text-white/30">We build the future of your business.</span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-white/30 text-xs tracking-widest uppercase">GrandNetX Manifesto</span>
            <div className="w-8 h-px bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;

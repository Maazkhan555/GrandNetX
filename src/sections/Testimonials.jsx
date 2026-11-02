import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "CEO, TechStart PK",
    avatar: "AR",
    rating: 5,
    text: "GrandNetX delivered our entire SaaS platform in record time. The quality of code, design, and AI integration was beyond what we expected. Highly professional team.",
  },
  {
    name: "Sara Khan",
    role: "Founder, StyleHub",
    avatar: "SK",
    rating: 5,
    text: "They built our e-commerce app from scratch — Flutter frontend, Node.js backend, and even set up our marketing. One team handled everything. Absolutely amazing.",
  },
  {
    name: "Usman Ali",
    role: "Director, LogiCore",
    avatar: "UA",
    rating: 5,
    text: "The AI automation system GrandNetX built for us saved us 40+ hours per week. Their understanding of business processes and AI is genuinely impressive.",
  },
  {
    name: "Fatima Malik",
    role: "Marketing Head, BrandUp",
    avatar: "FM",
    rating: 5,
    text: "From branding to social media strategy to a full website — GrandNetX is the only agency we'll ever need. Fast, creative, and always on time.",
  },
  {
    name: "Bilal Hussain",
    role: "CTO, FinEdge",
    avatar: "BH",
    rating: 5,
    text: "We needed a secure, scalable fintech backend with real-time features. GrandNetX nailed it. Their technical depth is rare to find in a single team.",
  },
  {
    name: "Zara Siddiqui",
    role: "Product Manager, EduFlow",
    avatar: "ZS",
    rating: 5,
    text: "Our EdTech platform needed AI tutoring features, video streaming, and a clean UI. GrandNetX delivered all three flawlessly. Couldn't be happier.",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-black/60">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container mx-auto relative z-10">
        <TitleHeader
          title="Client Reviews"
          number="07"
          text="What our clients say about working with us"
        />

        {/* Featured quote */}
        <div className="md:mt-16 mt-10 bg-black rounded-3xl p-10 md:p-16 reveal testimonial-featured">
          <span className="large-quote-mark text-white/5">"</span>
          <p className="large-quote text-white max-w-3xl">
            GrandNetX delivered our entire SaaS platform in record time. The quality was beyond what we expected.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm font-bold">AR</div>
            <div>
              <p className="text-white/70 text-sm font-semibold">Ahmed Raza</p>
              <p className="text-white/30 text-xs">CEO, TechStart PK</p>
            </div>
            <div className="ml-auto flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/40">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="md:mt-8 mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 stagger">
          {testimonials.slice(1).map((t, i) => (
            <div key={i} className="glow-card rounded-2xl p-6 flex flex-col gap-4 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <Stars count={t.rating} />
              <p className="text-black/45 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-xs font-bold flex-shrink-0 text-black/50">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-black text-sm font-semibold">{t.name}</p>
                  <p className="text-black/25 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

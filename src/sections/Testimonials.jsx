import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "CEO, TechStart PK",
    avatar: "AR",
    color: "#4f8aff",
    rating: 5,
    text: "GrandNetX delivered our entire SaaS platform in record time. The quality of code, design, and AI integration was beyond what we expected. Highly professional team.",
  },
  {
    name: "Sara Khan",
    role: "Founder, StyleHub",
    avatar: "SK",
    color: "#f472b6",
    rating: 5,
    text: "They built our e-commerce app from scratch — Flutter frontend, Node.js backend, and even set up our marketing. One team handled everything. Absolutely amazing.",
  },
  {
    name: "Usman Ali",
    role: "Director, LogiCore",
    avatar: "UA",
    color: "#34d399",
    rating: 5,
    text: "The AI automation system GrandNetX built for us saved us 40+ hours per week. Their understanding of business processes and AI is genuinely impressive.",
  },
  {
    name: "Fatima Malik",
    role: "Marketing Head, BrandUp",
    avatar: "FM",
    color: "#fbbf24",
    rating: 5,
    text: "From branding to social media strategy to a full website — GrandNetX is the only agency we'll ever need. Fast, creative, and always on time.",
  },
  {
    name: "Bilal Hussain",
    role: "CTO, FinEdge",
    avatar: "BH",
    color: "#a855f7",
    rating: 5,
    text: "We needed a secure, scalable fintech backend with real-time features. GrandNetX nailed it. Their technical depth is rare to find in a single team.",
  },
  {
    name: "Zara Siddiqui",
    role: "Product Manager, EduFlow",
    avatar: "ZS",
    color: "#00e5ff",
    rating: 5,
    text: "Our EdTech platform needed AI tutoring features, video streaming, and a clean UI. GrandNetX delivered all three flawlessly. Couldn't be happier.",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="#fbbf24" className="w-4 h-4">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="Client Reviews"
          number="07"
          text="What our clients say about working with us"
        />
        <div className="md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="glow-card rounded-2xl p-6 flex flex-col gap-4">
              <Stars count={t.rating} />
              <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: `${t.color}20`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role}</p>
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

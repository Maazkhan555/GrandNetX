import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "one-time",
    tagline: "Perfect for small businesses & startups",
    features: [
      "Landing Page or Simple Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Revision Round",
      "7-Day Delivery",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "one-time",
    tagline: "For businesses ready to scale fast",
    features: [
      "Full Website or Mobile App",
      "Custom UI/UX Design",
      "Backend + Database",
      "API Integrations",
      "Basic AI Feature",
      "3 Revision Rounds",
      "14-Day Delivery",
      "1 Month Free Support",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "project-based",
    tagline: "End-to-end digital product delivery",
    features: [
      "Full-Stack Product Development",
      "AI & Automation Integration",
      "Cloud Deployment & DevOps",
      "Digital Marketing Setup",
      "Branding & Identity",
      "Unlimited Revisions",
      "Dedicated Project Manager",
      "3 Months Free Support",
    ],
    cta: "Let's Talk",
    featured: false,
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 flex-shrink-0 text-black/50">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container mx-auto relative z-10">
        <TitleHeader title="Pricing" number="08" text="Transparent pricing — no surprises, ever" />

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden ${
                plan.featured
                  ? "bg-[#0a0a0a] text-white"
                  : "glow-card"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.featured && (
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "repeating-linear-gradient(-45deg,#fff,#fff 1px,transparent 1px,transparent 40px)" }} />
              )}

              {plan.featured && (
                <div className="absolute top-5 right-5">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${plan.featured ? "text-white/30" : "text-black/30"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className={`text-4xl font-bold leading-none ${plan.featured ? "text-white" : "text-black"}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className={`text-sm mb-1 ${plan.featured ? "text-white/30" : "text-black/25"}`}>/ {plan.period}</span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.featured ? "text-white/40" : "text-black/40"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className={`h-px w-full relative z-10 ${plan.featured ? "bg-white/8" : "bg-black/6"}`} />

              <ul className="flex flex-col gap-3 flex-1 relative z-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? "bg-white/10" : "bg-black/5"}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className={`w-3 h-3 ${plan.featured ? "text-white/60" : "text-black/50"}`}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className={`text-sm ${plan.featured ? "text-white/60" : "text-black/55"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`relative z-10 w-full py-3.5 rounded-xl font-semibold text-sm text-center transition-all duration-300 active:scale-[0.98] ${
                  plan.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black text-white hover:bg-black/85"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-black/25 text-sm mt-10 reveal">
          All prices are starting points. Final quote depends on project scope.{" "}
          <a href="#contact" className="text-black/50 underline underline-offset-2 hover:text-black transition-colors">
            Get a custom quote →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;

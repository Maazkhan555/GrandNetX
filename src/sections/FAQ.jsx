import { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const faqs = [
  {
    q: "What services does GrandNetX offer?",
    a: "GrandNetX offers 12 service categories including Software & App Development, AI & Machine Learning, Web Development, UI/UX Design, Video Production, Digital Marketing, Branding, Automation, Cloud & DevOps, Cybersecurity, Data Analytics, and End-to-End Digital Products.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is unique. Pricing depends on scope, complexity, and timeline. We offer transparent, itemized quotes with no hidden fees. Contact us for a free consultation and estimate.",
  },
  {
    q: "How long does it take to build an app or website?",
    a: "A simple website takes 1–2 weeks. A mobile app typically takes 4–8 weeks. Complex SaaS platforms or AI systems can take 2–4 months. We always provide a clear timeline before starting.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients globally. Communication is handled via WhatsApp, email, or video calls. Payments are accepted via bank transfer, PayPal, and other international methods.",
  },
  {
    q: "Will I own the source code after the project?",
    a: "Absolutely. Once the project is fully paid, you receive 100% ownership of the source code, design files, and all project assets. No strings attached.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer ongoing maintenance, bug fixes, feature updates, and technical support after launch. We have monthly support packages available for long-term clients.",
  },
  {
    q: "Can you integrate AI into my existing product?",
    a: "Yes. We specialize in integrating AI features — chatbots, automation, recommendations, computer vision, and more — into existing platforms without rebuilding from scratch.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via the contact form or WhatsApp. We'll schedule a free discovery call, understand your needs, and send you a detailed proposal within 24–48 hours.",
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`glow-card rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 ${open ? "border-[#4f8aff]/30" : ""}`}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[#4f8aff]/40 text-sm font-bold flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-white font-medium text-base">{faq.q}</h3>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 text-white/40"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      {open && (
        <p className="text-white/40 text-sm leading-relaxed mt-4 pl-10">{faq.a}</p>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-2"
        sphere2Class="about-gradient-sphere about-sphere-1"
      />
      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="FAQ"
          number="08"
          text="Answers to the most common questions"
        />
        <div className="md:mt-20 mt-10 max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm mb-4">Still have questions?</p>
          <a
            href="https://wa.me/923103581426"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/10 border border-green-500/25 hover:bg-green-500/20 text-green-400 hover:text-green-300 text-sm transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1 1 12 21.818z"/>
            </svg>
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

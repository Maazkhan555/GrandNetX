import { useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const SERVICE_ID = "service_kohxfqe";
const TEMPLATE_ID = "template_e9u1u8j";
const PUBLIC_KEY = "f30W-I8KJaxffRDZ6";
const WA_NUMBER = "923103581426";

const services = [
  "Web Development",
  "Mobile App",
  "AI & Automation",
  "UI/UX Design",
  "Digital Marketing",
  "Branding & Graphic Design",
  "Video Production",
  "Shopify / E-Commerce",
  "Cloud & DevOps",
  "Cybersecurity",
  "Full Product (End-to-End)",
  "Other / Not Sure",
];

const budgets = [
  { label: "Under $300", value: "Under $300" },
  { label: "$300 – $700", value: "$300–$700" },
  { label: "$700 – $1,500", value: "$700–$1,500" },
  { label: "$1,500 – $3,000", value: "$1,500–$3,000" },
  { label: "$3,000 – $7,000", value: "$3,000–$7,000" },
  { label: "$7,000+", value: "$7,000+" },
  { label: "Flexible / Discuss", value: "Flexible" },
];

const timelines = [
  "ASAP (1–2 weeks)",
  "1 Month",
  "2–3 Months",
  "3–6 Months",
  "No Rush",
];

const Pricing = () => {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.whatsapp.trim()) e.whatsapp = "WhatsApp number is required";
    if (!form.service) e.service = "Please select a service";
    if (!form.budget) e.budget = "Please select a budget range";
    if (!form.timeline) e.timeline = "Please select a timeline";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMessage = () =>
    `Hi GrandNetX! 👋\n\n` +
    `*Name:* ${form.name}\n` +
    `*WhatsApp:* ${form.whatsapp}\n` +
    `*Service Needed:* ${form.service}\n` +
    `*Budget:* ${form.budget}\n` +
    `*Timeline:* ${form.timeline}\n` +
    (form.description ? `*Details:* ${form.description}\n` : "") +
    `\nPlease send me a quote. Thank you!`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Send via EmailJS
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: "budget-estimator@grandnetx.com",
          from_phone: form.whatsapp,
          subject: `Budget Request: ${form.service} — ${form.budget}`,
          message: buildMessage(),
        },
        PUBLIC_KEY
      );
    } catch (_) {
      // silently continue — WhatsApp redirect still works
    }

    setLoading(false);
    setSent(true);

    // Open WhatsApp with pre-filled message
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(waUrl, "_blank");
  };

  const inputCls =
    "w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-black placeholder:text-black/25 focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all duration-200";
  const labelCls = "block text-black/60 text-xs font-semibold tracking-widest uppercase mb-2";
  const errCls = "text-red-400 text-xs mt-1 block";

  return (
    <section id="pricing" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container mx-auto relative z-10">
        <TitleHeader
          title="Get a Quote"
          number="08"
          text="Tell us your budget — we'll build around it"
        />

        <div className="mt-14 md:mt-20 max-w-3xl mx-auto">
          {/* Info strip */}
          <div className="bg-[#0a0a0a] rounded-2xl px-7 py-5 flex flex-col md:flex-row md:items-center gap-4 mb-8 reveal cinematic-stripe">
            <div className="flex-1">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-1">How it works</p>
              <p className="text-white font-semibold text-base">Fill the form → We contact you on WhatsApp within 2 hours</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/40 text-sm">Free. No commitment.</span>
            </div>
          </div>

          {sent ? (
            <div className="glow-card rounded-3xl p-12 text-center reveal">
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-black font-bold text-2xl mb-2">Request Sent!</h3>
              <p className="text-black/40 text-sm mb-6">
                WhatsApp opened with your details. If it didn't open,{" "}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black underline underline-offset-2"
                >
                  click here
                </a>.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", whatsapp: "", service: "", budget: "", timeline: "", description: "" }); }}
                className="btn-secondary text-sm px-6 py-2.5"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glow-card rounded-3xl p-8 md:p-10 flex flex-col gap-6 reveal">

              {/* Name + WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={inputCls}
                  />
                  {errors.name && <span className={errCls}>{errors.name}</span>}
                </div>
                <div>
                  <label className={labelCls}>WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={form.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                    className={inputCls}
                  />
                  {errors.whatsapp && <span className={errCls}>{errors.whatsapp}</span>}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className={labelCls}>What service do you need?</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => set("service", s)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                        form.service === s
                          ? "bg-black text-white border-black"
                          : "bg-white text-black/50 border-black/10 hover:border-black/25 hover:text-black"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {errors.service && <span className={errCls}>{errors.service}</span>}
              </div>

              {/* Budget */}
              <div>
                <label className={labelCls}>Your Budget Range</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b.value}
                      onClick={() => set("budget", b.value)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                        form.budget === b.value
                          ? "bg-black text-white border-black"
                          : "bg-white text-black/50 border-black/10 hover:border-black/25 hover:text-black"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
                {errors.budget && <span className={errCls}>{errors.budget}</span>}
              </div>

              {/* Timeline */}
              <div>
                <label className={labelCls}>Timeline</label>
                <div className="flex flex-wrap gap-2">
                  {timelines.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => set("timeline", t)}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                        form.timeline === t
                          ? "bg-black text-white border-black"
                          : "bg-white text-black/50 border-black/10 hover:border-black/25 hover:text-black"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {errors.timeline && <span className={errCls}>{errors.timeline}</span>}
              </div>

              {/* Description */}
              <div>
                <label className={labelCls}>Brief Description <span className="normal-case text-black/25 font-normal">(optional)</span></label>
                <textarea
                  placeholder="Tell us a bit about your project idea..."
                  rows={3}
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-black/85 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1 1 12 21.818z"/>
                    </svg>
                    Send via WhatsApp & Email
                  </>
                )}
              </button>

              <p className="text-center text-black/25 text-xs">
                Your details will be sent directly to our WhatsApp and email. We respond within 2 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

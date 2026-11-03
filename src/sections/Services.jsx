import { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { servicesList } from "../constants";

const serviceIcons = {
  software: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8l3 3-3 3M13 14h4" /></svg>,
  ai: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" /><circle cx="9" cy="9" r="1" fill="currentColor" /><circle cx="15" cy="9" r="1" fill="currentColor" /></svg>,
  web: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  design: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" /></svg>,
  video: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="m22 8-6 4 6 4V8z" /><rect x="2" y="6" width="14" height="12" rx="2" /></svg>,
  marketing: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  branding: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  automation: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="3" /></svg>,
  cloud: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
  security: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
  data: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  product: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
};

const ServiceCard = ({ service, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`story-card rounded-2xl p-5 cursor-pointer ${open ? "shadow-lg" : ""}`}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center text-black/50">
            {serviceIcons[service.id]}
          </div>
          <div>
            <h3 className="text-black font-semibold text-sm leading-tight">{service.title}</h3>
            <p className="text-black/35 text-xs mt-0.5 line-clamp-1">{service.desc}</p>
          </div>
        </div>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-300 text-black/25 ${open ? "rotate-45 bg-black text-white border-black" : ""}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      {open && (
        <div className="mt-4 pt-4 border-t border-black/5">
          <p className="text-black/45 text-sm leading-relaxed mb-3">{service.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full border border-black/8 text-black/40 font-medium">{tag}</span>
            ))}
          </div>
          <p className="text-black/25 text-xs font-mono">{service.tech}</p>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative md:px-0 px-5 bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres sphere1Class="about-gradient-sphere about-sphere-1" sphere2Class="about-gradient-sphere about-sphere-2" />
      <div className="container mx-auto relative z-10">
        <TitleHeader title="Our Services" number="03" text="Everything your business needs — under one roof" />

        {/* Stats banner */}
        <div className="mt-10 bg-black rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 reveal cinematic-stripe">
          <div className="flex-1">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Full Spectrum</p>
            <h2 className="text-white text-xl md:text-2xl font-bold">12 Service Categories. One Company.</h2>
          </div>
          <div className="flex gap-8 flex-shrink-0">
            {[["12+", "Categories"], ["100+", "Sub-services"], ["1", "Team"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-white text-3xl font-bold">{n}</p>
                <p className="text-white/25 text-xs mt-1 tracking-widest uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          {servicesList.map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="text-black/25 text-sm mb-4">Not sure what you need? Let&apos;s talk.</p>
          <a href="#contact" className="btn-primary inline-flex">
            Get a Free Consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

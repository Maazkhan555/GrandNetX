import { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { servicesList } from "../constants";

const serviceIcons = {
  software: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 8l3 3-3 3M13 14h4" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="9" r="1" fill="currentColor" />
      <path d="M9 13s1 2 3 2 3-2 3-2" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="10.5" r="2.5" />
      <circle cx="8.5" cy="7.5" r="2.5" />
      <circle cx="6.5" cy="12.5" r="2.5" />
      <path d="M12 22C6.5 22 2 17.5 2 12c0-1.6.4-3.1 1-4.5" />
      <path d="M22 12c0 5.5-4.5 10-10 10" />
      <path d="M10.5 16.5 8 22l4-2 4 2-2.5-5.5" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="m22 8-6 4 6 4V8z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  ),
  marketing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  product: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};

const ServiceCard = ({ service }) => {
  const [open, setOpen] = useState(false);
  const icon = serviceIcons[service.id];

  return (
    <div
      className="glow-card rounded-2xl p-6 cursor-pointer transition-all duration-300 group"
      style={{ borderColor: open ? `${service.color}40` : undefined }}
      onClick={() => setOpen((v) => !v)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${service.color}18`, color: service.color }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg leading-tight">{service.title}</h3>
            <p className="text-white/40 text-sm mt-0.5 line-clamp-1">{service.desc}</p>
          </div>
        </div>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{ background: `${service.color}18`, color: service.color, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      {/* Expanded */}
      {open && (
        <div className="mt-5 pt-5 border-t border-white/5">
          <p className="text-white/60 text-sm leading-relaxed mb-4">{service.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border font-medium"
                style={{ borderColor: `${service.color}30`, color: service.color, background: `${service.color}0d` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-white/30 flex-shrink-0">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <p className="text-white/30 text-xs">{service.tech}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="Our Services"
          number="03"
          text="Everything your business needs — under one roof"
        />

        {/* Intro strip */}
        <div className="mt-10 glow-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex-1">
            <h2 className="gradient-title text-2xl font-bold mb-1">12 Service Categories. One Company.</h2>
            <p className="text-white/40 text-sm">
              GrandNetX delivers end-to-end digital solutions — from AI and software development to branding,
              marketing, and cloud deployment. Click any service to explore what we offer.
            </p>
          </div>
          <div className="flex gap-6 flex-shrink-0">
            <div className="text-center">
              <p className="gradient-title-accent text-3xl font-bold">12+</p>
              <p className="text-white/40 text-xs mt-1">Categories</p>
            </div>
            <div className="text-center">
              <p className="gradient-title-accent text-3xl font-bold">100+</p>
              <p className="text-white/40 text-xs mt-1">Sub-services</p>
            </div>
            <div className="text-center">
              <p className="gradient-title-accent text-3xl font-bold">1</p>
              <p className="text-white/40 text-xs mt-1">Team</p>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm mb-4">Not sure what you need? Let&apos;s talk.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#4f8aff]/10 border border-[#4f8aff]/30 hover:bg-[#4f8aff]/20 hover:border-[#4f8aff]/60 text-white/80 hover:text-white text-sm transition-all duration-300"
          >
            Get a Free Consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

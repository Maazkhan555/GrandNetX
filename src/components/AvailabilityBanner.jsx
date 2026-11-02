import { useState } from "react";

const AvailabilityBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="availability-banner w-full bg-black dark:bg-white flex items-center justify-center gap-3 px-4 py-2.5 relative z-[60]">
      {/* Animated pulse dot */}
      <span className="relative flex-shrink-0">
        <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>

      {/* Message */}
      <p className="text-white dark:text-black text-xs font-medium tracking-wide text-center">
        <span className="opacity-60">We&apos;re currently</span>
        {" "}<span className="font-bold">Open for New Projects</span>{" "}
        <span className="opacity-60">— Average response time:</span>
        {" "}<span className="font-bold">2 hours</span>
      </p>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-white/60 dark:text-black/60 hover:text-white dark:hover:text-black border border-white/20 dark:border-black/20 hover:border-white/50 dark:hover:border-black/50 px-3 py-1 rounded-full transition-all duration-200 flex-shrink-0"
      >
        Start a project
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </a>

      {/* Close */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-white/40 dark:text-black/40 hover:text-white dark:hover:text-black transition-colors duration-150"
        aria-label="Dismiss"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default AvailabilityBanner;

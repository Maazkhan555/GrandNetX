import { useEffect, useRef, useState } from "react";
import { slides } from "../constants";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const itemRef = useRef(null);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  // Pixel-based translation — no vw math, works on all screens
  useEffect(() => {
    if (!itemRef.current || !trackRef.current) return;
    const itemW = itemRef.current.offsetWidth;
    const gap = window.innerWidth * 0.03;
    trackRef.current.style.transform = `translateX(-${current * (itemW + gap)}px)`;
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative">
      <div className="w-full relative lg:h-[62vh] md:h-[42vh] h-[55vh] overflow-hidden">
        <div className="carousel-gradient-left-box md:w-48 w-12 h-full absolute bottom-0 left-0 z-20 pointer-events-none" />
        <div className="carousel-gradient-right-box md:w-48 w-12 h-full absolute bottom-0 right-0 z-20 pointer-events-none" />

        <div className="absolute inset-0 flex items-center pl-[20vw] md:pl-[22vw]">
          <div
            ref={trackRef}
            className="flex gap-[3vw] h-full"
            style={{ transition: "transform 0.75s cubic-bezier(0.23,1,0.32,1)", willChange: "transform" }}
          >
            {slides.map((slide, index) => (
              <div
                ref={index === 0 ? itemRef : null}
                key={slide.id}
                className="w-[60vw] h-full flex-none relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setCurrent(index)}
                style={{ opacity: index === current ? 1 : 0.55, transition: "opacity 0.4s ease" }}
              >
                {slide.type === "video" ? (
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
                      {slide.category}
                    </span>
                    {slide.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="hidden md:inline text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/8">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                        <div className="w-px h-4 bg-white/20" />
                        <span className="text-white font-semibold text-sm">{slide.title}</span>
                      </div>
                      {slide.tagline && (
                        <p className="text-white/45 text-xs mt-1 max-w-xs leading-relaxed hidden md:block">{slide.tagline}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase flex-shrink-0">
                      <span className="hidden md:block">Preview</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-end gap-3 md:pr-32 pr-5">
        <span className="text-black/25 text-xs tracking-widest uppercase mr-2">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border border-black/12 flex items-center justify-center hover:bg-black hover:border-black hover:text-white text-black/40 transition-all duration-300 active:scale-95"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-black/80 text-white transition-all duration-300 active:scale-95"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-1.5 bg-black" : "w-1.5 h-1.5 bg-black/15 hover:bg-black/30"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

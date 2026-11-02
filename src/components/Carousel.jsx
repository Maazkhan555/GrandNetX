import { useState } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentSlide * 63}vw`,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-full relative lg:h-[62vh] md:h-[42vh] h-[55vh]">
        <div className="carousel-gradient-left-box md:w-48 w-12 h-full absolute bottom-0 left-0 z-20" />
        <div className="carousel-gradient-right-box md:w-48 w-12 h-full absolute bottom-0 right-0 z-20" />
        <div className="absolute w-full -left-[43vw] top-0">
          <div className="flex w-full lg:h-[62vh] md:h-[42vh] h-[55vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div className="slider-item w-[60vw] h-full flex-none relative rounded-2xl overflow-hidden" key={index}>
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
                  <img src={slide.src} alt={slide.title} className="w-full h-full object-cover object-center" />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                    <div className="w-px h-4 bg-white/20" />
                    <span className="text-white/80 text-sm font-medium">{slide.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                    <span className="hidden md:block">Preview</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
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
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full border border-black/12 flex items-center justify-center hover:bg-black hover:border-black hover:text-white text-black/40 transition-all duration-300 active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-black/80 text-white transition-all duration-300 active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

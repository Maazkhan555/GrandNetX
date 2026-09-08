import { useState, useRef } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const total = slides.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + total) % total);

  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentSlide * 63}vw`,
      duration: 0.9,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      {/* Carousel Track */}
      <div className="w-full relative lg:h-[62vh] md:h-[42vh] h-[60vh]">
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20 pointer-events-none" />
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20 pointer-events-none" />

        <div className="absolute w-full -left-[43vw] top-0">
          <div className="flex w-full lg:h-[62vh] md:h-[42vh] h-[60vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div
                className="slider-item w-[60vw] h-full flex-none relative group overflow-hidden rounded-xl border border-white/5"
                key={slide.id}
              >
                {/* Video or image */}
                {slide.video ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={slide.video}
                    poster={slide.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                )}

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Bottom info bar */}
                <div className="absolute w-full bottom-0 left-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-5 pt-8 pb-4 z-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {slide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-xs px-2 py-0.5 rounded-full border border-blue-50/30 text-blue-50/80 bg-blue-300/10 font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">
                        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </p>
                      <p className="md:text-xl text-base text-white font-semibold leading-tight">
                        {slide.title}
                      </p>
                      <p className="text-white/50 text-xs md:text-sm mt-1 hidden md:block max-w-[80%]">
                        {slide.description}
                      </p>
                    </div>

                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-50/10 hover:bg-blue-50/20 border border-blue-50/20 hover:border-blue-50/50 text-white/80 hover:text-white text-xs md:text-sm px-3 py-2 rounded-lg transition-all duration-300 shrink-0"
                    >
                      <span className="hidden md:inline">View Project</span>
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow"
                        className="md:size-4 size-4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between items-center md:px-32 px-5">
        {/* Progress dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-8 bg-blue-50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="rounded-full cursor-pointer bg-white/5 border border-white/10 hover:bg-blue-50/20 hover:border-blue-50/40 active:scale-90 transition-all w-11 h-11 flex items-center justify-center"
          >
            <img src="/images/CaretLeft.svg" alt="left" className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full cursor-pointer bg-white/5 border border-white/10 hover:bg-blue-50/20 hover:border-blue-50/40 active:scale-90 transition-all w-11 h-11 flex items-center justify-center"
          >
            <img src="/images/CaretRight.svg" alt="right" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

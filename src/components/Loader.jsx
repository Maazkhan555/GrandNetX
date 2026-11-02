import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      const loader = document.querySelector(".loader-screen");
      if (loader) {
        gsap.to(loader, { y: "-100%", duration: 1.2, ease: "power3.inOut", delay: 0.3 });
      }
    }
  }, [progress]);

  return (
    <div className="loader-screen bg-black w-screen h-screen fixed top-0 left-0 z-[100] flex flex-col items-center justify-center gap-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10 object-cover opacity-80" />
        <span className="text-white font-bold text-xl tracking-widest">GRANDNETX</span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="text-white/25 text-xs tracking-widest font-medium">
        {Math.floor(progress)}%
      </span>
    </div>
  );
};

export default Loader;

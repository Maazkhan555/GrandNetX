import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      const loader = document.querySelector(".loader-screen");
      if (loader) {
        gsap.to(loader, { y: "-100%", duration: 1, ease: "power2.inOut" });
      }
    }
  }, [progress]);

  return (
    <div className="loader-screen bg-black-100 w-screen h-screen fixed top-0 left-0 z-[100]">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;

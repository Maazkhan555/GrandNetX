import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.borderColor = "#00e5ff";
      dot.style.opacity = "0";
    };

    const onLeaveLink = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(79,138,255,0.6)";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [class*='cursor-pointer']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#00e5ff",
          marginLeft: "-3px",
          marginTop: "-3px",
          transition: "opacity 0.2s",
          boxShadow: "0 0 8px #00e5ff, 0 0 16px #00e5ff55",
        }}
      />
      {/* ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(79,138,255,0.6)",
          marginLeft: "-16px",
          marginTop: "-16px",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, margin 0.3s",
          boxShadow: "0 0 12px rgba(79,138,255,0.2)",
        }}
      />
    </>
  );
};

export default CustomCursor;

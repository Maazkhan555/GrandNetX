import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef, lazy, Suspense } from "react";
import NotFound from "./components/NotFound";
import AvailabilityBanner from "./components/AvailabilityBanner";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

// Eagerly load above-the-fold
import Hero from "./sections/Hero";

// Lazy load everything below the fold
const About         = lazy(() => import("./sections/About"));
const Stats         = lazy(() => import("./sections/Stats"));
const StoryTimeline = lazy(() => import("./sections/StoryTimeline"));
const Founders      = lazy(() => import("./sections/Founders"));
const Services      = lazy(() => import("./sections/Services"));
const WhyUs         = lazy(() => import("./sections/WhyUs"));
const Process       = lazy(() => import("./sections/Process"));
const TechStack     = lazy(() => import("./sections/TechStack"));
const Projects      = lazy(() => import("./sections/Projects"));
const Pricing       = lazy(() => import("./sections/Pricing"));
const Testimonials  = lazy(() => import("./sections/Testimonials"));
const FAQ           = lazy(() => import("./sections/FAQ"));
const Contact       = lazy(() => import("./sections/Contact"));
const Footer        = lazy(() => import("./components/Footer"));
const Sidebar       = lazy(() => import("./components/SideBar"));
const StoryProgress = lazy(() => import("./components/StoryProgress"));

const Sep = () => <div className="section-sep" />;

const MainContent = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const h = bannerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--banner-height", `${h}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    if (bannerRef.current) ro.observe(bannerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <div ref={bannerRef}>
        <AvailabilityBanner />
      </div>
      <NavBar />
      <Suspense fallback={null}>
        <Sidebar />
        <Loader />
        <StoryProgress />
      </Suspense>
      <Hero />
      <Suspense fallback={null}>
        <Sep /><About />
        <Sep /><Stats />
        <StoryTimeline />
        <Sep /><Founders />
        <Sep /><Services />
        <Sep /><WhyUs />
        <Sep /><Process />
        <Sep /><TechStack />
        <Sep /><Projects />
        <Sep /><Pricing />
        <Sep /><Testimonials />
        <Sep /><FAQ />
        <Sep /><Contact />
        <Footer />
      </Suspense>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/923103581426"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1 1 12 21.818z"/>
        </svg>
      </a>
    </>
  );
};

const App = () => {
  useEffect(() => {
    const selectors = [".reveal", ".reveal-left", ".reveal-right", ".reveal-scale"];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const observe = () =>
      selectors.forEach((sel) =>
        document.querySelectorAll(sel).forEach((el) => io.observe(el))
      );
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <Router>
      <div className="bg-[#fafafa]">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

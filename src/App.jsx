import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import NotFound from "./components/NotFound";
import StoryProgress from "./components/StoryProgress";
import StoryTimeline from "./sections/StoryTimeline";
import AvailabilityBanner from "./components/AvailabilityBanner";
import {
  About, Contact, FAQ, Footer, Founders, Hero, Loader,
  NavBar, Process, Services, Sidebar, Stats, TechStack,
  Testimonials, Projects, WhyUs,
} from "./sections";

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
      <Sidebar />
      <Loader />
      <StoryProgress />
      <Hero />
      <Sep />
      <About />
      <Sep />
      <Stats />
      <StoryTimeline />
      <Sep />
      <Founders />
      <Sep />
      <Services />
      <Sep />
      <WhyUs />
      <Sep />
      <Process />
      <Sep />
      <TechStack />
      <Sep />
      <Projects />
      <Sep />
      <Testimonials />
      <Sep />
      <FAQ />
      <Sep />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    const selectors = [".reveal", ".reveal-left", ".reveal-right", ".reveal-scale"];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    selectors.forEach((sel) =>
      document.querySelectorAll(sel).forEach((el) => observer.observe(el))
    );
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="bg-[#fafafa] dark:bg-[#0a0a0a]">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

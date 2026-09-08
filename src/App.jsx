import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import CustomCursor from "./components/CustomCursor";
import ScrollReveal from "./components/ScrollReveal";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Loader,
  NavBar,
  Sidebar,
  Stats,
  TechStack,
  Projects,
} from "./sections";

const MainContent = () => (
  <>
    <CustomCursor />
    <NavBar />
    <Sidebar />
    <Loader />
    <Hero />
    <div className="section-divider" />
    <ScrollReveal><About /></ScrollReveal>
    <div className="section-divider" />
    <ScrollReveal delay={100}><TechStack /></ScrollReveal>
    <div className="section-divider" />
    <ScrollReveal delay={100}><Stats /></ScrollReveal>
    <div className="section-divider" />
    <ScrollReveal delay={100}><Projects /></ScrollReveal>
    <div className="section-divider" />
    <ScrollReveal delay={100}><Experience /></ScrollReveal>
    <div className="section-divider" />
    <ScrollReveal delay={100}><Contact /></ScrollReveal>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="bg-black-100">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import {
  About,
  Contact,
  FAQ,
  Footer,
  Founders,
  Hero,
  Loader,
  NavBar,
  Process,
  Services,
  Sidebar,
  Stats,
  TechStack,
  Testimonials,
  Projects,
  WhyUs,
} from "./sections";

const MainContent = () => (
  <>
    <NavBar />
    <Sidebar />
    <Loader />
    <Hero />
    <About />
    <Stats />
    <Founders />
    <Services />
    <WhyUs />
    <Process />
    <TechStack />
    <Projects />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

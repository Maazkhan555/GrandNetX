import TitleHeader from "../components/TitleHeader";
import Carousel from "../components/Carousel";
import GradientSpheres from "../components/GradientSpheres";

const Projects = () => {
  return (
    <section id="projects" className="w-full relative bg-[#fafafa] py-24 md:py-32">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />
      <div className="w-full relative z-10">
        <div className="container mx-auto md:px-0 px-5">
          <TitleHeader title="Our Projects" number="03" text="Explore what GrandNetX has built" />
        </div>
        <div className="mt-12 md:mt-16">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;

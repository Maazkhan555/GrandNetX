import TechIcon from "../components/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { iconsList } from "../constants";

const TechStack = () => {
  return (
    <section className="w-full bg-[#fafafa] py-24 md:py-32">
      <div className="container mx-auto md:px-0 px-5">
        <TitleHeader title="Tech Stack" number="02" text="Our go-to tools for crafting solutions" />
      </div>
      <div className="mt-12 md:mt-16 relative">
        <div className="tech-stack-gradient-left-box w-32 h-full absolute bottom-0 left-0 z-20" />
        <div className="tech-stack-gradient-right-box w-32 h-full absolute bottom-0 right-0 z-20" />
        <div className="marquee h-44">
          <div className="marquee-box md:gap-10 gap-5">
            {iconsList.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {iconsList.map((icon, index) => (
              <TechIcon key={`b-${index}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

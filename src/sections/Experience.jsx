import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { experienceList } from "../constants";

const Experience = () => {
  return (
    <section className="w-full h-full flex-center relative md:p-0 px-5" id="experience">
      <GradientSpheres
        sphere1Class="exp-gradient-sphere exp-sphere-1"
        sphere2Class="exp-gradient-sphere exp-sphere-2"
      />
      <div className="container w-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="Experience"
          number="04"
          text="My journey as a developer"
        />
        <div className="md:mt-20 mt-10 relative">
          {/* vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4f8aff]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experienceList.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* dot on timeline */}
                <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[#4f8aff] border-2 border-[#05030f] hidden md:block z-10" />

                {/* year side */}
                <div
                  className={`md:w-1/2 flex ${
                    index % 2 === 0 ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <div className="md:text-right">
                      <p className="text-[#4f8aff] text-sm tracking-widest uppercase font-medium">
                        {item.year}
                      </p>
                      <p className="text-white/30 text-sm mt-1">{item.company}</p>
                    </div>
                  ) : (
                    <div className="glow-card rounded-2xl p-6 md:max-w-sm w-full">
                      <h3 className="gradient-title text-xl font-semibold mb-2">{item.role}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-[#4f8aff]/20 text-[#4f8aff]/70 bg-[#4f8aff]/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* content side */}
                <div
                  className={`md:w-1/2 flex ${
                    index % 2 === 0 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <div className="glow-card rounded-2xl p-6 md:max-w-sm w-full">
                      <h3 className="gradient-title text-xl font-semibold mb-2">{item.role}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-[#4f8aff]/20 text-[#4f8aff]/70 bg-[#4f8aff]/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="md:text-left">
                      <p className="text-[#4f8aff] text-sm tracking-widest uppercase font-medium">
                        {item.year}
                      </p>
                      <p className="text-white/30 text-sm mt-1">{item.company}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

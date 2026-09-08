const TechIcon = ({ icon }) => {
  return (
    <div className="group flex-none flex flex-col items-center gap-2 marquee-item">
      <div
        className="md:w-32 md:h-32 w-20 h-20 bg-[#0e0c18] flex items-center justify-center
          rounded-2xl border border-white/5
          group-hover:border-[#4f8aff]/40
          group-hover:shadow-[0_0_24px_rgba(79,138,255,0.2)]
          group-hover:-translate-y-3
          transition-all duration-500"
      >
        <img
          src={icon.image}
          alt={icon.name}
          className="md:size-14 size-9 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <span className="text-[10px] text-white/0 group-hover:text-white/50 tracking-widest uppercase transition-colors duration-300">
        {icon.name}
      </span>
    </div>
  );
};

export default TechIcon;

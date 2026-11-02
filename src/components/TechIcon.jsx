const TechIcon = ({ icon }) => {
  return (
    <div className="flex-none md:w-28 md:h-28 w-20 h-20 bg-white border border-black/6 rounded-2xl flex items-center justify-center marquee-item hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-md hover:border-black/12">
      <img src={icon.image} alt={icon.name} className="md:size-12 size-9 opacity-70 hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default TechIcon;

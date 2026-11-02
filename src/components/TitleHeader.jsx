const TitleHeader = ({ title, number, text }) => {
  return (
    <div className="flex justify-between items-start reveal">
      <div>
        <div className="chapter-marker mb-3">
          <span className="chapter-marker-line" />
          <span className="chapter-marker-text">{number} — {text}</span>
        </div>
        <h1 className="font-bold md:text-6xl text-4xl text-black uppercase tracking-tight leading-none">
          {title}
        </h1>
      </div>
      <div className="items-end gap-3 hidden md:flex flex-col flex-shrink-0">
        <p className="text-black/6 text-8xl font-bold leading-none">{number}</p>
        <div className="w-16 border-t border-black/8" />
      </div>
    </div>
  );
};

export default TitleHeader;

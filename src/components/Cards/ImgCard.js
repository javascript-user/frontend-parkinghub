function ImgCard({ src, alt, title, summary }) {
  return (
    <div className="overflow-hidden rounded-xl lg:flex lg:flex-col bg-white border border-color-border shadow-sm hover:shadow-lg hover:border-color-primary transition duration-300 h-full group">
      <div className="overflow-hidden">
        <img className="object-cover w-full h-48 lg:h-56 group-hover:scale-105 transition duration-300" src={src} alt={alt} />
      </div>
      <div className="p-6 lg:flex lg:flex-col lg:justify-evenly lg:flex-1">
        {title && <h3 className="mb-3 text-xl font-bold text-color-dark font-Poppins">{title}</h3>}
        {summary && <p className="text-base text-color-accent leading-relaxed">
          {summary}
        </p>}
      </div>
    </div>
  );
}

export default ImgCard;

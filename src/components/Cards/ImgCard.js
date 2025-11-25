function ImgCard({ src, alt, title, summary }) {
  return (
    <div className="overflow-hidden rounded-2xl lg:flex">
      <img className="object-contain w-full h-[200px]" src={src} alt={alt} />
      <div className="p-4 lg:flex lg:flex-col lg:justify-evenly">
        <h3 className="mb-2 text-lg font-semibold text-center">{title}</h3>
        <p className="text-sm text-center text-gray-600 md:text-start">
          {summary}
        </p>
      </div>
    </div>
  );
}

export default ImgCard;

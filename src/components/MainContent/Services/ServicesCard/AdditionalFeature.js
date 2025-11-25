import ev from "../../../../assets/images/ev.webp";
import review from "../../../../assets/images/review.webp";
import ImgCard from "../../../Cards/ImgCard";

function ImgsCardData() {
  const cardList = [
    {
      src: ev,
      alt: "ev",
    },
    {
      src: review,
      alt: "review",
    },
  ];

  const renderCardList = cardList.map((card, index) => (
    <ImgCard key={index} src={card.src} alt={card.alt} />
  ));

  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-3 mx-auto md:grid-cols-2 md:w-3/5 md:px-4 lg:w-5/6">
      {renderCardList}
    </div>
  );
}

export default ImgsCardData;

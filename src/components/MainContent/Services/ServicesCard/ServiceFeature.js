import carefree from "../../../../assets/images/CardsImg/carefree.svg";
import contactless from "../../../../assets/images/CardsImg/contactless.svg";
import savings from "../../../../assets/images/CardsImg/savings.svg";
import ImgCard from "../../../Cards/ImgCard";

function ImgCardData() {
  const cardList = [
    {
      src: carefree,
      alt: "carefree",
    },
    {
      src: contactless,
      alt: "contactless",
    },
    {
      src: savings,
      alt: "savings",
    },
  ];

  const renderCardList = cardList.map((card, index) => (
    <ImgCard key={index} src={card.src} alt={card.alt} />
  ));

  return (
    <div className="grid w-full grid-cols-1 gap-4 px-4 py-4 mx-auto md:grid-cols-3 lg:w-10/12 lg:gap-x-8 lg:p-6">
      {renderCardList}
    </div>
  );
}

export default ImgCardData;

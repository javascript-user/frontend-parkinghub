import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const initialCards = [
  {
    id: 1,
    title: "Valet Services",
    subTitle: "Shopping Malls",
    summary: "Revenue Transparency",
    mainColor: "#f7931e",
  },
  {
    id: 2,
    title: "Efficient Operations",
    subTitle: "Hospitals",
    summary: "Stress-Free",
    mainColor: "#f7931e",
  },
  {
    id: 3,
    title: "Smart Parking",
    subTitle: "Educational Institutions",
    summary: "Rapid Entry & Exit",
    mainColor: "#01509a",
  },
  {
    id: 4,
    title: "Enhanced Security",
    subTitle: "Restaurants",
    summary: "Innovative Tech",
    mainColor: "#56b947",
  },
  {
    id: 5,
    title: "Parking Solutions",
    subTitle: "Co-working Space",
    summary: "Easy Mobility",
    mainColor: "#01509a",
  },
];

function TestimonialSlider() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 for desktop

  // 1. Detect screen size and set visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Mobile: 1 card
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Initialize the cards array with clones based on visibleCards
  useEffect(() => {
    const clones = [];
    for (let i = 0; i < visibleCards; i++) {
      clones.push(initialCards[i]);
    }
    setCards([...initialCards, ...clones]);
    setCurrentIndex(0); // Reset index when visibleCards changes
  }, [visibleCards]);

  // 3. Control the automatic sliding
  useEffect(() => {
    const slideInterval = 3000;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, slideInterval);

    return () => clearInterval(timer);
  }, []);

  // 4. Handle the seamless loop when the transition ends
  const handleTransitionEnd = () => {
    if (currentIndex >= initialCards.length) {
      setIsAnimating(false);
      setCurrentIndex(0);
    }
  };

  // 5. Re-enable animation for the next slide
  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex gap-4 md:gap-9 ${
          isAnimating ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(calc(-${
            currentIndex * (100 / visibleCards)
          }%))`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {cards.map((card, index) => (
          <div
            key={card.id + "-" + index}
            className="flex-shrink-0"
            style={{
              width: `calc(100% / ${visibleCards} - ${
                visibleCards === 1 ? "0px" : "2rem"
              })`,
            }}
          >
            <TestimonialCard
              title={card.title}
              subTitle={card.subTitle}
              summary={card.summary}
              mainColor={card.mainColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;

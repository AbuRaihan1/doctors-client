import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const InfoCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "Card 1",
      description: "This is the description for Card 1.",
      bgClass: "bg-gradient-to-r from-primary to-secondary ",
      img: clock,
    },
    {
      id: 2,
      name: "Card 2",
      description: "This is the description for Card 2.",
      bgClass: "bg-gray-800",
      img: marker,
    },
    {
      id: 3,
      name: "Card 3",
      description: "This is the description for Card 3.",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      img: phone,
    },
  ];

  return (
    <div
      className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-28`}
    >
      {cardsData.map((card) => (
        <InfoCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default InfoCards;

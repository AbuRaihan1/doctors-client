import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const InfoCards = () => {
  const cardsData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bgClass: "bg-gradient-to-r from-primary to-secondary ",
      img: clock,
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgClass: "bg-gray-800",
      img: marker,
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
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

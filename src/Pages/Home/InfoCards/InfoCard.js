import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, img, bgClass } = card;
  return (
    <div>
      <div
        className={`card md:card-side  min-h-[180px] bg-base-100 shadow-xl p-3  text-white  ${bgClass}`}
      >
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

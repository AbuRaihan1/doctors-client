import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, img, bgClass } = card;
  return (
    <div>
      <div
        className={`card card-side bg-base-100 shadow-xl px-3 h-32 text-white  ${bgClass}`}
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

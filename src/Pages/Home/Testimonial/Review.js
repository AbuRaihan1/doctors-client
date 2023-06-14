import React from "react";

const Review = ({ review }) => {
  const { name, location, img, description } = review;
  return (
    <div className="card shadow-2xl p-6">
      <div className="card-content">
        <p className="text-justify font-serif">{description}</p>

        <div className="buyerInfo flex gap-4 items-center mt-10">
          <img src={img} alt="" className="ring ring-primary ring-offset-2 w-12 h-12  rounded-full " />
          <div className="">
            <h3 className="text-2xl text-black">{name}</h3>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

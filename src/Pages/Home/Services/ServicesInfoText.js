import React from "react";
import babyImg from "../../../assets/images/treatment.png";
const ServicesInfoText = () => {
  return (
    <div className="py-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row space-x-6">
          <img
            src={babyImg}
            className="max-w-md lg:w-1/2 rounded-lg shadow-2xl w-full"
            alt="babyImg"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn primary-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfoText;

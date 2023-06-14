import React from "react";
import quote from "../../../assets/icons/quote.svg";
import Reviews from "./Reviews";
const Testimonial = () => {
  return (
    <section className="my-20">
      <div class="flex">
        <div class="flex-1">
          <p className="text-secondary">Testimonial</p>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div class="ml-auto">
          <img src={quote} alt="Quote" class="w-100 w-12 lg:w-24" />
        </div>
      </div>

      <Reviews />
    </section>
  );
};

export default Testimonial;

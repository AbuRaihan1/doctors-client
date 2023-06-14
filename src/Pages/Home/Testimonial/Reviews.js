import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
const Reviews = () => {

    const description = `Dr. Doctor's Name demonstrated exceptional professionalism and expertise throughout our consultation. They took the time to listen attentively to our concerns, allowing us to fully explain our symptoms and medical history. `
  const reviewsData = [
    {
      id: 1,
      description:description,
      img: people1,
      name: "Ashley Scrogy",
      location: "California",
    },
    {
      id: 2,
      description: description,
      img: people2,
      name: "Hamilton Jaka",
      location: "New work",
    },
    {
      id: 3,
      description: description,
      img: people3,
      name: "John Doe",
      location: "New Jersery",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {reviewsData.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;

import React from "react";
import Service from "./Service";
import serviceImg1 from "../../../assets/images/fluoride.png";
import serviceImg2 from "../../../assets/images/cavity.png";
import serviceImg3 from "../../../assets/images/whitening.png";
const Services = () => {
  const ServicesData = [
    {
      id: 1,
      img: serviceImg1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: serviceImg2,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: serviceImg3,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <>
      <div className="serviceTitle text-center py-16">
        <p className="text-secondary font-bold py-3">OUR SERVICES</p>
        <h2 className="text-5xl">Services We Provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-auto">
        {ServicesData.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </>
  );
};

export default Services;

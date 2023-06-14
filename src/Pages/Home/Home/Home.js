import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import ServicesInfoText from "../Services/ServicesInfoText";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import ContactUs from "../../ContactUs/ContactUs";
const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <ServicesInfoText />
      <MakeAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;

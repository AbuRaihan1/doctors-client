import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import ServicesInfoText from '../Services/ServicesInfoText'
import MakeAppointment from "../MakeAppointment/MakeAppointment";
const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <ServicesInfoText />
      <MakeAppointment />
    </div>
  );
};

export default Home;

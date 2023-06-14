import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import ServicesInfoText from '../Services/ServicesInfoText'
const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <ServicesInfoText />
      
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../../components/Header/Header";
import Brends from "../../components/Brends/Brends";
import Faq from "../../components/Faq/Faq";
import Global from "../../components/Global/Global";
import SuperCar from "../../components/SuperCar/SuperCar";
import Luxury from "../../components/Luxury/Luxury";
import Carousel from "../../components/Carousel/Carousel";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Brends />
      <Carousel />
      <Services />
      <Luxury />
      <Global />
      <SuperCar />
      <Faq />
      {/* <Location /> */}
    </div>
  );
};

export default Home;

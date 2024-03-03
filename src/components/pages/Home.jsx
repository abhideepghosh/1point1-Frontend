import React from "react";
import Navbar from "../ui/Navbar";
import ShuffleHero from "../ui/ShuffleHero";
import ServicesCarousel from "../ui/ServicesCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ShuffleHero />
      <ServicesCarousel />
    </div>
  );
};

export default Home;

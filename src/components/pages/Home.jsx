import React from "react";
import Navbar from "../ui/Navbar";
import ShuffleHero from "../ui/ShuffleHero";
import IndustriesCarousel from "../ui/IndustriesCarousel";
import NicheOfferings from "../ui/NicheOfferings";
import { DigitalTransformation } from "../ui/DigitalTransformation";
import TrippyScroll from "../ui/TrippyScroll";
import { ServicesV2 } from "../ui/ServicesV2";
import Contact from "../ui/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ShuffleHero />
      {/* <TrippyScroll /> */}
      <ServicesV2 />
      {/* <ServicesCarousel /> */}
      <NicheOfferings />
      <DigitalTransformation />
      <IndustriesCarousel />
      <Contact />
    </div>
  );
};

export default Home;

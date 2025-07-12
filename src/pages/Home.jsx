import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Hero from "../sections/Home/Hero";
import Testimonials from "../sections/Home/Testimonials";
import Facilities from "../sections/Home/Facilities";
import ChooseUs from "../sections/Home/ChooseUs";
import Faq from "../sections/Home/Faq";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Facilities/> 
      <Testimonials />
      <ChooseUs/>
      <Faq/>
      <Footer />
    </>
  );
};

export default Home;

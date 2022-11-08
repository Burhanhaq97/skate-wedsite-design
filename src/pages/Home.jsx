import React from "react";
import Header from "../component/Header";
import Card from "../component/Card";
import Performance from "../component/Performance";
import Video from "../component/Video";
import Number from "../component/Number";
import Team from "../component/Team";
import PriceSection from "../component/PriceSection";
import FAQSection from "../component/FAQSection";
import Testimonial from "../component/Testimonial";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Card />
      <Performance />
      <Video />
      <Number />
      <Team />
      <PriceSection />
      <FAQSection />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

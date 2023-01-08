import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import team from "../assets/team.webp";
import team2 from "../assets/team2.webp";
import team3 from "../assets/team3.webp";

const Testimonial = () => {
  return (
    <>
      <section className="section testimonial-section" id="testimonial">
        <div className="section-heading testimonial-heading">
          <h2>TESTIMONIAL</h2>
        </div>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialCard img={team} name="Robert Steward" />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={team2} name="Ricky Fisher" />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={team3} name="Melisa Griffin" />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={team} name="Robert Steward" />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={team2} name="Ricky Fisher" />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard img={team3} name="Melisa Griffin" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;

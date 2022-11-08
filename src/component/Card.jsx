import React from "react";
import cardData from "./CardsData";

const ServiceCard = (props) => {
  const { img, title, para } = props;
  return (
    <div className="service-card">
      <img src={img} alt="service-card-icon" className="service-card-icon" />
      <h3 className="service-card-heading"> {title} </h3>
      <p className="service-card-para"> {para} </p>
    </div>
  );
};

const Card = () => {
  return (
    <>
      <section className="section service-section" id="service">
        <div className="service-section-top">
          <h2 className="section-heading">Services</h2>
          <p className="service-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at
            delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos
            rerum inventore.
          </p>
        </div>
        <div className="service-section-card">
          {cardData.map((val) => {
            const { id, img, title, para } = val;
            return <ServiceCard key={id} img={img} title={title} para={para} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Card;

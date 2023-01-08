import React from "react";
import PriceCard from "./PriceCard";

const PriceSection = () => {
  return (
    <>
      <section className="section price-section ">
        <div className="price-section-heading">
          <h2 className="section-heading">SESSION PRICING </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            quae temporibus tenetur vitae iusto suscipit alias, laudantium,
            porro unde tempora.
          </p>
        </div>
        <div className="price-section-card">
          <PriceCard cardHeading="Basic" price="47" />
          <PriceCard cardHeading="PREMIUM" price="200" />
          <PriceCard cardHeading="PROFESSIONAL" price="750" />
        </div>
      </section>
    </>
  );
};

export default PriceSection;

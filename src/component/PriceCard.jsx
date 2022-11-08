import React from "react";

const PriceCard = (props) => {
  return (
    <>
      <div className="price-card">
        <h3>{props.cardHeading}</h3>
        <div className="price-div">
          <span>
            <span>${props.price}</span>/ year
          </span>
        </div>
        <ul className="performance-content">
          <li>Officia quaerat eaque neque</li>
          <li>Possimus aut consequuntur incidunt</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipisicing elit</li>
          <li>Dolorum esse odio quas architecto sint</li>
        </ul>
        <button className="btn">Buy Now</button>
      </div>
    </>
  );
};

export default PriceCard;

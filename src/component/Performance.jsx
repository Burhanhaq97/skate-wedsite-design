import React from "react";
import sectionImg from "../assets/section-img.webp"
import sectionImg2 from "../assets/section-img2.webp"

const Performance = () => {
  return (
    <>
      <section className="section section-performance" id="about">
        <div className="performance-img">
          <img src={sectionImg} alt="performance-img" />
        </div>
        <div className="performance-content">
          <h2 className="section-heading">MY BEST PERFORMANCE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id
            dignissimos nemo minus perspiciatis ullam itaque voluptas iure vero,
            nesciunt unde odit aspernatur distinctio, maiores facere officiis.
            Cum, esse, iusto?
          </p>
          <p>
            Minus perspiciatis ullam itaque voluptas iure vero, nesciunt unde
            odit aspernatur distinctio, maiores facere officiis. Cum, esse,
            iusto?
          </p>
          <ul className="performance-content">
            <li>Lorem ipsum dolor.</li>
            <li>Quod, amet. Provident.</li>
            <li>Quo, adipisci, quis.</li>
            <li>Cumque perspiciatis, blanditiis?</li>
          </ul>
        </div>
      </section>

       {/* performance section part 2  */}

<section className="section section-performance">
  <div className="performance-content">
    <h2 className="section-heading">MY BEST MENTOR</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id
      dignissimos nemo minus perspiciatis ullam itaque voluptas iure vero,
      nesciunt unde odit aspernatur distinctio, maiores facere officiis.
      Cum, esse, iusto?
    </p>
    <p>
      Minus perspiciatis ullam itaque voluptas iure vero, nesciunt unde odit
      aspernatur distinctio, maiores facere officiis. Cum, esse, iusto?
    </p>
    <ul className="performance-content">
      <li>Lorem ipsum dolor.</li>
      <li>Quod, amet. Provident.</li>
      <li>Quo, adipisci, quis.</li>
      <li>Cumque perspiciatis, blanditiis?</li>
    </ul>
  </div>
  <div className="performance-img">
    <img src={sectionImg2} alt="performance-img"/>
  </div>
</section>

    </>
  );
};

export default Performance ;

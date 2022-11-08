import React from "react";
import faqData from "./faqData";

const FAQSection = () => {
  return (
    <>
      <section className="section faq-section">
        <div className="section-heading">
          <h2 className="question-heading">FREQUENTLY ASK QUESTIONS</h2>
        </div>
        <div className="question-section">
          {faqData.map((val) => {
            return (
              <div className="question" key={val.id}>
                <h2> {val.question} </h2>
                <p> {val.answer} </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FAQSection;

import React from "react";

const Contact = () => {
  const formSubmit = (event)=>{
    event.preventDefault();
  }
  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="heading-para">GET IN TOUCH</p>
          <h2>CONTACT ME</h2>
        </div>
         <div className="form-section">
          <div className="form">
            <form onSubmit={formSubmit} >
              <input type="text" name="" placeholder="First name" />
              <input type="text" name="" placeholder="Last name" /> <br />
              <input type="email" name="" placeholder="Email address" /> <br />
              <textarea
                name=""
                placeholder="Write your message"
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <div className="form-btn">
                <button className="btn">
                  Sent Message
                </button>
              </div>
            </form>
          </div>

          <div className="form-desc">
            <h2 className="section-heading">
              NEED TO KNOW MORE ON DETAILS. GET IN TOUCH
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              distinctio! Harum quibusdam nisi, illum nulla aspernatur aut
              quidem aperiam, quae non tempora recusandae voluptatibus fugit
              impedit.
            </p>
            <button className="btn">Get Start</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

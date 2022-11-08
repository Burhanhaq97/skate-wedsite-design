import React from 'react'


const TestimonialCard = (props) => {
  return (
    <>
         <div className="testimonial-card">
          <div className="card-heading">
            <img className="card-img" src={props.img} alt="client image" />
            <h3 className="name">{props.name}</h3>
          </div>
          <div className="card-para">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat
              quibusdam tempore similique doloremque veritatis et cupiditate,
              maiores cumque repudiandae explicabo tempora deserunt
              consequuntur?”
            </p>
          </div>
        </div>
    </>
  )
}




const TestimonialCard2 = (props) => {
  return (
    <>
         <div className="testimonial-card">
          <div className="card-para">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolorem, fugit excepturi sapiente voluptatum nulla odio quaerat
              quibusdam tempore similique doloremque veritatis et cupiditate,
              maiores cumque repudiandae explicabo tempora deserunt
              consequuntur?”
            </p>
          </div>
          <div className="card-heading">
            <img className="card-img" src={props.img} alt="client image" />
            <h3 className="name"> {props.name} </h3>
          </div>
        </div>
    </>
  )
}

export default TestimonialCard
export {TestimonialCard2}

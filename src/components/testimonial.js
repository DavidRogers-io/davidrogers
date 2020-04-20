import React from "react"
import "./testimonial.css"

const Testimonial = props => (
  <div className="Testimonial">
    <div className="TestimonialGroup">
      <h2>Testimonials</h2>
      <div>
        <div className="Testimony">
          <a href={props.linkedin1} id="TestimonyName">
            {props.name1}
          </a>
          <p id="TestimonyPosition">{props.position1}</p>
          <p>
            {props.testimony1} <a href={props.linkedin}>read more</a>
          </p>
        </div>
        <div className="Testimony">
          <a href={props.linkedin2} id="TestimonyName">
            {props.name2}
          </a>
          <p id="TestimonyPosition">{props.position2}</p>
          <p>
            {props.testimony2} <a href={props.linkedin}>read more</a>
          </p>
        </div>
        <div className="Testimony">
          <a href={props.linkedin3} id="TestimonyName">
            {props.name3}
          </a>
          <p id="TestimonyPosition">{props.position3}</p>
          <p>
            {props.testimony3} <a href={props.linkedin}>read more</a>
          </p>
        </div>
        <a className="Button" href={props.linkedin}>
          Read More
        </a>
      </div>
    </div>
  </div>
)

export default Testimonial

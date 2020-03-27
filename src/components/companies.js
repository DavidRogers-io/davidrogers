import React from "react"
import "./section.css"

const Section = props => (
  <div className="Section">
    <div className="SectionDetails">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </div>
)

export default Section

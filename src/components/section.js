import React from "react"
import "./section.css"

const Section = props => (
  <div className="Section">
    <div className="SectionDetails">
      <h2>{props.title}</h2>
      <div>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
      </div>
    </div>
  </div>
)

export default Section

import React from "react"
import { Link } from "gatsby"
import "./project.css"

const Project = props => (
  <div className="Project">
    <Link to={"/" + props.button + "/"}>
      <h2>{props.title}</h2>
    </Link>
    <div className="ProjectDetails">
      <h3>{props.description}</h3>
      <Link to={props.button}>View Case Study</Link>
    </div>
    <Link to={props.button}>
      <img src={props.image} alt="" />
    </Link>
  </div>
)

export default Project

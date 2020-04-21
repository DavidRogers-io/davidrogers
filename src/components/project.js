import React from "react"
import { Link } from "gatsby"
import Image from "..//components/image"
import "./project.css"

const Project = props => (
  <div className="Project">
    <Link to={"/" + props.button + "/"}>
      <h2>{props.title}</h2>
    </Link>
    <div className="ProjectDetails">
      <h3>{props.description}</h3>
      <Link to={"/" + props.button + "/"}>View Case Study</Link>
    </div>
    <Link to={props.button}>
      <img src={props.image} alt="View project case study" />
    </Link>
  </div>
)

export default Project

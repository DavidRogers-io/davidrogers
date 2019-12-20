import React from "react"
import { Link } from "gatsby"
import "./nav.css"
import Logo from "../images/logo.png"
import Resume from "../images/david_rogers_resume.pdf"

const Nav = props => (
  <div className="Nav">
    <Link to="/">
      <img className="Logo" src={Logo} alt="" />
    </Link>
    <div className="NavRight">
      <Link className="NavLink" to="/">
        Portfolio
      </Link>
      <Link className="NavLink" to="/about/">
        About
      </Link>
      <a className="NavLink" href={Resume}>
        Resume
      </a>
      <a className="NavLink" href="https://www.linkedin.com/in/davidrogerz/">
        Contact
      </a>
    </div>
  </div>
)

export default Nav

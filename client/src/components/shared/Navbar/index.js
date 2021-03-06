import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {

  const activeStyle = {
    color: "rgba(74,170,165,1)"
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" activeStyle={activeStyle}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeStyle={activeStyle}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

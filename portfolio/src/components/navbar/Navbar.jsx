import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const handleSideMenu = () => {
    const sidebar = document.querySelector(".side_menu");
    sidebar.style.display = "flex";
  };

  const closeSideMenu = () => {
    const sidebar = document.querySelector(".side_menu");
    sidebar.style.display = "none";
  };

  return (
    <div>
      <div className="navbar">
        <div className="welcome">Welcome</div>
        <div>
          <ul className="nav_components">
            <li><NavLink to="/" className="link" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" className="link" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/skills" className="link" activeClassName="active">Skills</NavLink></li>
            <li><NavLink to="/projects" className="link" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink></li>
          </ul>
        </div>
        <div className="side_menu_pre">
          <div className="hamburger_menu" onClick={handleSideMenu}>
            <FontAwesomeIcon icon={faBars} className="icon_nav" />
          </div>

          <ul className="side_menu">
            <FontAwesomeIcon icon={faXmark} onClick={closeSideMenu} className="icon_nav" />
            <li><NavLink to="/" className="link" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" className="link" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/skills" className="link" activeClassName="active">Skills</NavLink></li>
            <li><NavLink to="/projects" className="link" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

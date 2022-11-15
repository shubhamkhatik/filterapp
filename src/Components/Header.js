import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div style={{ display: "block" }}>
        <div className="first">
          <h1>
            {" "}
            <NavLink to="/">Video</NavLink>
          </h1>
        </div>
        <div className="second">
          {" "}
          <h1>
            <NavLink to="/Contact">Contact Us</NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

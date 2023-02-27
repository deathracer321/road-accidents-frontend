import React from "react";
import "../css/Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <div className="topnav">
        <span className="logo">Road Accidents</span>

        <Link className="active" to="/homepage/accidents">
          Accidents
        </Link>
        <Link className="active" to="/homepage/news">
          News
        </Link>
        <Link className="active" to="/homepage/contact">
          Contact
        </Link>
        <Link className="active" to="/homepage/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Homepage;

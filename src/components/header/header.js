import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const [widthScreen, setWidthScreen] = useState(0);

  window.addEventListener("resize", () => {
    setWidthScreen(window.innerWidth);
  });
  
  return (
    <div className="header">
      <h3>Weather App</h3>
      <p>{`${widthScreen}`}</p>
      <div className="links">
        <Link to="/">
          <i className="bx bxs-home"></i>
        </Link>
        <Link to="/">
          <i className="bx bxs-cog"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;

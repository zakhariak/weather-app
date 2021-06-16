import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h3>Weather App</h3>
      <div className="links">
        <Link>
          <i className="bx bxs-home"></i>
        </Link>
        <Link>
          <i className="bx bxs-cog"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;

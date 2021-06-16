import React from "react";

import "./search-box.scss";

const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search for a city..." />
      <button>
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

export default SearchBox;

import React from "react";
import { addCityName } from "../../actions";
import { connect } from "react-redux";
import "./search-box.scss";

const SearchBox = (props) => {
  const { addCityName } = props;

  function sendNameCity(e) {
    if (e.key === "Enter" || e.type === "click") {
      const cityName = document.getElementById("searchBox").value;
      document.getElementById("searchBox").value = "";
      if (cityName) {
        addCityName(cityName);
      }
    }
  }

  return (
    <div className="search-box">
      <input
        id="searchBox"
        type="text"
        placeholder="Search for a city..."
        onKeyDown={sendNameCity}
      />
      <button onClick={sendNameCity}>
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

const mapStateToProps = ({ cityName }) => {
  return { cityName };
};

const mapDispatchToProps = {
  addCityName,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

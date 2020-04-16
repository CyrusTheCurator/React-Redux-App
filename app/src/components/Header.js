import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import countryStrings from "../countryStrings";

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleViewCountries() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const Header = (props) => {
  return (
    <div className="container notification is-bold is-dark">
      <h1 className="title">
        COVID 19 - Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2)
        Statistics Tracking Tool
      </h1>
      <h2 className="subtitle">
        Select your country for real-time infection data.
      </h2>
      <br></br>
      <p>*Additional information will be available as this app is improved.</p>
      {/* <button
        className="button is-success"
        onClick={() => props.fetchData(props.dinoInfo)}
      >
        Get Dinosaur!
      </button> */}
      <div className="dropdown">
        <button
          className="button is-link is-bold dropbtn"
          onClick={toggleViewCountries}
        >
          Click Here To Select A Country
        </button>
        <div id="myDropdown" className={"dropdown-content"}>
          {countryStrings.map((e) => {
            return (
              <div
                onClick={() => {
                  props.fetchData(e.code);
                }}
              >
                {e.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dinoInfo: state.dinoInfo,
  };
};

export default connect(mapStateToProps, { fetchData })(Header);

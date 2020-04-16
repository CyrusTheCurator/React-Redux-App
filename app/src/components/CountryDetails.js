import React from "react";
import { connect } from "react-redux";

const CountryDetails = (props) => {
  return (
    <div className="container">
      {props.isLoading ? (
        <div>data loading...</div>
      ) : (
        <div>
          {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
          <div className="notification is-bold margin-fixer">
            <div className="resultsContainer">
              {props.name ? (
                <>
                  <h3 className="subtitle">
                    <h4 className="topTitle">{props.name}</h4>
                    <p>Total Cases: {props.totalCases}</p>
                    <p>Total Deaths: {props.totalDeaths}</p>
                    <p>Total Recovered: {props.totalRecovered}</p>
                  </h3>
                  <h3 className="subtitle global">
                    <h4 className="topTitle">Global Data</h4>
                    <p>Total Cases: {props.globalVals.TotalConfirmed}</p>
                    <p>Total Deaths: {props.globalVals.TotalDeaths}</p>
                    <p>Total Recovered: {props.globalVals.TotalRecovered}</p>
                  </h3>{" "}
                </>
              ) : (
                <p>Select a country to retrieve data</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.countryInfo.name,
    totalCases: state.countryInfo.totalCases,
    totalDeaths: state.countryInfo.totalDeaths,
    totalRecovered: state.countryInfo.totalRecovered,
    globalVals: state.countryInfo.globalVals,
  };
};

//export default CountryDetails;
export default connect(mapStateToProps, {})(CountryDetails);

import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchData = (countryCode = "T E S T") => {
  return (dispatch) => {
    dispatch({
      type: FETCH_DATA,
    });
    setTimeout(() => {
      let url = `https://api.covid19api.com/summary`;

      axios
        .get(url)
        .then((res) => {
          const countryDetails = res.data.Countries.filter((e) => {
            return e.CountryCode === countryCode;
          })[0];
          console.log(countryDetails);
          const countryInfo = {
            name: countryDetails.Country,
            totalCases: countryDetails.TotalConfirmed,
            totalDeaths: countryDetails.TotalDeaths,
            totalRecovered: countryDetails.TotalRecovered,
            globalVals: res.data.Global,
          };
          console.log(countryInfo);
          dispatch({ type: DATA_SUCCESS, payload: countryInfo });
        })
        .catch((err) => dispatch({ type: DATA_ERROR, payload: err }));
    }, 10);
  };
};

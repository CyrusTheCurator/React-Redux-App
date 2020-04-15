import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import axios from 'axios';
import "./App.css";
// import { getFirstImageURL } from 'first-image-search-load';
import { reducer } from "./reducers";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="section">
          <Header />
          <CountryDetails />
        </div>
      </div>
    </Provider>
  );
}

export default App;

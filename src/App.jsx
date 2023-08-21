import React from "react";
import Route from "./Components/Route";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
const App = () => {
  return (
    <>
      <Provider  store={store}>
        <Route />
      </Provider>
    </>
  );
};

export default App;

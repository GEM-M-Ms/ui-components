import React from "react";
import ReactDOM from "react-dom";
import Test from "./Test";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>,
  rootElement
);

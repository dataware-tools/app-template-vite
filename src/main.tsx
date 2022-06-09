import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.API_MOCKING) {
  require("./mocks");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

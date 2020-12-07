import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { LocationProvider } from "./contexts/LocationContext";

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

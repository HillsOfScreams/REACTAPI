import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RandomCountry from "./Inputt";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RandomCountry></RandomCountry>
    <App />
  </React.StrictMode>
);

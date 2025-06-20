import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainWeb from "../src/App"; // or "./App" if it's in the same folder
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/youtube">
      <MainWeb />
    </BrowserRouter>
  </React.StrictMode>
);

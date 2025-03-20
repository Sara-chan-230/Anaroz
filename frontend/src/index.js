import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Style/ClipPath.css";
import "./Style/Pattern.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);


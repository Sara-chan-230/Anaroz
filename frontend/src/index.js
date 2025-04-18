import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Style/ClipPath.css";
import "./Style/Pattern.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

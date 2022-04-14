import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from "./context/MoviesContext";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MoviesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesContextProvider>
);

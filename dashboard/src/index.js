import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( //it should happen within the components
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
//mongodb+srv://sarthakshinde2006_db_user:6ufSPA7EXEcLsHzl@zerodha-stock.c1hrav5.mongodb.net/?appName=Zerodha-Stock
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home";
import Myapplication from "../../pages/Myapplication";
import Navbar from "../Navbar/Navbar";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="myapplication" element={<Myapplication />} />
      </Routes>
    </Router>
  );
};

export default Routing;

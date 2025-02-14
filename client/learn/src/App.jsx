/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

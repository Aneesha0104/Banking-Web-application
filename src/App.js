import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./appRoutes";

const App = () => {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;

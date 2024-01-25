import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import ShowDetailsScreen from "./components/ShowDetailsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/show/:id" element={<ShowDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

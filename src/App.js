import React from "react";
import { HomePage } from "./pages/HomePage";
import { GameDetailsPage } from "./pages/GameDetailsPage";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

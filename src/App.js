import React from "react";
import { HomePage } from "./pages/HomePage";
import { GameDetailsPage } from "./pages/GameDetailsPage";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { HomePage } from "./pages/HomePage";
import { GameDetailsPage } from "./pages/GameDetailsPage";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";
import { useSelector } from "react-redux";
import { ReactComponent as Spinner } from "./assets/logo-spinner-secondary.svg";

function App() {
  const { gamesAreLoading } = useSelector((state) => state.games);
  const { isLoading } = useSelector((state) => state.details);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
      </Routes>
      {gamesAreLoading || isLoading ? (
        <div className="w-full h-[600px] flex items-center justify-center">
          <Spinner className="animate-spin" />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;

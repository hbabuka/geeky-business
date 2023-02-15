import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { GameDetails } from "../components/GameDetails";
import { GameDetailsIntro } from "../components/GameDetailsIntro";

export const GameDetailsPage = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <GameDetailsIntro />
      <GameDetails />
    </div>
  );
};

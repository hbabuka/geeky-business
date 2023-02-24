import React from "react";
import { GameDetails } from "../components/GameDetails";
import { GameDetailsIntro } from "../components/GameDetailsIntro";
import { GameScreenshots } from "../components/GameScreenshots";

export const GameDetailsPage = () => {
  return (
    <div className="container mx-auto max-w-5xl pt-16 flex flex-col gap-6">
      <GameDetailsIntro />
      <GameDetails />
      <GameScreenshots />
    </div>
  );
};

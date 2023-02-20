import React from "react";
import { GameDetails } from "../components/GameDetails";
import { GameDetailsIntro } from "../components/GameDetailsIntro";

export const GameDetailsPage = () => {
  return (
    <>
      <div className="container mx-auto max-w-5xl pt-16">
        <GameDetailsIntro />
      </div>
      <div className="pt-6 container mx-auto max-w-5xl">
        <GameDetails />
      </div>
    </>
  );
};

import React from "react";
import { Game } from "./Game";

export const GamesSection = ({ title, gamesData, id }) => {
  return (
    <div id={id} className="container mx-auto max-w-5xl">
      <h2>{title}</h2>
      <div className="grid grid-cols-3 gap-8">
        {gamesData.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            genre={game.genres.length > 0 ? game.genres[0].name : "No genre"}
          />
        ))}
      </div>
    </div>
  );
};

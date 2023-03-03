import React from "react";
import { useHashScroll } from "../utils";
import { Game } from "./Game";

export const GamesSection = ({
  id,
  title,
  icon,
  description,
  gamesData,
  action,
  topRated,
}) => {
  useHashScroll(id, true);

  return (
    <div id={id} className="layout-container flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-3 items-center section-icons">
            <div className="w-8 h-8">{icon}</div>
            <h3>{title}</h3>
          </div>
          <p className="text-secondary-500">{description}</p>
        </div>
        {action}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${
          topRated && "top-rated-grid"
        }`}
      >
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

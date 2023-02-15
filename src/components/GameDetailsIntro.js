import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumb } from "./Breadcrumb";
import { isNew, resizeImage } from "../utils";
import { StarIcon } from "@heroicons/react/24/solid";

export const GameDetailsIntro = () => {
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );

  const { popular, latest, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const allGames = [...popular, ...latest, ...upcoming, ...searched];
  const releaseDate = allGames.find((item) => item.id === game.id).released;

  const renderStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon className="w-6 h-6 text-warning-400" key={i} />);
      } else {
        stars.push(<StarIcon className="w-6 h-6 text-secondary-300" ey={i} />);
      }
    }

    return stars;
  };

  return (
    !isLoading && (
      <div className="container mx-auto max-w-5xl flex flex-col gap-6">
        <Breadcrumb />
        <div className="flex items-end justify-between">
          <div>
            <h2>{game.name}</h2>
            <div className="flex items-center gap-3">
              <p className="text-secondary-500">Released: {releaseDate}</p>
              {isNew(releaseDate) && (
                <span className="chip chip-small bg-success-50 text-success-600">
                  New
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <div className="flex gap-3 items-center">
              <div className="flex">{renderStars()}</div>
              <h5>{parseFloat(game.rating).toFixed(2)}</h5>
            </div>
            <p className="text-secondary-500">{`(${game.ratings.length} ratings)`}</p>
          </div>
        </div>
        <img
          src={resizeImage(game.background_image, 1280)}
          alt="game.name"
          className="rounded-[1.25rem]"
        />
      </div>
    )
  );
};

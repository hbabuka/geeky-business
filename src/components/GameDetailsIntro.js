import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumb } from "./Breadcrumb";
import { isNew, resizeImage } from "../utils";
import { StarIcon } from "@heroicons/react/24/solid";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const GameDetailsIntro = () => {
  const { game } = useSelector((state) => state.details);

  const { popular, latest, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const allGames = [...popular, ...latest, ...upcoming, ...searched];
  const releaseDate = allGames.find((item) => item.id === game.id)?.released;

  const renderStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <StarIcon
            className="w-5 h-5 sm:w-6 sm:h-6 text-warning-400"
            key={i}
          />
        );
      } else {
        stars.push(
          <StarIcon
            className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-300"
            key={i}
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-transparent pt-8 lg:pt-16">
      <div className="layout-container flex flex-col gap-6">
        <Breadcrumb />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-0">
          <div>
            <h2>{game.name}</h2>
            <div className="flex items-center gap-3">
              <p className="text-secondary-500 mt-2 md:mt-0">
                Released: {releaseDate}
              </p>
              {isNew(releaseDate) && (
                <span className="chip chip-small bg-success-50 text-success-600">
                  New
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2 lg:flex-col lg:gap-1 items-center lg:items-end">
            <div className="flex gap-2 lg:gap-3 items-center flex-row-reverse lg:flex-row">
              <div className="flex">{renderStars()}</div>
              <h5 className="h5-xs">{parseFloat(game.rating).toFixed(2)}</h5>
            </div>
            <p className="text-secondary-500">
              {game.ratings.length > 0
                ? `(${game.ratings.length} ratings)`
                : "No ratings yet"}
            </p>
          </div>
        </div>
        {game.background_image !== null ? (
          <img
            src={resizeImage(game.background_image, 1280)}
            alt={game.name}
            className="rounded-[1.25rem]"
          />
        ) : (
          <div className="h-[31rem] rounded-[1.25rem] overflow-hidden">
            <ImagePlaceholder iconSize={48} />
          </div>
        )}
      </div>
    </div>
  );
};

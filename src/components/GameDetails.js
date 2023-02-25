import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PreviewModal } from "./PreviewModal.js";

// Image imports
import apple from "../assets/apple.svg";
import gamepad from "../assets/gamepad.svg";
import nintendo from "../assets/nintendo.svg";
import playstation from "../assets/playstation.svg";
import steam from "../assets/steam.svg";
import xbox from "../assets/xbox.svg";
import linux from "../assets/linux.svg";
import {
  ArrowTopRightOnSquareIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

export const GameDetails = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const { game, isLoading, movies } = useSelector((state) => state.details);

  const resolvePlatformIcons = (platform) => {
    const platformIncludes = (value) => {
      return platform.toLowerCase().includes(value);
    };

    if (platformIncludes("playstation")) {
      return playstation;
    } else if (platformIncludes("xbox")) {
      return xbox;
    } else if (platformIncludes("pc")) {
      return steam;
    } else if (platformIncludes("nintendo")) {
      return nintendo;
    } else if (platformIncludes("ios")) {
      return apple;
    } else if (platformIncludes("linux")) {
      return linux;
    } else return gamepad;
  };

  function resolveDescriptionMarkup(game) {
    return { __html: game.description };
  }

  const { popular, latest, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const allGames = [...popular, ...latest, ...upcoming, ...searched];
  const gameInGames = allGames.find((item) => item.id === game.id);

  const trailer = movies.results[0];

  const publishers =
    game.publishers?.length > 0
      ? game.publishers.map((publisher) => publisher.name).join(", ")
      : "Unknown";

  return (
    !isLoading && (
      <div className="flex flex-col gap-6 pt-6">
        {gameInGames?.genres.length > 0 && (
          <div className="flex gap-2">
            {gameInGames?.genres.map((genre, index) => (
              <span
                className="chip chip-medium chip-outlined border-primary-400 text-primary-600"
                key={index}
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-8">
          <p
            dangerouslySetInnerHTML={resolveDescriptionMarkup(game)}
            className="text-secondary-600 grow"
          ></p>
          <div className="bg-white rounded-[1.25rem] px-5 py-5 flex flex-col gap-6 border border-secondary-300 w-60 shrink-0">
            <h6>Available on the following platforms:</h6>
            <div className="flex flex-col divide-y divide-secondary-200 gap-4">
              {game.platforms?.map((item) => (
                <div
                  key={item.platform.id}
                  className="flex grow items-center gap-4 [&:not(:first-child)]:pt-4"
                >
                  <img
                    src={resolvePlatformIcons(item.platform.name)}
                    alt={item.platform.name}
                    className="w-5 h-5"
                  />
                  <p className="text-secondary-600">{item.platform.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex gap-6">
          <button
            className="btn-secondary-contained inline-flex items-center gap-2"
            onClick={() => setShowPreviewModal(true)}
            disabled={movies.count < 1}
          >
            <PlayIcon className="w-6 h-6" />
            Preview
          </button>
          <a href={game.website} target="_blank" rel="noreferrer">
            <button
              className="btn-primary-outlined inline-flex items-center gap-2"
              disabled={game.website === ""}
            >
              <ArrowTopRightOnSquareIcon className="h-6 w-6" />
              Visit website
            </button>
          </a>
        </div>
        <h6>
          Published by: <span className="text-secondary-500">{publishers}</span>
        </h6>
        <hr className="border-secondary-300" />

        {showPreviewModal && (
          <PreviewModal
            setOpenModal={setShowPreviewModal}
            title={trailer.name}
            source={trailer.data["480"]}
          />
        )}
      </div>
    )
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resizeImage } from "../utils.js";

// Image imports
import apple from "../assets/apple.svg";
import gamepad from "../assets/gamepad.svg";
import nintendo from "../assets/nintendo.svg";
import playstation from "../assets/playstation.svg";
import steam from "../assets/steam.svg";
import xbox from "../assets/xbox.svg";

export const GameDetails = () => {
  const navigate = useNavigate();

  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );

  const resolvePlatformIcons = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintento Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  function resolveDescriptionMarkup(game) {
    return { __html: game.description };
  }

  return (
    <>
      {!isLoading && (
        <div>
          <div>
            <div>
              <h3>Platforms</h3>
              <div>
                {game.platforms?.map((item) => (
                  <img
                    key={item.platform.id}
                    src={resolvePlatformIcons(item.platform.name)}
                    alt={item.platform.name}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <img
              src={resizeImage(game.background_image, 1280)}
              alt="game.name"
            />
          </div>
          <div>
            <div dangerouslySetInnerHTML={resolveDescriptionMarkup(game)} />
          </div>
          <div className="gallery">
            {screenshots.results?.map((screenshot) => (
              <img src={screenshot.image} key={screenshot.id} alt={game.name} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

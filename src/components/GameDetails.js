import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resizeImage } from "../utils.ts";

// Image imports
import apple from "../assets/apple.svg";
import gamepad from "../assets/gamepad.svg";
import nintendo from "../assets/nintendo.svg";
import playstation from "../assets/playstation.svg";
import steam from "../assets/steam.svg";
import xbox from "../assets/xbox.svg";
import starEmpty from "../assets/star-empty.png";
import starFull from "../assets/star-full.png";

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export const GameDetails = () => {
  const navigate = useNavigate();
  // Close details modal
  const closeDetailsModal = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

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

  const renderStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" src={starFull} />);
      } else {
        stars.push(<img alt="star" src={starEmpty} />);
      }
    }

    return stars;
  };

  function resolveDescriptionMarkup(game) {
    return { __html: game.description };
  }

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={closeDetailsModal}>
          <Details>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {renderStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((item) => (
                    <img
                      key={item.platform.id}
                      src={resolvePlatformIcons(item.platform.name)}
                      alt={item.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={resizeImage(game.background_image, 1280)}
                alt="game.name"
              />
            </Media>
            <Description>
              <div dangerouslySetInnerHTML={resolveDescriptionMarkup(game)} />
            </Description>
            <div className="gallery">
              {screenshots.results?.map((screenshot) => (
                <img
                  src={screenshot.image}
                  key={screenshot.id}
                  alt={game.name}
                />
              ))}
            </div>
          </Details>
        </CardShadow>
      )}
    </>
  );
};

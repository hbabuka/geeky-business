import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

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
  padding: 2rem 20rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
`;

export const GameDetails = () => {
  const { game, screenshots } = useSelector((state) => state.details);

  return (
    <CardShadow>
      <Details>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms?.map((item) => (
                <h3 key={item.platform.id}>{item.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt="game.name" />
        </div>
        <div className="description">
          <p>{game.description}</p>
        </div>
        <div className="gallery">
          {screenshots.results?.map((screenshot) => (
            <img src={screenshot.image} key={screenshot.id} alt={game.name} />
          ))}
        </div>
      </Details>
    </CardShadow>
  );
};

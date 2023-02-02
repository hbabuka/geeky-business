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
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );

  return (
    <>
      {!isLoading && (
        <CardShadow>
          <Details>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((item) => (
                    <h3 key={item.platform.id}>{item.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="game.name" />
            </Media>
            <Description>
              <p>{game.description}</p>
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

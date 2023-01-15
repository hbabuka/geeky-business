import React from "react";
import styled from "styled-components/macro";
import { Game } from "./Game";
import { motion } from "framer-motion";

const WrapperStyled = styled(motion.div)``;

const GridStyled = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export const GamesSection = ({ title, gamesData }) => {
  return (
    <WrapperStyled>
      <h2>{title}</h2>
      <GridStyled>
        {gamesData.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </GridStyled>
    </WrapperStyled>
  );
};

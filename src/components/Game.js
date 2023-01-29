import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailsAction";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

const WrapperStyled = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <WrapperStyled onClick={loadDetailsHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </WrapperStyled>
  );
};

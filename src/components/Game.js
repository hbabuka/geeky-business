import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailsAction";
import { gameDetailsURL, gameScreenshotsURL } from "../api";
import { Link } from "react-router-dom";

const WrapperStyled = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <WrapperStyled onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </WrapperStyled>
  );
};
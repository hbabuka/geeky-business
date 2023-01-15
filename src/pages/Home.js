import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import { GamesSection } from "../components/GamesSection";
import styled from "styled-components/macro";

const HomeStyled = styled("div")`
  padding: 5rem;

  h2 {
    margin-block: 5rem;
  }
`;

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <HomeStyled>
      <GamesSection title="Upcoming Games" gamesData={upcoming} />
      <GamesSection title="Popular Games" gamesData={popular} />
      <GamesSection title="New Games" gamesData={newGames} />
    </HomeStyled>
  );
};

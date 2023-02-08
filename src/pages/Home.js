import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import { GamesSection } from "../components/GamesSection";
import styled from "styled-components/macro";
import { GameDetails } from "../components/GameDetails";
import { useParams } from "react-router-dom";

const HomeStyled = styled("div")`
  padding: 0 5rem 5rem;

  h2 {
    margin-block: 5rem;
  }
`;

export const Home = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <HomeStyled>
      {id && <GameDetails />}
      {searched.length > 0 && (
        <GamesSection title="Searched Games" gamesData={searched} />
      )}
      <GamesSection id="popular" title="Popular Games" gamesData={popular} />
      <GamesSection id="upcoming" title="Upcoming Games" gamesData={upcoming} />
      <GamesSection id="latest" title="Latest Games" gamesData={newGames} />
    </HomeStyled>
  );
};

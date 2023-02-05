import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import { GamesSection } from "../components/GamesSection";
import styled from "styled-components/macro";
import { GameDetails } from "../components/GameDetails";
import { useParams } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

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
      <button className="px-7 py-4 text-white duration-150 bg-fuchsia-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">
        Button
      </button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {id && <GameDetails />}
      {searched.length > 0 && (
        <GamesSection title="Searched Games" gamesData={searched} />
      )}
      <GamesSection title="Upcoming Games" gamesData={upcoming} />
      <GamesSection title="Popular Games" gamesData={popular} />
      <GamesSection title="New Games" gamesData={newGames} />
    </HomeStyled>
  );
};

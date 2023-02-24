import React, { useEffect } from "react";
import { GameDetails } from "../components/GameDetails";
import { GameDetailsIntro } from "../components/GameDetailsIntro";
import { GameScreenshots } from "../components/GameScreenshots";
import { loadDetails } from "../redux/actions/detailsAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadGames } from "../redux/actions/gamesAction";

export const GameDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadGames());
    dispatch(loadDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <GameDetailsIntro />
      <div className="container mx-auto max-w-5xl flex flex-col gap-6">
        <GameDetails />
        <GameScreenshots />
      </div>
    </>
  );
};

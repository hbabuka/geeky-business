import React, { useEffect } from "react";
import { GameDetails } from "../components/GameDetails";
import { GameDetailsIntro } from "../components/GameDetailsIntro";
import { GameScreenshots } from "../components/GameScreenshots";
import { loadDetails } from "../redux/actions/detailsAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadGames } from "../redux/actions/gamesAction";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";

export const GameDetailsPage = () => {
  const { isLoading } = useSelector((state) => state.details);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadGames());
    dispatch(loadDetails(id));
  }, [dispatch, id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <GameDetailsIntro />
      <div className="container mx-auto max-w-5xl flex flex-col gap-6">
        <GameDetails />
        <GameScreenshots />
      </div>
      <Footer />
    </>
  );
};

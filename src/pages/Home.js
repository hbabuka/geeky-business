import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

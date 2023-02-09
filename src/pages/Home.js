import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import { GamesSection } from "../components/GamesSection";
import styled from "styled-components/macro";
import { GameDetails } from "../components/GameDetails";
import { useParams } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { navData } from "../constants";

const HomeStyled = styled("div")``;

export const Home = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, latest, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const resolveGamesData = (section) => {
    switch (section.id) {
      case "popular":
        return popular;
      case "latest":
        return latest;
      case "upcoming":
        return upcoming;
      case "searched":
        return searched;
      default:
        return {};
    }
  };

  return (
    <main>
      <HeroSection />
      {id && <GameDetails />}
      {searched.length > 0 && (
        <GamesSection title="Searched Games" gamesData={searched} />
      )}
      <div className="flex flex-col gap-16">
        {navData &&
          navData.map((section) => (
            <>
              <GamesSection
                id={section.id}
                title={section.name}
                icon={section.icon}
                description={section.description}
                gamesData={resolveGamesData(section)}
              />
              <hr className="border-secondary-300 last:border-none" />
            </>
          ))}
      </div>
    </main>
  );
};

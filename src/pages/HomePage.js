import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import { GamesSection } from "../components/GamesSection";
import { HeroSection } from "../components/HeroSection";
import { navData } from "../constants";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { appendSearchInputData } from "../redux/actions/searchInputAction";

export const HomePage = () => {
  const dispatch = useDispatch();

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

  const searchedData = navData[3];

  const onClearSearchResults = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
    dispatch(appendSearchInputData(""));
  };

  return (
    <main>
      <HeroSection />
      <div className="flex flex-col gap-16">
        {searched.length > 0 && (
          <>
            <GamesSection
              id={searchedData.id}
              title={`${searchedData.name} (${searched.length}):`}
              description={searchedData.description}
              icon={searchedData.icon}
              gamesData={searched}
              action={
                <button
                  className="btn-secondary-outlined inline-flex items-center gap-2"
                  onClick={onClearSearchResults}
                >
                  <ArchiveBoxXMarkIcon className="h-6 w-6" />
                  Clear
                </button>
              }
            />
            <hr className="border-secondary-300 last:hidden" />
          </>
        )}
        {navData &&
          navData
            .filter((section) => section.id !== "searched")
            .map((section) => (
              <>
                <GamesSection
                  id={section.id}
                  title={section.name}
                  icon={section.icon}
                  description={section.description}
                  gamesData={resolveGamesData(section)}
                  key={section.id}
                />
                <hr className="border-secondary-300 last:hidden" />
              </>
            ))}
      </div>
    </main>
  );
};

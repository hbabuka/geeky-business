import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import { GamesSection } from "../components/GamesSection";
import { HeroSection } from "../components/HeroSection";
import { navData } from "../constants";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { appendSearchInputData } from "../redux/actions/searchInputAction";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const {
    popular,
    latest,
    upcoming,
    topIndie,
    topMultiplayer,
    searched,
    gamesAreLoading,
  } = useSelector((state) => state.games);

  const resolveGamesData = (section) => {
    switch (section.id) {
      case "popular":
        return popular;
      case "latest":
        return latest;
      case "upcoming":
        return upcoming;
      case "top-indie":
        return topIndie;
      case "top-multiplayer":
        return topMultiplayer;
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

  return gamesAreLoading ? (
    <Spinner />
  ) : (
    <>
      <main>
        <HeroSection />
        <div className="flex flex-col gap-12 sm:gap-16">
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
              <hr className="border-secondary-300" />
            </>
          )}
          {navData &&
            navData
              .filter((section) => section.id !== "searched")
              .map((section) => (
                <Fragment key={section.id}>
                  <GamesSection
                    id={section.id}
                    title={section.name}
                    icon={section.icon}
                    description={section.description}
                    gamesData={resolveGamesData(section)}
                    topRated={
                      section.id === "top-indie" ||
                      section.id === "top-multiplayer"
                    }
                  />
                  <hr className="border-secondary-300 last:hidden" />
                </Fragment>
              ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

import { HomeIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { GameModel } from "../constants";
import { ReactElement } from "react";

export const Breadcrumb = (): ReactElement => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const navigate = useNavigate();

  const { popular, latest, upcoming, searched, topIndie, topMultiplayer } =
    useSelector((state: RootState) => state.games);

  const games = popular || latest || upcoming || searched;

  const { game } = useSelector((state: RootState) => state.details);

  const findSection = (): string => {
    if (popular.find((item: GameModel) => item.name === game.name)) {
      return "Popular";
    } else if (latest.find((item: GameModel) => item.name === game.name)) {
      return "Latest";
    } else if (upcoming.find((item: GameModel) => item.name === game.name)) {
      return "Upcoming";
    } else if (topIndie.find((item: GameModel) => item.name === game.name)) {
      return "Top Indie";
    } else if (
      topMultiplayer.find((item: GameModel) => item.name === game.name)
    ) {
      return "Top Multiplayer";
    } else if (searched.find((item: GameModel) => item.name === game.name)) {
      return "Searched";
    } else return "";
  };

  const onClickBreadcrumb = () => {
    navigate(`/#${findSection().replace(" ", "-").toLowerCase()}`);
  };

  const MapPath = () => {
    return (
      path
        .filter((item) => item !== "")
        .map(() => (
          <>
            <p className="body-2 text-secondary-400">/</p>
            <p
              onClick={onClickBreadcrumb}
              className="body-2 text-secondary-900 cursor-pointer hover:text-primary-600 duration-300"
            >
              {findSection()}
            </p>
          </>
        ))
        .pop() ?? null
    );
  };

  return (
    games && (
      <div className="flex gap-3 items-center">
        <HomeIcon
          className="w-5 h-5 cursor-pointer hover:text-primary-600 duration-300"
          onClick={() => navigate("/")}
        />
        <div className="flex gap-3 items-center">
          {findSection() && <MapPath />}
          <p className="body-2 text-secondary-400">/</p>
          <p className="body-2 text-secondary-400">Game details</p>
        </div>
      </div>
    )
  );
};

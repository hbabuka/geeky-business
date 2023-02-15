import { HomeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const navigate = useNavigate();

  const { popular, latest, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const games = popular || latest || upcoming || searched;

  const { game } = useSelector((state) => state.details);
  const { id } = useParams();

  const findSection = () => {
    if (popular.find((item) => item.name === game.name)) {
      return "Popular";
    } else if (latest.find((item) => item.name === game.name)) {
      return "Latest";
    } else if (upcoming.find((item) => item.name === game.name)) {
      return "Upcoming";
    } else if (searched.find((item) => item.name === game.name)) {
      return "Searched";
    }
  };

  // const onClickBreadcrumb = () => {
  //   if (games) {
  //     navigate(`/${findSection()}`);
  //     const element = document.getElementById(findSection());
  //     element.scrollIntoView();
  //   }
  // };

  return (
    games && (
      <div className="flex gap-3 items-center">
        <HomeIcon className="w-5 h-5" />
        <div className="flex gap-3 items-center">
          {path
            .filter((item) => item !== "")
            .map(() => (
              <>
                <p className="body-2 text-secondary-400">/</p>
                <p
                  // onClick={onClickBreadcrumb()}
                  className="body-2 text-secondary-900"
                >
                  {findSection()}
                </p>
              </>
            ))
            .pop()}
          <p className="body-2 text-secondary-400">/</p>
          <p className="body-2 text-secondary-400">Game details</p>
        </div>
      </div>
    )
  );
};

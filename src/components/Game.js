import React from "react";
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailsAction";
import { Link } from "react-router-dom";
import { resizeImage } from "../utils.js";
import { isNew } from "../utils.js";

export const Game = ({ id, name, released, image, genre }) => {
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <Link to={`/game/${id}`}>
      <div
        onClick={loadDetailsHandler}
        className="card flex flex-col gap-4n hover:shadow-lg hover:border hover:border-primary-400 gap-4"
      >
        <div className="rounded-lg overflow-hidden w-full">
          <img
            src={resizeImage(image, 640)}
            alt={name}
            className="transform ease-in-out duration-300 h-40 object-cover w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </h5>
          <div className="flex justify-between items-end">
            <div className="flex gap-1">
              <span
                className={`chip chip-small ${
                  genre === "No genre"
                    ? "bg-secondary-100 text-secondary-600"
                    : "bg-primary-50 text-primary-600"
                }`}
              >
                {genre}
              </span>
              {isNew(released) && (
                <span className="chip chip-small bg-success-50 text-success-600">
                  New
                </span>
              )}
            </div>
            <p className="body2 text-secondary-400">{released}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailsAction";
import { Link } from "react-router-dom";
import { resizeImage } from "../utils.js";
import { isNew } from "../utils.js";
import { ImagePlaceholder } from "./ImagePlaceholder";

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
          {image !== null ? (
            <img
              src={resizeImage(image, 640)}
              alt={name}
              className="transform ease-in-out duration-300 h-40 object-cover w-full"
            />
          ) : (
            <div className="h-40">
              <ImagePlaceholder iconSize={12} />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </h5>
          <div className="flex justify-between items-end min-w-0 gap-1">
            <div className="flex gap-1 min-w-0">
              <span
                className={`chip chip-small overflow-hidden text-ellipsis whitespace-nowrap ${
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
            <p className="body2 text-secondary-400 overflow-hidden text-ellipsis whitespace-nowrap">
              {released !== null ? released : "Release date not available"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

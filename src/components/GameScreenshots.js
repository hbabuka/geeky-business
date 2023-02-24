import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";
import { GalleryImageModal } from "./GalleryImageModal";

export const GameScreenshots = () => {
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );

  return (
    !isLoading && (
      <div>
        <h4 className="mb-6">Screenshots</h4>
        <div className="grid grid-cols-3 gap-4">
          {screenshots.results?.map((screenshot) => (
            <GalleryImageModal
              src={screenshot.image}
              alt={screenshot.id}
              children
            >
              <div className="relative screenshot-media rounded-[20px] overflow-hidden hover:shadow-lg cursor-pointer">
                <img
                  src={screenshot.image}
                  key={screenshot.id}
                  alt={game.name}
                  className="object-cover h-52"
                />
                <div className="hover-container opacity-0 z-10 bg-secondary-900 absolute inset-0 duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <p className="text-white">Open</p>
                    <ArrowRightIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </GalleryImageModal>
          ))}
        </div>
      </div>
    )
  );
};

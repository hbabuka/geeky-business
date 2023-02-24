import React, { useState } from "react";
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
            <GalleryImageModal src={screenshot.image} alt={screenshot.id}>
              <img
                src={screenshot.image}
                key={screenshot.id}
                alt={game.name}
                className="rounded-[20px] h-52 object-cover"
              />
            </GalleryImageModal>
          ))}
        </div>
      </div>
    )
  );
};

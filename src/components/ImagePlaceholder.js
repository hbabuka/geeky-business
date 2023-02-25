import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

export const ImagePlaceholder = ({ iconSize }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-100">
      <PhotoIcon
        className={`w-${iconSize} h-${iconSize} text-primary-200 flex-no-shrink`}
      />
    </div>
  );
};

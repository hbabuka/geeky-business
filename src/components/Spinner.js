import React from "react";
import { ReactComponent as SpinnerSvg } from "../assets/logo-spinner-secondary.svg";

export const Spinner = () => {
  return (
    <div
      className={`spinner-container w-full h-[calc(100%-80px)] sm:h-[calc(100%-104px)] flex items-center justify-center`}
    >
      <SpinnerSvg className="animate-spin w-16 h-16" />
    </div>
  );
};

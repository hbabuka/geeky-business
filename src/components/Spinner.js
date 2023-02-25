import React from "react";
import { ReactComponent as SpinnerSvg } from "../assets/logo-spinner-secondary.svg";

export const Spinner = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center">
      <SpinnerSvg className="animate-spin" />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { ReactComponent as SpinnerSvg } from "../assets/logo-spinner-secondary.svg";
import { navHeight } from "../constants";

export const Spinner = ({ mobile }) => {
  return (
    <div
      className={`spinner-container w-full h-[calc(100%-80px)] sm:h-[calc(100%-104px)] flex items-center justify-center`}
    >
      <SpinnerSvg className="animate-spin w-16 h-16" />
    </div>
  );
};

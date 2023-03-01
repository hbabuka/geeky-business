import React, { useEffect, useState } from "react";
import { ReactComponent as SpinnerSvg } from "../assets/logo-spinner-secondary.svg";

export const Spinner = () => {
  const [navHeight, setNavHeight] = useState();

  useEffect(() => {
    const getNavHeight = async () => {
      const nav = await document.getElementById("nav-menu");

      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };

    getNavHeight();
  }, [document]);

  console.log(navHeight);
  return (
    <div
      className={`spinner-container w-full h-[calc(100%-${navHeight}px)] flex items-center justify-center`}
    >
      <SpinnerSvg className="animate-spin w-16 h-16" />
    </div>
  );
};

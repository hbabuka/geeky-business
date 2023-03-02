import React from "react";

export const Footer = () => {
  return (
    <div className="bg-white">
      <div className="layout-container mt-16 lg:mt-24 flex flex-col gap-2 py-12 items-center">
        <p className="text-secondary-500">Copyright © 2023 Hristijan Babuka</p>
        <a href="https://github.com/hbabuka" target="_blank" rel="noreferrer">
          <p className="caption text-primary-600 cursor-pointer hover:underline duration-300">
            Github
          </p>
        </a>
      </div>
    </div>
  );
};

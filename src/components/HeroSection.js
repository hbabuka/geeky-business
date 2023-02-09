import React, { useState } from "react";
import { ReactComponent as AnimatedLogo } from "../assets/hero-logo-icon-color.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/actions/gamesAction";
import { appendSearchInputData } from "../redux/actions/searchInputAction";

export const HeroSection = () => {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.searchInput);

  const handleSearch = (e) => {
    dispatch(appendSearchInputData(e.target.value));
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(value));
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-transparent py-36 flex flex-col gap-12">
      <div className="flex flex-col gap-8 items-center container mx-auto max-w-5xl">
        <div className="w-28 h-28 relative">
          <AnimatedLogo className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 hover:rotate-180 duration-700" />
        </div>
        <div className="flex flex-col gap-4 items-center max-w-[600px] text-center">
          <h1>Geek out like never before</h1>
          <p className="text-secondary-600">
            Immerse yourself in new and unforgettable adventures with the
            ultimate online game database of the latest and greatest video
            games.
          </p>
        </div>
      </div>
      <form className="flex justify-center" autoComplete="off">
        <label htmlFor="search-games" className="sr-only">
          Search games
        </label>
        <div className="flex gap-6">
          <div className="relative md:w-[20rem]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <MagnifyingGlassIcon className="w-6 h-6 text-secondary-300" />
            </div>
            <input
              type="search"
              value={value}
              onChange={handleSearch}
              id="search-games"
              className="bg-white border border-secondary-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pr-3 pl-14 h-12 placeholder:text-secondary-400 duration-300"
              placeholder="Enter game name..."
              required
            />
          </div>
          <button
            type="submit"
            onClick={submitSearch}
            className="btn-secondary-contained"
            disabled={value === ""}
          >
            Search
            <span className="sr-only">Search games</span>
          </button>
        </div>
      </form>
    </div>
  );
};

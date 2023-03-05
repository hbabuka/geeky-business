import { ReactElement } from "react";
import { ReactComponent as AnimatedLogo } from "../assets/hero-logo-icon-color.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/actions/gamesAction";
import { appendSearchInputData } from "../redux/actions/searchInputAction";
import { AppDispatch, RootState } from "..";

export const HeroSection = (): ReactElement => {
  const dispatch: AppDispatch = useDispatch();

  const { value } = useSelector((state: RootState) => state.searchInput);

  const handleSearch = (e: any) => {
    dispatch(appendSearchInputData(e.target.value));
  };

  const submitSearch = (e: any) => {
    e.preventDefault();
    dispatch(fetchSearch(value));
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-transparent py-20 sm:py-36">
      <div className="layout-container flex flex-col gap-20 sm:gap-12">
        <div className="flex flex-col gap-16 sm:gap-8 items-center">
          <div className="w-28 h-28 relative">
            <AnimatedLogo className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 hover:rotate-180 duration-700" />
          </div>
          <div className="flex flex-col gap-8 sm:gap-4 items-center max-w-[600px] text-center">
            <h1>Geek out like never before</h1>
            <p className="text-secondary-600">
              Immerse yourself in new and unforgettable adventures with the
              ultimate online game database of the latest and greatest video
              games.
            </p>
          </div>
        </div>
        <form autoComplete="off">
          <label htmlFor="search-games" className="sr-only">
            Search games
          </label>
          <div className="flex w-full justify-center gap-4">
            <div className="relative w-full sm:w-[20rem]">
              <div className="hidden absolute inset-y-0 left-0 sm:flex items-center pl-4 pointer-events-none">
                <MagnifyingGlassIcon className="w-6 h-6 text-secondary-300" />
              </div>
              <input
                type="search"
                value={value}
                onChange={handleSearch}
                id="search-games"
                className="bg-white border border-secondary-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pr-3 pl-4 sm:pl-14 h-12 placeholder:text-secondary-400 duration-300"
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
    </div>
  );
};

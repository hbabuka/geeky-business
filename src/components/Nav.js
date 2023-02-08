import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/geeky-business-logo.svg";
import { fetchSearch } from "../redux/actions/gamesAction";
import { useDispatch } from "react-redux";
import { navData } from "../constants";
import { useNavigate } from "react-router-dom";

const NavItem = ({ data }) => {
  const adaptedName = data.name.replaceAll(" Games", "");

  return (
    <a
      href={`#${data.id}`}
      className="px-3 py-2 text-base text-center text-secondary-500 rounded-lg hover:bg-primary-50 hover:text-primary-600 duration-300"
    >
      {adaptedName}
    </a>
  );
};

export const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(searchInput));
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
    setSearchInput("");
  };

  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto max-w-5xl py-8 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="hover:opacity-70 cursor-pointer duration-300"
          >
            <Logo />
          </div>
          <div className="flex gap-4">
            {navData.map((item) => (
              <NavItem data={item} key={item.id} />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

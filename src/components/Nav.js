import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/geeky-business-logo.svg";
import { useDispatch } from "react-redux";
import { navData } from "../constants";
import { useNavigate } from "react-router-dom";
import { appendSearchInputData } from "../redux/actions/searchInputAction";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavItem = ({ data }) => {
  const adaptedName = data.name.replaceAll(" Games", "");
  return (
    <a
      href={`/#${data.id}`}
      className="block px-0 sm:px-3 py-2 text-base text-left sm:text-center text-secondary-500 rounded-lg sm:hover:bg-primary-50 hover:text-primary-600 duration-300"
    >
      {adaptedName}
    </a>
  );
};

export const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onClickLogo = () => {
    navigate("/");
    dispatch({ type: "CLEAR_SEARCHED" });
    dispatch(appendSearchInputData(""));
  };

  const onClickMenuButton = () => {
    setMenuIsOpen(!menuIsOpen);
    document.querySelector("#mobile-menu").classList.toggle("hidden");
  };

  return (
    <>
      <nav className="bg-white" id="nav-menu">
        <div className="layout-container py-4 sm:py-8 flex items-center justify-between flex-wrap">
          <div
            onClick={onClickLogo}
            className="hover:opacity-70 cursor-pointer duration-300"
          >
            <Logo />
          </div>
          <button
            id="menu-button"
            className="icon-btn sm:hidden"
            onClick={onClickMenuButton}
          >
            {menuIsOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          <div
            className="hidden flex-[1_1_100%] sm:flex-1 sm:flex gap-4 justify-end pt-4"
            id="mobile-menu"
          >
            {navData
              .filter((nav) => nav.id !== "searched")
              .map((item) => (
                <NavItem data={item} key={item.id} />
              ))}
          </div>
        </div>
      </nav>
    </>
  );
};

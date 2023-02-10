import React from "react";
import { ReactComponent as Logo } from "../assets/geeky-business-logo.svg";
import { useDispatch } from "react-redux";
import { navData } from "../constants";
import { useNavigate } from "react-router-dom";
import { appendSearchInputData } from "../redux/actions/searchInputAction";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickLogo = () => {
    navigate("/");
    dispatch({ type: "CLEAR_SEARCHED" });
    dispatch(appendSearchInputData(""));
  };

  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto max-w-5xl py-8 flex items-center justify-between">
          <div
            onClick={onClickLogo}
            className="hover:opacity-70 cursor-pointer duration-300"
          >
            <Logo />
          </div>
          <div className="flex gap-4">
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

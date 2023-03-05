import { useState, useRef, ReactElement } from "react";
import { ReactComponent as Logo } from "../assets/geeky-business-logo.svg";
import { useDispatch } from "react-redux";
import { navData, NavDataModel } from "../constants";
import { useNavigate } from "react-router-dom";
import { appendSearchInputData } from "../redux/actions/searchInputAction";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AppDispatch } from "..";

const NavItem = ({
  data,
}: {
  data: NavDataModel | undefined;
}): ReactElement => {
  const adaptedName = data?.name.replaceAll(" Games", "");
  return (
    <a
      href={`/#${data?.id}`}
      className="block px-0 md:px-3 py-2 text-left md:text-center text-secondary-500 rounded-lg md:hover:bg-primary-50 hover:text-primary-600 duration-300"
    >
      {adaptedName}
    </a>
  );
};

export const Nav = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [topDropDownMenuIsOpen, setTopDropdownMenuIsOpen] = useState(false);

  const onClickLogo = () => {
    navigate("/");
    dispatch({ type: "CLEAR_SEARCHED" });
    dispatch(appendSearchInputData(""));
  };

  const onClickMenuButton = () => {
    setMenuIsOpen(!menuIsOpen);
    document.querySelector("#mobile-menu")!.classList.toggle("hidden");
  };

  const onClickTopDropdownMenu = () => {
    setTopDropdownMenuIsOpen(!topDropDownMenuIsOpen);
  };

  const closeOpenDropdownMenu = (e: any) => {
    if (
      dropdownRef.current &&
      topDropDownMenuIsOpen &&
      !dropdownRef.current.contains(e.target)
    ) {
      setTopDropdownMenuIsOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenDropdownMenu);

  return (
    <>
      <nav className="bg-white" id="nav-menu">
        <div className="layout-container py-4 md:py-8 flex items-center justify-between flex-wrap">
          <div
            onClick={onClickLogo}
            className="hover:opacity-70 cursor-pointer duration-300"
          >
            <Logo />
          </div>
          <button
            id="menu-button"
            className="icon-btn md:hidden"
            onClick={onClickMenuButton}
          >
            {menuIsOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          <div
            className="hidden flex-[1_1_100%] md:flex-1 md:flex gap-4 justify-end pt-4 md:pt-0"
            id="mobile-menu"
          >
            {navData
              .filter(
                (nav) => nav.id !== "searched" && !nav.id.startsWith("top")
              )
              .map((item) => (
                <NavItem data={item} key={item.id} />
              ))}
            <div className="md:hidden">
              <NavItem data={navData.find((obj) => obj.id === "top-indie")} />
              <NavItem
                data={navData.find((obj) => obj.id === "top-multiplayer")}
              />
            </div>

            {/* Dropdown Nav item and Menu */}
            <div className="relative hidden md:block">
              <div
                className="flex gap-2 text-secondary-500 rounded-lg cursor-pointer items-center md:hover:bg-primary-50 hover:text-primary-600 duration-300 px-0 md:px-3 py-2 "
                onClick={onClickTopDropdownMenu}
              >
                <p>Top Games</p>
                <ChevronDownIcon className="w-4 h-4" />
              </div>

              {topDropDownMenuIsOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  ref={dropdownRef}
                >
                  <a
                    href="/#top-indie"
                    className="body2 block px-4 py-2 text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                    onClick={() =>
                      setTopDropdownMenuIsOpen(!topDropDownMenuIsOpen)
                    }
                  >
                    Indie
                  </a>
                  <a
                    href="/#top-multiplayer"
                    className="body2 block px-4 py-2 text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                    onClick={() =>
                      setTopDropdownMenuIsOpen(!topDropDownMenuIsOpen)
                    }
                  >
                    Multiplayer
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

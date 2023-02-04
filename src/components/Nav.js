import React, { useEffect, useState } from "react";
import logo from "../img/logo.svg";
import styled from "styled-components/macro";
import { fetchSearch } from "../redux/actions/gamesAction";
import { useDispatch } from "react-redux";

const StyledWrapper = styled("div")`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;

const Logo = styled("div")`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }
`;

export const Nav = () => {
  const dispatch = useDispatch();
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
    <StyledWrapper>
      <Logo onClick={clearSearch}>
        <img alt="logo" src={logo} />
        <h1>Geeky Business</h1>
      </Logo>
      <form className="search">
        <input type="text" value={searchInput} onChange={handleSearch} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledWrapper>
  );
};

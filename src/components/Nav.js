import React from "react";
import logo from "../img/logo.svg";
import styled from "styled-components/macro";

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
  return (
    <StyledWrapper>
      <Logo>
        <img alt="logo" src={logo} />
        <h1>Geeky Business</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledWrapper>
  );
};

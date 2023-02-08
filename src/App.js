import React from "react";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";

function App() {
  // Scroll spy
  // const section = document.querySelectorAll("section");
  // const navLinks = document.querySelectorAll("nav a");

  // const activeLinkStyle = ["text-secondary-900", "bg-secondary-200"];

  // window.onscroll = () => {
  //   section.forEach((sec) => {
  //     const top = window.scrollY;
  //     const offset = sec.offsetTop;
  //     const height = sec.offsetHeight;
  //     const id = sec.getAttribute("id");

  //     if (top >= offset && top < offset + height) {
  //       navLinks.forEach((link) => {
  //         link.classList.remove(...activeLinkStyle);
  //         document
  //           .querySelector("nav a[href*=" + id + "]")
  //           .classList.add(...activeLinkStyle);
  //       });
  //     }
  //   });
  // };

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import ThreeCompoent from "../threecomp/ThreeCompoent";
import TopHeader from "./TopHeader";

const MainHeader = () => {
  return (
    <>
      <TopHeader />
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container ">
            <div>
              <NavLink className="navbar-brand" to={"/"}>
                Navbar
              </NavLink>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="https://www.google.comnavbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.google.com"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>

      <ThreeCompoent />
    </>
  );
};

export default MainHeader;

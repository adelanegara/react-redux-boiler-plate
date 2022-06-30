import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light px-5 py-4 "
        data-testid="navbar"
      >
        <a className="navbar-brand" href={"/home"}>
          CAR BOOKING
        </a>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href={"/home"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/"}>
                Requsted
              </a>
            </li>
          </ul>
        </div>
        <div className="logout">
          <button data-testid="button-logout" className="btn btn-outline-dark">
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

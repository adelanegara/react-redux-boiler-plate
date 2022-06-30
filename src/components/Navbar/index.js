import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light px-5 py-4 "
        data-testid="navbar"
      >
        <a className="navbar-brand" href={"/"}>
          CAR BOOKING
        </a>
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

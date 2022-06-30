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
          <Link to="/cartlist" className="btn btn-outline-dark">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

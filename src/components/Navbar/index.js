import React from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";

const Navbar = ({ isLogin, onLogout, userAccount }) => {
  const isOwner = userAccount?.role === "owner";
  //handle logout UI
  const logout = () => {
    onLogout();
    toast.success("logout successfully");
    window.location.replace("/login");
  };
  if (!isLogin) {
    return null;
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light px-5 py-4 "
        data-testid="navbar"
      >
        <a className="navbar-brand" href={isOwner ? "/owner" : "/home"}>
          CAR BOOKING
        </a>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href={isOwner ? "/owner" : "/home"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/request"}>
                Request
              </a>
            </li>
          </ul>
        </div>
        {isLogin && <></>}

        <div className="logout">
          <button
            data-testid="button-logout"
            className="btn btn-outline-dark"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

//redux selector
const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  userAccount: state.userAccount,
});

//redux action
const mapDispatchToProps = (dispatch) => ({
  onLogout: () => {
    dispatch({ type: "LOGOUT" });
  },
});

export { Navbar as NavbarUnwrapped };

//combine the 2 state (action & selector from redux)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

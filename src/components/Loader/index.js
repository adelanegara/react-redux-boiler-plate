import React from "react";
import PropTypes from "prop-types";
import classes from "./style.css";

//import loading condition
//show svg loading
const propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const Loader = ({ isLoading }) => (
  <div
    className={`${classes.loaderComponent} ${
      isLoading ? classes.showLoader : ""
    }`}
  >
    <img src={"/src/image/loading.svg"} alt="Loading..." />
  </div>
);

Loader.propTypes = propTypes;

export default Loader;

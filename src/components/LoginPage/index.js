import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
import axios from "axios";
import { connect } from "react-redux";
import { config } from "../../server/config";

//validation email and password
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = ({ onLogin, setUserAccount, isLogin }) => {
  const checkAccount = (account, values) => {
    const findAccount = account.find((item) => {
      return item.email === values.email;
    });
    if (findAccount) {
      // validation role
      const checkPassword = bcrypt.compareSync(
        values.password,
        findAccount.password
      );
      if (checkPassword) {
        //if pass is correct
        setUserAccount(findAccount);
        onLogin();
        if (findAccount.role === "owner") {
          //and account role is owner the go to ownerpage
          window.location.replace("/owner");
        } else {
          window.location.replace("/home"); //and account role is user the go to userpage
        }

        toast.success("Login Succesfully");
      } else {
        toast.error("invalid password");
      }
    } else {
      toast.error("Account doesn't exist");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .get(config.url_account)
        .then((response) => checkAccount(response.data, values))
        .catch((error) => toast.error(error.message));
    },
  });

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-4 pt-5">
        <div className="shadow card card-login">
          <p className="card-title filter-text">LOGIN</p>
          <div className="card-body ">
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <div className="mt-3">
                <Link to="/register">
                  <small>Register </small>
                </Link>
              </div>
              <Button
                className=" text-light mt-5 bg-dark"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

//selector
const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

//action
const mapDispatchToProps = (dispatch) => ({
  onLogin: () => {
    dispatch({ type: "LOGIN" });
  },
  setUserAccount: (payload) => {
    dispatch({ type: "SET_USER_ACCOUNT", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

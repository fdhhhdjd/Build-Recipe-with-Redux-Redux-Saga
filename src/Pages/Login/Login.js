import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import Particles from "react-particles-js";
import { ToastContainer, toast, style } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  facebookInitial,
  googleInitial,
  loginInitial,
} from "../../redux/Action";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { currentUser } = useSelector((state) => state.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const { email, password } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitial(email, password));
    setState({ email: "", password: "" });
  };
  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);
  const handleGoogleSignIn = (google) => {
    dispatch(googleInitial(google));
  };
  const handleFacebookSignIn = (facebook) => {
    dispatch(facebookInitial(facebook));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <div className="background-dynamic">
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 10,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <ToastContainer />
        <div id="logreg-forms">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ textAlign: "center" }}
            >
              Sign In 🥰
            </h1>
            <div className="social-login">
              <button
                className="btn google-btn social-btn"
                type="button"
                onClick={handleGoogleSignIn}
              >
                <span>
                  <i className="fab fa-google-plus-g">SignIn with Google </i>
                </span>
              </button>
              <button
                className="btn facebook-btn social-btn"
                type="button"
                onClick={handleFacebookSignIn}
              >
                <span>
                  <i className="fab fa-facebook-f">SignIn with Facebook</i>
                </span>
              </button>
            </div>
            <p style={{ textAlign: "center" }}>OR</p>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
            <button className="btn btn-secondary btn-block" type="submit">
              <i className="fas fa-sign-in-alt"></i> &nbsp; Sign In
            </button>
            <hr />
            <p>Don't have an account</p>
            <Link to="/register">
              <button
                className="btn btn-primary btn-block"
                type="button"
                id="btn-signup"
              >
                <i className="fas fa-user-plus"></i>&nbsp; Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

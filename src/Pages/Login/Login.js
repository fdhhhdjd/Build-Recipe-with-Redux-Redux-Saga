import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import { ToastContainer, toast, style } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {};
  const handleFacebookSignIn = () => {};
  const handleChange = () => {};
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

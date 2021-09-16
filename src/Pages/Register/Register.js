import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import Particles from "react-particles-js";
import { ToastContainer, toast, style } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { registerInitial } from "../../redux/Action";
const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.data);
  const history = useHistory();
  const { displayName, email, password, passwordConfirm } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitial(email, password, displayName));
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);
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
        <div id="register-form">
          <form className="form-signup" onSubmit={handleSubmit}>
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ textAlign: "center" }}
            >
              Sign Up 🤩
            </h1>
            <p style={{ textAlign: "center" }}>OR</p>
            <input
              type="text"
              id="displayName"
              className="form-control"
              placeholder="Full Name"
              name="displayName"
              required
              value={displayName}
              onChange={handleChange}
            />

            <input
              type="email"
              id="user-email"
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
            <input
              type="password"
              id="inputRePassword"
              className="form-control"
              placeholder="Repest Password"
              name="passwordConfirm"
              required
              value={passwordConfirm}
              onChange={handleChange}
            />
            <button className="btn btn-primary btn-block" type="submit">
              <i className="fas fa-user-plus"></i> &nbsp; Sign Up
            </button>
            <hr />

            <Link to="/login">
              <button
                className="btn btn-secondary btn-block"
                type="button"
                id="btn-signup"
              >
                <i className="fas fa-angle-left"></i>&nbsp; Back to login 👌
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

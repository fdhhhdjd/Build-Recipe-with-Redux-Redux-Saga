import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
const UserRouter = ({ ...rest }) => {
  const { currentUser } = useSelector((state) => state.data);
  return currentUser ? <Route {...rest} /> : <Loading />;
};

export default UserRouter;

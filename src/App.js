import React, { useEffect, useRef } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserRouter from "./Components/userRouter/UserRouter";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./utils/firebase";
import { setUser } from "./redux/Action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <UserRouter exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;

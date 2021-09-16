import React, { useEffect, useRef } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;

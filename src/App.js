import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/";
import Confirm from "./components/Confirm/Confirm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/confirm">
            <Confirm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

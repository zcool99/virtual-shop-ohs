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
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/confirm" component={Confirm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

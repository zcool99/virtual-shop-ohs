import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/";
import Confirm from "./components/Confirm/Confirm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/confirm" component={Confirm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

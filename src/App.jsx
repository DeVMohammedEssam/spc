import React, { Component } from "react";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import NotFound from "./components/pages/NotFound";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

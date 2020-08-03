import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

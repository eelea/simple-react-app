import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Bike from "./Views/Bike";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
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
            <Route path="/bikes/:id">
              <Bike />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

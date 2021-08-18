import React from "react";
import "./App.css";
import Login from "./Login";
import Nav from "./Nav";
import Wishlist from "./Wishlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;

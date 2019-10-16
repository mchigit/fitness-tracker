import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weight from "../components/Weight";

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <Weight />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

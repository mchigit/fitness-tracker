import React from "react";
import "../css/App.css";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Weight from "../components/Weight";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  useTheme,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

class App extends React.PureComponent {
  render() {
    const theme = createMuiTheme({
      palette: {
        type: "dark"
      }
    });
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

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import NavBar from "./Navbar";

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <NavBar />
      </div>
    );
  }
}

export default App;

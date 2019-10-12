import React, { PureComponent } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends PureComponent {
  render() {
    return (
      <div className="nav-wrapper">
        <Navbar
          collapseOnSelect={true}
          expand="sm"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="#home">Fitness Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#weight">Log Weight</Nav.Link>
              <Nav.Link href="#features">Log Exercise</Nav.Link>
              <Nav.Link href="#pricing">View Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
function NavigationBar() {
  return (
    <>
      <Navbar
        id="NavBar"
        sticky="top"
        className="pt-3"
        expand="lg"
        data-bs-theme="dark"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#home">
            <h3 id="NavH3">Joo</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScrol" />
          <Navbar.Collapse id="navbarScrol" className="justify-content-end">
            <Nav className="NavItems text-light">
              <Nav.Link className="NavElement" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="NavElement" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="NavElement" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="NavElement" href="#project">
                Projects
              </Nav.Link>
              <Nav.Link className="NavElement" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;

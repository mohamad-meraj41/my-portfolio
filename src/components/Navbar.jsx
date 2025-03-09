// Navbar.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="mt-2 p-3 rounded shadow-lg">
      <Container>
        <Navbar.Brand href="#" className="fst-italic text-primary fw-bolder fs-3">MOHAMAD<span className="text-danger fw-bolder">.MERAJ</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex flex-row w-100 justify-content-evenly align-items-center fst-italic fs-3">
            <Nav.Link style={{color: "#BA8541"}} href="/">
              PROJECTS
            </Nav.Link>
            <Nav.Link style={{color: "#BA8541"}} href="/dashboard">
              DASHBOARD
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

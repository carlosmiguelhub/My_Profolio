import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top shadow-sm">
      <Container>
        <Navbar.Brand href="#Introsection" className="brand">
          <h4 class="bi bi-file-code-fill" ></h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#Introsection" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#Aboutsection" className="nav-link-custom">background & Likes</Nav.Link>
            <Nav.Link href="#Skillsection" className="nav-link-custom">Technologies</Nav.Link>
            <Nav.Link href="#Projectsection" className="nav-link-custom">Projects</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            
            <Button variant="primary" className="ms-3 rounded-pill px-4 py-2"  href="/myCV.pdf"
 target="_blank"rel="noopener noreferrer">
              VIEW MY CV <i class="bi bi-file-pdf-fill"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
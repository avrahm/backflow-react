import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../images/backflow-testers-logo.png';

export default function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <img src={logo} width="150" height="60" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/services">
              Backflow Testing
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Backflow Repairs
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Backflow Installation
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link href="/locations">Locations</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="tel:706-438-2522">
            <Button>Call Now 706-438-2522</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../../images/backflow-testers-logo.png";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function NavBar() {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <NavHashLink to="/#top" className="navbar-brand">
          <img
            src={logo}
            width="150"
            height="60"
            alt="Backflow Testers North GA Logo"
          />
        </NavHashLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavHashLink
              className="nav-link"
              activeStyle={{ color: "green" }}
              to="/#top"
            >
              Home
            </NavHashLink>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavHashLink
                to="/services#testing"
                className="dropdown-item"
                activeClassName="dropdown-item active"
              >
                Backflow testing
              </NavHashLink>

              <NavHashLink
                to="/services#repairs"
                className="dropdown-item"
                activeClassName="dropdown-item active"
              >
                Backflow repairs
              </NavHashLink>
              <NavHashLink
                to="/services#installation"
                className="dropdown-item"
                activeClassName="dropdown-item active"
              >
                Backflow installation
              </NavHashLink>
            </NavDropdown>
            <NavHashLink
              className="nav-link"
              activeStyle={{ color: "green" }}
              to="/locations#top"
            >
              Locations
            </NavHashLink>
            <NavHashLink
              className="nav-link"
              activeStyle={{ color: "green" }}
              to="/contactus#top"
            >
              Contact Us
            </NavHashLink>
          </Nav>
          <Nav>
            <Link className="nav-link" eventKey={2} to="tel:706-438-2522">
              <Button variant="outline-success" size="sm">
                Call Now 706-438-2522
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

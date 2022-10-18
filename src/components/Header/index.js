import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/monogram-blk-70.png";
import Button from "react-bootstrap/Button";

function Header(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Logo} alt="" height=""></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Link className="text-uppercase" href="#services">
                Services
              </Nav.Link>
              <NavDropdown
                className="text-uppercase"
                title="Portfolio"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="text-uppercase" href="#action/3.1">
                  project 1
                </NavDropdown.Item>
                <NavDropdown.Item className="text-uppercase" href="#action/3.2">
                  Project 2
                </NavDropdown.Item>
                <NavDropdown.Item className="text-uppercase" href="#action/3.3">
                  Project 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="text-uppercase" href="#action/3.4">
                  Project 4
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-uppercase" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

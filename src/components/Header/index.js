import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/monogram-blk-70.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import { Link } from "react-scroll";

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
              <Link
                activeClass="active"
                to="whatImDoing"
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
              >
                <Nav.Item className="text-uppercase nav-link">
                  What I'm doing
                </Nav.Item>
              </Link>
              <NavDropdown
                className="text-uppercase"
                title="Portfolio"
                id="basic-nav-dropdown"
              >
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-25}
                  duration={500}
                >
                  <Nav.Item
                    className="text-uppercase dropdown-item"
                    href="#action/3.1"
                  >
                    All Projects
                  </Nav.Item>
                </Link>
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
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
              >
                <Nav.Item className="text-uppercase nav-link">Contact</Nav.Item>
              </Link>
              <Nav.Item className="text-uppercase">
                <RouterLink to="/resume" className="text-uppercase nav-link">
                  Resume
                </RouterLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

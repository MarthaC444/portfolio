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
import { NavHashLink } from "react-router-hash-link";

function Header(props) {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <RouterLink to="/">
              <Image src={Logo} alt="" height="" />
            </RouterLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <NavHashLink
                to="/#whatImDoing"
                scroll={(el) => scrollWithOffset(el, 45)}
                className="text-uppercase nav-link text-muted"
              >
                What Im Doing
              </NavHashLink>
              <NavDropdown
                className="text-uppercase"
                title="Portfolio"
                id="basic-nav-dropdown"
              >
                <NavHashLink
                  to="/#portfolio"
                  scroll={(el) => scrollWithOffset(el, 45)}
                  className="text-uppercase nav-link text-muted ps-3"
                >
                  All Projects
                </NavHashLink>
                <NavDropdown.Item
                  className="text-uppercase text-muted"
                  href="#action/3.2"
                >
                  Project 2
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-uppercase text-muted"
                  href="#action/3.3"
                >
                  Project 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="text-uppercase text-muted"
                  href="#action/3.4"
                >
                  Project 4
                </NavDropdown.Item>
              </NavDropdown>
              <NavHashLink
                to="/#contact"
                className="text-uppercase nav-link text-muted"
              >
                Contact
              </NavHashLink>
              <RouterLink
                to="/resume"
                scroll={(el) => scrollWithOffset(el, 45)}
                className="text-uppercase nav-link"
              >
                Resume
              </RouterLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

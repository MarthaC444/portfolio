import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/monogram-blk-70.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

function Header(props) {
  return (
    <Navbar expand="lg">
      <Container className="my-4">
        <Navbar.Brand>
          <RouterLink to="/">
            <Image src={Logo} alt="" height="" />
          </RouterLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <HashLink
              to="/#whatImDoing"
              className="text-uppercase nav-link text-muted navlink-animation"
            >
              What Im Doing
            </HashLink>
            <HashLink
              to="/#portfolio"
              className="text-uppercase nav-link text-muted navlink-animation"
            >
              Portfolio
            </HashLink>
            <HashLink
              to="/#contact"
              className="text-uppercase nav-link text-muted navlink-animation"
            >
              Contact
            </HashLink>
            <RouterLink
              to="/resume"
              className="text-uppercase nav-link navlink-animation"
            >
              Resume
            </RouterLink>
          </Nav>
        </Navbar.Collapse>
        <Row className="d-flex row justify-content-around pe-2">
          <Col className="px-1">
            <a href="https://github.com/MarthaC444">
              <i
                className="bi bi-github text-muted"
                style={{ fontSize: 30 }}
              ></i>
            </a>
          </Col>
          <Col className="px-1">
            <a href="https://linkedin.com/in/mchamberlain444">
              <i
                className="bi bi-linkedin text-muted"
                style={{ fontSize: 30 }}
              ></i>
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;

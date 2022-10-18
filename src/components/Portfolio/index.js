import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import PortfolioProject from "../PortfolioProject";
import SecondProject from "../SecondProject";
import ThirdProject from "../ThirdProject";
import FourthProject from "../FourthProject";
import "./styles.css";

function Portfolio(props) {
  return (
    <section className="pt-5 pb-5">
      <Container>
        <h2 className="mb-3 text-uppercase fw-bold text-center">Portfolio</h2>
        <Row className="py-3">
          <PortfolioProject />
          <SecondProject />
          <ThirdProject />
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;

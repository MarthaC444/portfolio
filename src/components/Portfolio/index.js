import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PortfolioProject from "../PortfolioProject";
import SecondProject from "../SecondProject";
import ThirdProject from "../ThirdProject";
import { Element } from "react-scroll";

import "./styles.css";

function Portfolio(props) {
  return (
    <section className="pt-5 pb-5">
      <Container>
        <Element name="portfolio"></Element>
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

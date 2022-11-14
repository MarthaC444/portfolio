import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PortfolioProject from "../PortfolioProject";
import SecondProject from "../SecondProject";
import ThirdProject from "../ThirdProject";

import "./styles.css";

function Portfolio(props) {
  return (
    <section
      id="portfolio"
      className="pt-5 pb-5"
      style={{ backgroundColor: "#e4e6e7" }}
    >
      <Container className="mt-3">
        <h2 className="mb-5 text-uppercase fw-bold text-center">Portfolio</h2>
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

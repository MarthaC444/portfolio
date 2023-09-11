import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

function Hero(props) {
  return (
    <Container fluid className="hero-img shadow">
      <Container className="xxl-8 px-4 py-5">
        <Row className="align-items-center gx-5 py-5 header-color-gradient-small header-color-gradient-large">
          <Col lg={6}>
            <h1 className="lh-3 mb-3 text-uppercase">
              <div className="pb-2">
                <span className="fs-3">Jr. Front End Developer | React.js </span>
              </div>
              <div className="pt-1">
                <span className="text-gradient display-2 lh-1 fw-bold">
                  Martha Chamberlain
                </span>
              </div>
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Hero;

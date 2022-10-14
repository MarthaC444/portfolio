import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Headshot from "../../assets/headshot.jpg";
import "./styles.css";

function Services(props) {
  return (
    <section>
      <Container className="my-5 mx-auto">
        <h2 className="pb-3 text-uppercase fw-bold text-center">What I do</h2>
        <Row className="d-flex py-3 align-items-center">
          <Col sm={6} className="d-flex justify-content-center">
            <Image
              src={Headshot}
              className="rounded-circle shadow"
              width="200"
            ></Image>
          </Col>
          <Col sm={6}>
            <p className="pe-4 change-alignment">
              I've focused on React.js but would love the opportunity to expand
              my experience into other frameworks. If you located in the
              Tri-City area of east Tennessee or have a remote position, I'd
              love to hear from you.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;

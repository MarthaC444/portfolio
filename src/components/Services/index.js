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
        <section id="whatImDoing"></section>
        <h2 className="pb-3 text-uppercase fw-bold text-center">
          What I'm Doing
        </h2>
        <Row className="d-flex py-3 flex-sm-column flex-md-row align-items-center">
          <Col sm={6} className="d-flex justify-content-center">
            <Image
              src={Headshot}
              className="rounded-circle shadow m-3"
              style={{ maxWidth: 350 }}
              // width="350"
            ></Image>
          </Col>
          <Col sm={12} md={6}>
            <p className="change-alignment md-text-start">
              I'm building personal projects with React.js, Next.js, and getting
              more practice with UI tools like React-Bootstrap and Material UI.
              I'm currently looking for an Apprenticeship or Entry level Jr. development role so if you're located in the Tri-City area of east Tennessee or have a
              remote position, I'd love to hear from you!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;

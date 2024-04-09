import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Headshot from "../../assets/headshot.jpg";
import "./styles.css";

function Services(props) {
  return (
    <section id="whatImDoing" className="pt-5 pb-5">
      <Container className="my-5 mx-auto">
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
            <p className="change-alignment md-text-start pb-0">
              I'm currently building a wellness and spirituality app that has
              great features like audio meditations and exercises, self
              check-ins, reminders, and data visualizations.
            </p>
            <p className="change-alignment md-text-start py-0">
              Technologies I've worked with recently are Typescript, React,
              Next, Supabase and UI tools like React-Bootstrap and MUI.
            </p>
            <p className="change-alignment md-text-start pt-0">
              I'm open to a Jr. Front-end or entry level Full-stack role. If
              you're located in the Tri-Cities area of east Tennessee or have a
              remote opportunity I'd love to hear from you.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;

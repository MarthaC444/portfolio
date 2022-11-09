import React from "react";
import Header from "../../components/Header";
import StickyFooter from "../../components/StickyFooter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function FourOhFour() {
  return (
    <div className="h-100">
      <Header />
      <Container className="mx-auto">
        <Row className="w-sm-50 mx-auto" style={{ height: "50vh"}}>
          <Col className="d-flex-column align-self-center">
            <h1 className="d-flex justify-content-center p-3">404</h1>
            <p className="border-top d-flex justify-content-center p-4">Page not found</p>
          </Col>
        </Row>
        <StickyFooter />
      </Container>
    </div>
  );
}

export default FourOhFour;

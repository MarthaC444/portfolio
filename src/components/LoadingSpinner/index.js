import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );
}

export default LoadingSpinner;

import React from "react";
import Header from "../../components/Header";
import StickyFooter from "../../components/StickyFooter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function EditableList() {
  return (
    <div className="h-100">
      <Header />
      <Container className="mx-auto">
        <h1>An Editable List</h1>
        <StickyFooter />
      </Container>
    </div>
  );
}

export default EditableList;

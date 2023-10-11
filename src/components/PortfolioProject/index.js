import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";

import editList from "../../assets/edit-list-1080x700.jpg"

function PortfolioProject(props) {
  const [open, setOpen] = useState(false);

  return (
    <Col md={6} lg={4} className="p-1">
      <Card className="bg-dark text-white shadow-sm" style={{}}>
        <Image
          className=""
          src={editList}
          alt="Card image"
        />
        <Fade in={open}>
          <div
            id="portfolio-project-card-content"
            className="d-flex flex-column justify-content-between card-img-overlay overlay"
            style={{}}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            aria-owns="portfolio-project-card-content"
            aria-expanded={open}
          >
            <div className="d-flex justify-content-between align-items-start">
              <Card.Title className="pt-2">Lists</Card.Title>
              <Nav>
                <Row>
                  <Col className="px-2">
                    <a href="https://github.com/MarthaC444/portfolio/tree/develop/src/components/EditableList">
                      <i
                        className="bi bi-github"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </a>
                  </Col>
                  <Col className="ps-2 pe-3">
                    <RouterLink to="./List">
                      <i
                        className="bi bi-eye-fill"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </RouterLink>
                  </Col>
                </Row>
              </Nav>
            </div>
            <Card.Text>Nothing gets built without a list</Card.Text>
            <pre className="mb-0">React React-Bootstrap</pre>
          </div>
        </Fade>
      </Card>
    </Col>
  );
}
export default PortfolioProject;

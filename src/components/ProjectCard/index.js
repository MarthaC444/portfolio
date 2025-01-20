import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";

function ProjectCard({ project }) {
  const { title, image, github, example, description, tech } = project;
  const [open, setOpen] = useState(false);

  return (
    <Col md={6} lg={4} className="p-1">
      <Card className="bg-dark border-1 text-white shadow">
        <Card.Img src={image} alt="Card image" />
        <Fade in={open}>
          <Card.ImgOverlay
            className="d-flex flex-column justify-content-between border-0"
            style={{ backgroundColor: "rgba(0, 0, 0, .8)", borderRadius: "1%" }}
            id="portfolio-project-card-content"
            aria-owns="portfolio-project-card-content"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="d-flex justify-content-between align-items-start">
              <Card.Title className="pt-2">{title}</Card.Title>
              <Nav>
                <Row>
                  <Col className="px-2">
                    <a href={github} target="_blank" rel="noreferrer">
                      <i
                        className="bi bi-github"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </a>
                  </Col>
                  <Col className="ps-2 pe-3">
                    <RouterLink to={example} target="_blank" rel="noreferrer">
                      <i
                        className="bi bi-eye-fill"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </RouterLink>
                  </Col>
                </Row>
              </Nav>
            </div>
            <Card.Text>{description}</Card.Text>
            <pre className="mb-0">{tech}</pre>
          </Card.ImgOverlay>
        </Fade>
      </Card>
    </Col>
  );
}

export default ProjectCard;

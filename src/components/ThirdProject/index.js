import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";

function ThirdProject(props) {
  const [open, setOpen] = useState(false);

  return (
    <Col md={6} lg={4} className="p-1">
      <Card className="bg-dark text-white shadow-sm">
        <Image
          className=""
          src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
          alt="Card image"
        />
        <Fade in={open}>
          <div
            id="third-project-card-content"
            className="d-flex flex-column justify-content-between card-img-overlay overlay"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            aria-owns="third-project-card-content"
            aria-expanded={open}
          >
            <div className="d-flex justify-content-between align-items-start">
              <Card.Title className="pt-2">Third Project</Card.Title>
              <Nav>
                <Row>
                  <Col className="px-2">
                    <a href="#">
                      <i
                        className="bi bi-github"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </a>
                  </Col>
                  <Col className="ps-2 pe-3">
                    <a href="#">
                      <i
                        className="bi bi-eye-fill"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </a>
                  </Col>
                </Row>
              </Nav>
            </div>
            <Card.Text>
              A very short description CAN ONLY BE 123 CHAR LONG...with an extra
              line extra stuff and extra stuff on
            </Card.Text>
            <pre className="mb-0">React React-Bootstrap</pre>
          </div>
        </Fade>
      </Card>
    </Col>
  );
}

export default ThirdProject;

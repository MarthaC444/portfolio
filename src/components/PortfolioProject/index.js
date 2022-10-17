import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";

function PortfolioProject(props) {
  const [open, setOpen] = useState(false);

  return (
    <Col md={6} lg={4} className="p-1">
      <Card className="bg-dark text-white">
        <Image
          className=""
          src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
          alt="Card image"
        />
        <Fade in={open}>
          <div
            id="portfolio-project-card-content"
            className="d-flex flex-column justify-content-between card-img-overlay overlay"
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(!open)}
            aria-owns="portfolio-project-card-content"
            aria-expanded={open}
          >
            <div className="d-flex justify-content-between align-items-start">
              <Card.Title className="pt-2">Portfolio</Card.Title>
              <div>
                <ul className="nav col">
                  <li className="mx-1 pb-1">
                    <a href="#">
                      <i
                        className="bi bi-github"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </a>
                  </li>
                  <li className="mx-1 pb-1">
                    <a href="#">
                      <i
                        className="bi bi-eye-fill"
                        style={{ fontSize: 30, color: "white" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
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
export default PortfolioProject;
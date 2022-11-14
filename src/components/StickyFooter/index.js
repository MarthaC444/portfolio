import Image from "react-bootstrap/Image";
import Logo from "../../assets/monogram-blk-30.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

function StickyFooter(props) {
  return (
    <Container className=" fixed-bottom">
      <Container className="py-3 my-4 border-top">
        <Row className="d-flex flex-column flex-sm-row align-items-center">
          <Col className="order-sm-2">
            <Row>
              <Col className="d-flex justify-content-center justify-content-sm-end">
                <a href="https://github.com/MarthaC444">
                  <i
                    className="bi bi-github text-muted px-1"
                    style={{ fontSize: 30 }}
                  ></i>
                </a>
                <a href="https://linkedin.com/in/mchamberlain444">
                  <i
                    className="bi bi-linkedin text-muted px-1"
                    style={{ fontSize: 30 }}
                  ></i>
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center order-sm-1 pt-4 pt-sm-0">
            <Image src={Logo} className="align-self-center mx-2" alt=""></Image>
            <span className="align-self-center text-muted">
              &copy; 2022 Martha Chamberlain
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default StickyFooter;

import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import pdfFile from "../../assets/resume.pdf";
import jpgFile from "../../assets/resume.jpg";
import { Container, Button, Image } from "react-bootstrap";

function Resume(props) {
  return (
    <>
      <Header />
      <Container
        fluid
        className="mx-auto d-flex justify-content-center py-5 p-sm-5"
        style={{
          background:
            "linear-gradient(210deg, #6f6f6f 0%, #0E0E0E 70%, #0E0E0E 100%)",
        }}
      >
        <Image src={jpgFile} className="img-fluid border border-2" />
      </Container>
      <Container
        fluid
        className="ms-auto d-flex justify-content-center m-3 p-5"
      >
        <Button
          className=""
          variant="outline-dark"
          href={pdfFile}
          download="Martha-Chamberlain-Resume"
        >
          Download PDF
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default Resume;

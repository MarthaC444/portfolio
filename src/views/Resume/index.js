import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Button, Image } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";

import jpgFile from "../../assets/resume.jpg";
import pdfFile from "../../assets/resume.pdf";

function Resume() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setOpen(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? <LoadingSpinner /> : null}
      <Fade in={open}>
        <div>
          <Header />
          <Container
            fluid
            className="mx-auto d-flex justify-content-center py-5 p-sm-5"
            style={{
              background:
                "linear-gradient(210deg, #6f6f6f 0%, #0E0E0E 70%, #0E0E0E 100%)",
            }}
          >
            <Image
              src={jpgFile}
              className="img-fluid w-75 border border-2"
              style={{ maxWidth: "800px" }}
            />
          </Container>
          <Container
            fluid
            className="ms-auto d-flex justify-content-center m-3 p-5"
          >
            <Button
              className="btn border-0 text-light"
              href={pdfFile}
              style={{
                background:
                  "linear-gradient(130deg, #020202ff 0%, #595c5fff 46%, #989da1ff 98%)",
              }}
              download="Martha-Chamberlain-Resume"
            >
              Download PDF
            </Button>
          </Container>
          <Footer />
        </div>
      </Fade>
    </>
  );
}

export default Resume;

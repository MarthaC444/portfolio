import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import pdfFile from "../../assets/resume.pdf";
import { Container } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
// needed to load a webworker when using webpack/create-react-app
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Resume(props) {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Header />
      <Container className="fluid">
        <Document file={pdfFile} AonLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default Resume;

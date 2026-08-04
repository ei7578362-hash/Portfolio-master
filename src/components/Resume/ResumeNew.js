import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "70px" }}>
          <div style={{ textAlign: "center", color: "white", width: "100%" }}>
            <h3>Resume</h3>
            <p>The resume is displayed below. If it doesn't load, use the download button.</p>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px", marginTop: "10px", marginBottom: "20px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </div>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div style={{ color: "white" }}>Loading PDF...</div>}
            error={<div style={{ color: "white" }}>Failed to load PDF.</div>}
          >
            {numPages &&
              Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.7 : 0.6}
                />
              ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

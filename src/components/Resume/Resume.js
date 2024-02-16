import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import {motion} from "framer-motion";
import pdf from "../../Assets/../Assets/MathendaResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const Location = useLocation();
  useEffect(() => {
    setWidth(window.innerWidth);
    window.scrollTo(0,0);
  }, [Location]);

  return (
    <motion.div
      initial = {{opacity: 0}}
      animate = {{ opacity: 1}}
      exit = {{ opacity: 0}}
    >
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
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

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page style="A4" pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            
            <Page wrap={false} style={"A4"} pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
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
    </motion.div>
  );
}

export default Resume;

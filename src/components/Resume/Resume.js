import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import {motion} from "framer-motion";
import pdf from "../../Assets/MathendaResume.pdf";
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

          </Document>
          <Document file={pdf} className="d-flex justify-content-center">
            {/* <Col xs={6}> */}
            <Page className = "pdf-page" wrap={true} style={"A4"} pageNumber={2} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false}/>
            {/* </Col> */}
            {/* <Col xs={6}> */}

            {/* </Col> */}
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

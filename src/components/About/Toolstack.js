import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiWindows11,
  SiIntellijidea,
  SiClion,
  SiCmake,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows 11">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Intellij Ultimate">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Clion">
        <SiClion />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="cMake">
        <SiCmake />
      </Col>
    </Row>
  );
}

export default Toolstack;

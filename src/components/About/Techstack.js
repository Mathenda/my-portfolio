import React from "react";
import { Col, Row } from "react-bootstrap";
import { Simulate } from "react-dom/test-utils";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiFortran,
  SiRuby,
  SiAssemblyscript,
  SiPhp,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NodeJS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Fortran">
        <SiFortran />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ruby">
        <SiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Assembly">
        <SiAssemblyscript  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostGreSql">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;

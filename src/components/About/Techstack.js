import React from "react";
import { Col, Row } from "react-bootstrap";
import { Simulate } from "react-dom/test-utils";
import { CgCPlusPlus } from "react-icons/cg";
import { motion } from "framer-motion";

import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DIReact,
  DiReact
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
      <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <CgCPlusPlus />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <DiJavascript1 />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NodeJS">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <DiNodejs />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiMysql  />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Fortran">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiFortran />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <DiMongodb />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ruby">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiRuby />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <DiGit />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <DiReact  />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiPhp />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostGreSql">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiPostgresql />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <DiPython />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.1,
                
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <DiJava />
        </motion.div>

      </Col>
    </Row>
  );
}

export default Techstack;

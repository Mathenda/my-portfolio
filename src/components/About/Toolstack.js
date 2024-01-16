import React from "react";
import { Col, Row } from "react-bootstrap";
import FadeInSection from "../FadeInSection";
import { motion } from "framer-motion";
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
    <FadeInSection>
        
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows 11">
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
        <SiWindows11 />
        
        </motion.div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS code">
      <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.2,
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiVisualstudiocode />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
      <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.3,

                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiPostman />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Intellij Ultimate">
      <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.4,
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiIntellijidea />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.5,

                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiGithub />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Clion">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.6,
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiClion />
        </motion.div>

      </Col>
      <Col xs={4} md={2} className="tech-icons" title="cMake">
              <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
              delay: 0.7,
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}>
        <SiCmake />
        </motion.div>

      </Col>
    </Row>
    </FadeInSection>
  );
}

export default Toolstack;

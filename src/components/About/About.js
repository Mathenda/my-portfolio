import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutInfo from "./AboutInfo"
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About({CurrentTheme}){
    // console.log(CurrentTheme);
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col
                    md={15}
                    style={{
                    justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px",
                    }}
                >
            <div className="stack-title">
                <h2><span>About Me</span><span className="bg-text">WHO I AM</span></h2>
            </div>



                    {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Know Who <strong className="purple">I AM</strong>
                    </h1> */}
                    <AboutInfo />
                </Col>

                </Row>

                <div className="stack-title">
                <h3><span>Professional Skillset</span><span className="bg-text">languages</span></h3>
            </div>
                <Techstack />

                <div className="stack-title">
                <h3><span>Tools I use</span><span className="bg-text">Software</span></h3>
            </div>
                <Toolstack />

                <Github GithubTheme={CurrentTheme}/>
        </Container>

        </Container>
    );
}

export default About;
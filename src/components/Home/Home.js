import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeInfo from "./HomeInfo";

import Type from "./Type";
import MouseFadeInSection from "../MouseFadeInSection";
function Home(){
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                <Row>
                    <Col md={12} className="home-header">
                    <h1 style={{ paddingBottom: 35 }} className="heading">
                        Hi There!{" "}
                    </h1>

                    <h1 className="heading-name">
                        I'M
                        <strong className="main-name"> Mathenda Maphasha</strong>
                    </h1>

                    <div style={{ padding: 50, textAlign: "left" }}>
                        <Type />
                    </div>
                    </Col>

                </Row>
                </Container>
                <MouseFadeInSection>
                <div className="scroll-downs">
            <div className="mousey">
                <div className="scroller"></div>
            </div>
            </div>
                </MouseFadeInSection>

            </Container>

            <HomeInfo defer/>
        </section>
    );
}

export default Home;
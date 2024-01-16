import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import HomeInfo from "./HomeInfo";
import Type from "./Type";
import FadeInSection from "../FadeInSection";
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
                <div class="scroll-downs">
            <div class="mousey">
                <div class="scroller"></div>
            </div>
            </div>
                </MouseFadeInSection>

            </Container>

            <HomeInfo defer/>
        </section>
    );
}

export default Home;
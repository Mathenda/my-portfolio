import {React, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeInfo from "./HomeInfo";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import Type from "./Type";
import MouseFadeInSection from "../MouseFadeInSection";
function Home(){
    const Location = useLocation();

    useEffect (() =>{
        window.scrollTo(0,0);
    }, [Location]);
    return (
        <motion.div
            initial = {{opacity: 0}}
            animate = {{ opacity: 1}}
            exit = {{ opacity: 0}}
        >
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
        </motion.div>
        
    );
}

export default Home;
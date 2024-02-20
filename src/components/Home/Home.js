import {React, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeInfo from "./HomeInfo";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import Type from "./Type";
import MouseFadeInSection from "../MouseFadeInSection";
// import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
// import * as drei from '@react-three/drei'
// import { Svg } from '@react-three/drei';
// import * as fiber from '@react-three/fiber'
// import * as reactSpring from '@react-spring/three'
function Home(){
    const Location = useLocation();

    useEffect (() =>{
        window.scrollTo(0,0);
    }, [Location]);
    return (
    //     <ShaderGradientCanvas
    //     importedFiber={{ ...fiber, ...drei, ...reactSpring }}
    //     style={{
    //       position: 'absolute',
    //       top: 0,
    //     }}
    //   >
    //      <ShaderGradient
    //      control ='query'
    //      urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
    //      />

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
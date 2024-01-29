import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FadeInSection from "../FadeInSection";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineMail
  } from "react-icons/ai";



  function HomeInfo(props){
    
    return (
        <Container fluid className="home-about-section" id="about">
        <Container>
      <FadeInSection>

          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> ABOUT </span> ME
              </h1>
              <p className="home-about-body">
                From a young age, technology has fascinated me, and has been the driving force in expanding on my interests ever since
                <br />
                <br />I am fluent in the fundamentals like
                <i>
                  <b className="purple"> C++, Javascript and Java. </b>
                </i>
                <br />
                <br />
                I have developed interest in fields like &nbsp;
                <i>
                  <b className="purple">Web Technologies and app development </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Artificial intelligence and machine learning
                  </b>
                </i>
                <br />
                <br />
                In the pursuit of expanding my knowledge, I also apply my passion for developing products
                with <b className="purple">react.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks and python AI libraries
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            {/* <Col md={4} className="myAvtar"> */}
              {/* <Tilt> */}
                {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              {/* </Tilt> */}
            {/* </Col> */}
          </Row>
          </FadeInSection>
          <Row>
            <Col md={12} className="home-about-social">
              <h1><span className="purple">CONNECT</span> WITH ME</h1>
              <p>
                Feel free to Find me on
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/The1Don1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Mathenda1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://discordapp.com/users/335694466998599681"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaDiscord />
                  </a>
                </li>
                {/* <li className="social-icons">
                  <a
                    href="https://wa.me/27730908426 "
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaWhatsapp />
                  </a>
                </li> */}
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_Mathenda_"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  export default HomeInfo;
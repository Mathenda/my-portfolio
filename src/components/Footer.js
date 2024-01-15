import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
}from "react-icons/ai";


function Footer(){
    let data = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by Mathenda Maphasha</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} EMM</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a 
                            href = "https://github.com/The1Don1"
                            style={{color:"white"}}
                            target="_blank"
                            rel = " moopener noreferrer"
                            ></a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}


export default Footer;
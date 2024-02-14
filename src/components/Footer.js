import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
}from "react-icons/ai";


function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by Mathenda Maphasha</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>email for Enquiries at Mathendam@gmail.com</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <h3>Co-Designed by Ofentse Ramothibe</h3>
                </Col>
            </Row>
        </Container>
    );
}


export default Footer;
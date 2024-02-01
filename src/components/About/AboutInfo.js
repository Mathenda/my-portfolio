import React from "react";
import Card from "react-bootstrap/Card";
import { ImRadioUnchecked } from "react-icons/im";
import MouseFadeInSection from "../MouseFadeInSection";
import {Reveal} from "../Reveal";

function AboutInfo(){
    return (
      
        <Card className="quote-card-view">
          <Card.Body>

            <blockquote className="blockquote mb-3">
              <p style={{ textAlign: "justify" }}>
                <Reveal>
                Hi Everyone, I'm <span className="purple">Mathenda Maphasha </span>
                from <span className="purple"> Pretoria, South africa.</span></Reveal>
                <br />                <br></br>
                <Reveal>I am a final year Computer science Student at the University Of Pretoria</Reveal>
                <br />
                <Reveal>Apart from coding, some other activities that I love to do! </Reveal>
              </p>
              <Reveal>
              <ul>
                <li className="about-activity">
                  <ImRadioUnchecked  /> Reading
                </li>
                <li className="about-activity">
                  <ImRadioUnchecked  /> Photography
                </li>
                <li className="about-activity">
                  <ImRadioUnchecked  /> Travelling
                </li>
              </ul>
              </Reveal>
              <MouseFadeInSection>
                <div className="scroll-downs">
                  <div className="mousey">
                  <div className="scroller"></div>
                  </div>
                </div>
                </MouseFadeInSection>
              <p style={{ color: "var(--color-purple-3)" }}>
                "Progress is man's ability to complicate simplicity."{" "}
              </p>
              <footer className="blockquote-footer">Thor Heyerdahl

    </footer>

            </blockquote>

          </Card.Body>

        </Card>
      );
}

export default AboutInfo;
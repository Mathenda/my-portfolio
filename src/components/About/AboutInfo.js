import React from "react";
import Card from "react-bootstrap/Card";
import { ImRadioUnchecked } from "react-icons/im";
import MouseFadeInSection from "../MouseFadeInSection";


function AboutInfo(){
    return (
      
        <Card className="quote-card-view">
          <Card.Body>

            <blockquote className="blockquote mb-3">
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I'm <span className="purple">Mathenda Maphasha </span>
                from <span className="purple"> Pretoria, South africa.</span>
                <br />                <br></br>
                I am a final year Computer science Student at the University Of Pretoria
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>
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
              <MouseFadeInSection>
                <div class="scroll-downs">
                  <div class="mousey">
                  <div class="scroller"></div>
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
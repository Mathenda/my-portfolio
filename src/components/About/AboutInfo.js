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
                <Reveal>I am a <span className="purple">final year Computer science Student</span> at the <span className="purple">University Of Pretoria</span></Reveal>
                <br />
                <Reveal><span className="purple">Apart from coding</span>, some other activities that I love to do! </Reveal>
              </p>
              <Reveal>
              <ul>
                <li className="about-activity">
                <span className="purple"><ImRadioUnchecked  /> Reading</span>
                </li>
                <li className="about-activity">
                <span className="purple"><ImRadioUnchecked  /> Photography</span>
                </li>
                <li className="about-activity">
                <span className="purple"><ImRadioUnchecked  /> Travelling</span>
                </li>
              </ul>
              </Reveal>
              <span className="purple"><MouseFadeInSection>
                <div className="scroll-downs">
                  <div className="mousey">
                  <div className="scroller"></div>
                  </div>
                </div>
                </MouseFadeInSection></span>
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
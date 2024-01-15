import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import def from "../../Assets/logo.png";
import ProjectInfo from "./ProjectInfo";
function Projects(){
    return(
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Projects</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={def}
              isBlog={false}
              title="Social Notes"
              description="Networked notes app using AWS as a chrome extension / mobile app  react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/the1Don1"
              demoLink="https://github.com/the1Don1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={def}
              isBlog={false}
              title="SPOTIFY tinder"
              description="A Spotify application that uses Spotify’s web api to create an interface that allows user to like or dislike songs within daily mixes and radios using Tinder’s signature Left / Right motion. Spotify android/iOS app developed using ReactJS / Kotlin"
              ghLink="https://github.com/the1Don1"
              demoLink="https://github.com/the1Don1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={def}
              isBlog={false}
              title="Lorem Ipsum"
              description="Aut sapiente voluptatum qui quia quidem 33 eveniet eveniet 33 nulla amet sit quasi natus est pariatur dolorem non dolorem quod? Id quaerat necessitatibus est consequuntur odit qui magnam voluptatem qui rerum debitis aut deleniti galisum!"
              ghLink="https://github.com/the1Don1"
              demoLink="https://github.com/the1Don1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={def}
              isBlog={false}
              title="Lorem Ipsum"
              description="Aut sapiente voluptatum qui quia quidem 33 eveniet eveniet 33 nulla amet sit quasi natus est pariatur dolorem non dolorem quod? Id quaerat necessitatibus est consequuntur odit qui magnam voluptatem qui rerum debitis aut deleniti galisum!"
              ghLink="https://github.com/the1Don1"
              demoLink="https://github.com/the1Don1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={def}
              isBlog={false}
              title="Lorem Ipsum"
              description="Aut sapiente voluptatum qui quia quidem 33 eveniet eveniet 33 nulla amet sit quasi natus est pariatur dolorem non dolorem quod? Id quaerat necessitatibus est consequuntur odit qui magnam voluptatem qui rerum debitis aut deleniti galisum!"
              ghLink="https://github.com/the1Don1"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={def}
              isBlog={false}
              title="Lorem Ipsum"
              description="Aut sapiente voluptatum qui quia quidem 33 eveniet eveniet 33 nulla amet sit quasi natus est pariatur dolorem non dolorem quod? Id quaerat necessitatibus est consequuntur odit qui magnam voluptatem qui rerum debitis aut deleniti galisum!"
              ghLink="https://github.com/the1Don1"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
            </Container>
        </Container>
    );
}

export default Projects;
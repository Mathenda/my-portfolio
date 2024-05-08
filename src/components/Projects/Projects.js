import {React, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import academicWriters from "../../Assets/writers.jpg";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import quiz from "../../Assets/quiz.jpeg";
import film from "../../Assets/film.png";
import spotify from "../../Assets/spotify.png";
import spotify2 from "../../Assets/spotify2.png";
import notes from "../../Assets/notes.png";
import photgraph from "../../Assets/portfolio-screenie.png"
import ProjectInfo from "./ProjectInfo";
function Projects(){
  const Location = useLocation();

  useEffect(() =>{
    window.scrollTo(0,0);
  }, [Location]);
    return(
      <motion.div
        initial = {{opacity: 0}}
        animate = {{ opacity: 1}}
        exit = {{ opacity: 0}}
      >
        <Container fluid className="project-section">
            <Container>
            <div className="stack-title">
                <h2><span>Projects</span><span className="bg-text">My Work</span></h2>
            </div>
                <p style={{ color: "var(--color-purple-3) ", paddingTop: "30px" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
                <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={photgraph}
              isBlog={false}
              title="Photographers Portfolio"
              description="A commisioned web site for a photographer to showcase their work and allow clients to book sessions. The site is built using pureJS, HTML and CSS. It has features which allows user to book sessions, view gallery, and contact the photographer."
              ghLink="https://github.com/the1Don1\static-portfolio-2"
              demoLink="https://okysxoops-portfolio.vercel.app"
              showGhButton={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={film}
              isBlog={false}
              title="Movie recommender"
              description="Interactive python script that uses machine learning to adjust based on your tastes and recommend movies you might enjoy"
              ghLink="https://github.com/the1Don1/python-movie-recommender"



            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={academicWriters}
              isBlog={false}
              title="Academic Writers"
              description="Digital Educational Resources & Research Capacity Building. Academic Writers™ is an educational institute that provides digital educational resources to students, teachers, academics, researchers, and other relevant entities involved in scholarly work with the sole purpose of advancing digital literacy and research capacity building. 

              "
              // ghLink="https://academicwriters.org.za"

              demoLink="https://academicwriters.org.za"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={quiz}
              isBlog={false}
              title="QuizUp"
              description="An academic tool used to promote Active learning by providing a tool to generate questions and grade responses"
              // ghLink="https://github.com/the1Don1"
              // demoLink="https://github.com/the1Don1"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={spotify2}
              isBlog={false}
              title="SPOTIFY tinder"
              description="A Spotify application that uses Spotify’s web api to create an interface that allows user to like or dislike songs within daily mixes and radios using Tinder’s signature Left / Right motion. Spotify android/iOS app developed using ReactJS / Kotlin"
              // ghLink="https://github.com/the1Don1"
              // demoLink="https://github.com/the1Don1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={spotify}
              isBlog={false}
              title="Spotify similarity calculator"
              description="Web app that uses the Spotify REST API to compare to spotify accounts and return a similarity score based on genre, playlist and listening patterns"
              // ghLink="https://github.com/the1Don1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectInfo
              imgPath={notes}
              isBlog={false}
              title="Social Notes"
              description="Networked notes app using AWS as a chrome extension / mobile app  react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="https://github.com/the1Don1"
              // demoLink="https://github.com/the1Don1"
            />
          </Col>
        </Row>
            </Container>
        </Container>
      </motion.div>
        
    );
}

export default Projects;
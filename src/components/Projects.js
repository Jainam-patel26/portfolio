import {Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../sources/color-sharp2.png";
import projImg1 from "../sources/project-img1.png";
import projImg2 from "../sources/project-img2.png";
import projImg3 from "../sources/project-img3.png";
import projImg4 from "../sources/project-img4.png";
import projImg5 from "../sources/project-img5.png";
import projImg6 from "../sources/project-img6.png";
import projImg7 from "../sources/project-img7.png";
import projImg8 from "../sources/project-img8.png";
import projImg9 from "../sources/project-img9.png";
import ui1 from "../sources/ui1.png";
import ui2 from "../sources/ui2.png";
import ui3 from "../sources/ui3.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
   
    const projectsWEB = [
        {
          title: "MY PORTFOLIO",
          description: "Designing and developing a website using React of my Personal Portfolio",
          imgUrl: projImg1,
          url: "",
        },
        {
            title: "TO DO LIST",
            description: "Designing and developing a website using EJS where a user can dynamically add a list and delete a list",
            imgUrl: projImg2,
            url: "https://github.com/justcodingxdd/todolist",
          },
        {
          title: "SOCIAL MEDIA",
          description: "Designing and developing a website using HTML, CSS, JavaScript for Social Network where a user can change the theme of text, background color and text size",
          imgUrl: projImg3,
          url: "https://github.com/justcodingxdd/SocialMedia",
        },
        {
            title: "TINDOG",
            description: "Design & Development of a website using HTML CSS of a Dating website for Dog",
            imgUrl: projImg4,
            url: "https://github.com/justcodingxdd/DogDatingApp",
        },
        {
          title: "DRUM KIT",
          description: "Development of a website using Vanilla JS where there are various voice sounds for different instruments and user can play them by clicking it",
          imgUrl: projImg5,
          url: "https://github.com/justcodingxdd/DrumKit",
        },
        {
          title: "CALCULATOR",
          description: "Design & Development using Vanilla JS of a website where a user can perform various mathematical calculations",
          imgUrl: projImg6,
          url: "https://github.com/justcodingxdd/Calculator",
        },
        {
          title: "TIC TAC TOE",
          description: "A website to play the game of Tic Tac Toe using HTML, CSS and Javascript",
          imgUrl: projImg7,
          url: "https://github.com/justcodingxdd/TicTacToe",
        },
        {
            title: "Quiz Web",
            description: "A website for quiz where user can anser to various questions and chack their score at the end. Made using HTML CSS and Javascript",
            imgUrl: projImg8,
            url: "https://github.com/justcodingxdd/Quiz_web",
        },
        {
            title: "Analog Clock",
            description: "Design & Development using HTML, CSS and Javascript which gives current time",
            imgUrl: projImg9,
            url: "https://github.com/justcodingxdd/Analog_Clock",
        },
      ];
      const projectsUI = [
        {
            title: "EV Car Control",
            description: "Prototyping an App on Figma where I majorly focused on UI / UX of an EV vehicle app where a user can control his car remotely",
            imgUrl: ui1,
            url: "https://www.figma.com/proto/gG4Qki4BmWGAhdnALudPFv/Smart-Car-App?type=design&node-id=33-1199&scaling=scale-down&page-id=0%3A1&starting-point-node-id=33%3A1271&show-proto-sidebar=1",
        },
        {
            title: "Sprinkle System Scheduler",
            description: "Prototyping an App on Figma where I majorly focused on UI / UX Automated Sprinkler System Scheduler to efficiently manage the watering of lawns and gardens.",
            imgUrl: ui2,
            url: "https://www.figma.com/proto/cbX6LpmOUh40fjpz5EbIhP/DJCSI-PP?type=design&node-id=2-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1",
        },
        {
          title: "Cyber Shield App",
          description: "Prototyping an App on Figma where I majorly focused on UI / UX of a Citizen safety app against Cyber Crimes",
          imgUrl: ui3,
          url: "https://www.figma.com/proto/DNCK6XrtuS3kPQaspbZCKY/CyberShield-App?type=design&node-id=25-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=25%3A2",
        },
        
      ];
    

    return(
        <section className ="project" id="projects">
            
            <Container >
                <Row >
                    <Col>
                    <TrackVisibility>
                     {({isVisible}) => 
                       <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>PROJECTS</h2>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">WEB</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UI/UX</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsWEB.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                      key={index}
                                                      {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsUI.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                      key={index}
                                                      {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section> 
    );
}
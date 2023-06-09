import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorsharp from "../sources/colorsharp.png";
import meter1 from "../sources/meter1.svg";
import meter2 from "../sources/meter2.svg";
import meter3 from "../sources/meter3.svg";
import arrow1 from "../sources/arrow1.svg";
import arrow2 from "../sources/arrow2.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                        </div> 
                         
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web Designer</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>UI/UX Designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Artist</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Video Editing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            
                        </Carousel>

                        <p> <b>Languages:</b> C, C++, Java, HTML, CSS, JavaScript, Bootstrap, React, Flutter, SQL<br></br>
                            <b>Technologies:</b> Figma, Git, MySQL, Adobe XD, Adobe AE, Adobe AI <br></br>
                            <b>Platforms:</b> Windows, Android, Linux, Google Cloud Platform
                        </p> 
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorsharp} />
        </section>
      )
}
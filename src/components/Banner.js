import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../sources/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UI Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <TrackVisibility>
                     {({isVisible}) => 
                       <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
                        <p>Student of <b>Information Technology</b> & Similar to the unchanging syntax used in
                            programming languages, I possess a highly adaptable nature that enables me to learn and
                            effectively communicate in any language.</p>
                        <a href="#connect" className="lets-connect"><button>Let's connect <ArrowRightCircle size={25}/></button></a> 
                        </div>
                     }
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img class="banner-image"src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
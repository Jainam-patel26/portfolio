import { Container, Row, Col } from "react-bootstrap";
import MyLogo from "../sources/MyLogo.png"
import navIcon1 from "../sources/nav-icon1.svg"
import navIcon2 from "../sources/nav-icon2.svg"
import navIcon3 from "../sources/nav-icon3.svg"

export const Footer = () => {
    let currentYear = new Date().getFullYear();
   return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center ">
                    <Col sm={6} className="text-center footer-div ">
                        <div className="social-icon social-icon-footer">
                            <a href="https://www.linkedin.com/in/jainam-patel-a75825251/" target="_blank" rel="noreferrer" className="footer-icon"><img src={navIcon1} alt="LinkedIn"/></a>
                            <a href="https://github.com/justcodingxdd" className="footer-icon" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                            <a href="https://www.instagram.com/freehand_sketcher_jp/" className="footer-icon" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                        </div>
                        <p className="footer-text">&copy; {currentYear} Jainam Patel. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
   ) 
}
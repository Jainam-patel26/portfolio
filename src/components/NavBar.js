import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from "react";
import MyLogo from "../sources/MyLogo.png"
import navIcon1 from "../sources/nav-icon1.svg"
import navIcon2 from "../sources/nav-icon2.svg"
import navIcon3 from "../sources/nav-icon3.svg"


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
               <img src={MyLogo} alt="logo" className="myLogo"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >HOME</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>SKILLS</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1vILc8t6sPebUO30HPaZZcuHIKBspOHE_/view" target="_blank" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>RESUME</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/jainam-patel-a75825251/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn"/></a>
                  <a href="https://github.com/justcodingxdd" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                  <a href="https://www.instagram.com/freehand_sketcher_jp/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                </div>
                <a href="#connect"><button className="vvd" ><span>Let's Connect</span></button></a>
              </span>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
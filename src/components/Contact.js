import {useState} from "react";
import { Container } from "react-bootstrap";
import contactImg from "../sources/contact-img.svg";
import { Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import '../App.css';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lsb5218', 'template_nbhyvkg', form.current, '9OJi3I5Em-A0bbFwr')
        
        e.target.reset();
    };

    return  (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img className="contact-image" src = {contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <div classsName="container-contact ">
                            <h2 className="contact-header">Let's Get in Touch</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <Form.Control className="mb-3" type="text" placeholder="Full Name" name="user_name" required/>
                                <Form.Control className="mb-3" type="email" placeholder="Email ID" name="user_email" required  />
                                <Form.Control className="mb-3" type="tel" placeholder="Contact Number" name="contact_number" />
                                <Form.Control className="mb-3" type="text" placeholder="Subject" name="subject" required />
                                <Form.Control className="mb-3" as="textarea" placeholder="Your Message" name="message" rows={3} />
                                <button type="submit" className="contact-button align-items-center">Send Message</button>
                            </form>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
}
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../Components/About.css";
import aboutImg from "../assets/Image/Temp/AboutImg.png";

const About = () => {
  return (
    <>
      <section id="about" className="py-lg-3">
        <Container className="mt-lg-5 py-4 py-lg-5">
          <Row>
            <Col lg={5} className="d-xs-none d-lg-block ">
              <img className="w-100" src={aboutImg} alt="" />
            </Col>
            <Col lg={7} className="text-center text-lg-start">
              <p id="aboutHeading" className="h1 ">
                About Me
              </p>
              <p id="about-content" className="h6 text-light mt-3">
                Hi, I'm Jothivasan, a <span>Front-End Web Developer</span>{" "}
                dedicated to developing user-friendly and responsive websites. I
                hold a <span>Bachelor’s degree in Computer Applications</span>{" "}
                with a CGPA of 8.2. My education has provided me with a strong
                theoretical and practical understanding of computer science and
                web development principles.
              </p>
              <p id="about-content-1" className="text-light my-2">
                My journey into <span> web development</span> began with a
                fascination for how websites work. Over time, this interest grew
                into a passion for creating seamless and engaging digital
                experiences. I enjoy the challenge of turning complex designs
                into easy-to-navigate websites, and I am constantly motivated by
                the ever-evolving nature of web technologies.
              </p>
              <div>
                <Button id="contact-btn" className="mt-3 me-3" href="#contact">
                  Contact
                </Button>{" "}
                <a href="Resume.pdf" download="Jothivasaan Resume">
                  <Button
                    id="download-btn"
                    className="mt-3"
                    variant="outline-primary"
                  >
                    Download Cv{" "}
                    <i className="bi bi-file-earmark-arrow-down"></i>
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;

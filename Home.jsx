import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyImg from "../assets/Image/Temp/HomeImg.png";
import "./Home.css";

function Home() {
  return (
    <>
      <section id="home" className="pt-5 py-lg-5">
        <Container className="pt-5">
          <Row className="justify-content-center align-item-center text-light pb-5">
            <Col className="mb-3 mb-lg-5">
              <h3 className="MainH3 mt-lg-5 pt-lg-5">Hello, I am</h3>
              <h2 className="MainH2 loader">
                <span className="loader-text">Jothivasan</span>
              </h2>
              <p className="pe-lg-5 me-lg-5 ">
                I'm a <span>Front-End Web Developer </span>dedicated to
                transforming designs into user-friendly and responsive websites.
                With a passion for creating seamless digital experiences, I
                ensure every project is crafted with precision and care. Explore
                my work and let's create something amazing together.
              </p>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/jothi-vasan-6b1720242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiFQZLvf%2FRDmVW82FCw2MZA%3D%3D"
                  className="m-1 mt-3 ms-0 py-1 px-1"
                >
                  <div className="iconCard">
                    <span className="iconTooltip">Linkedin</span>
                    <i className="bi bi-linkedin"></i>
                  </div>
                </a>
                <a
                  href="https://github.com/joo-28"
                  className=" m-1 mt-3 py-1 px-1"
                >
                  <div className="iconCard">
                    <span className="iconTooltip">Github</span>
                    <i className="bi bi-github"></i>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/ig_joo/"
                  className="m-1 mt-3 py-1 px-1"
                >
                  <div className="iconCard">
                    <span className="iconTooltip">Instagram</span>
                    <i className="bi bi-instagram"></i>
                  </div>
                </a>
              </div>
            </Col>
            <Col
              className="text-center pt-lg-0 p-2 pb-lg-5 p-lg-2 mb-lg-2"
              xl={5}
            >
              <img className="w-100" src={MyImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Home;

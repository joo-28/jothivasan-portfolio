import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../Components/project.css";
import iphoneLandingPage from "../assets/Image/project/iphoneLandingPage.png";
import weatherForecastPage from "../assets/Image/project/weatherForecastingPage.png";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <section id="project" className="pt-5">
        <Container>
          <Row>
            <Col>
              {" "}
              <p id="projectAnimations" className="h1 pt-lg-5 text-center">
                <span>Projects </span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} id="project-1" className="m-xl-auto ">
              <ProjectCard
                projectTitle={"iPhone Landing Page"}
                projectImg={iphoneLandingPage}
                projectDescription={
                  "iPhone 12 landing page , the designs are clone of an Amazon and Apple offical website , this landing page is developed with HTML ,CSS"
                }
                projectLink={"https://joo-28.github.io/iPhone-landing-page/"}
                projectGithubLink={
                  "https://github.com/joo-28/iPhone-landing-page"
                }
              />
            </Col>
            <Col xs={12} lg={6} id="project-2" className="m-xl-auto">
              <ProjectCard
                projectTitle={"Weather Forecasting Page"}
                projectImg={weatherForecastPage}
                projectDescription={
                  "Responsive Weather Forecasting Page that adapts seamlessly to various screen sizes. Technologies Used: HTML5 | CSS3 | Javascript | Openweather API"
                }
                projectLink={
                  "https://joo-28.github.io/responsive-weather-forecasting-page/"
                }
                projectGithubLink={
                  "https://github.com/joo-28/responsive-weather-forecasting-page"
                }
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;

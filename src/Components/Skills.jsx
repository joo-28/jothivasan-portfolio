import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import bootstrapLogo from "../assets/Image/Skills/bootstrap.svg";
import cssLogo from "../assets/Image/Skills/css.svg";
import githubLogo from "../assets/Image/Skills/github.svg";
import htmlLogo from "../assets/Image/Skills/html.svg";
import jsLogo from "../assets/Image/Skills/javascript.svg";
import reactLogo from "../assets/Image/Skills/react.svg";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <>
      <section id="skills" className="py-lg-4">
        <Container className="p-3 pt-5 p-lg-5 mb-3">
          <Row className="pb-4">
            <Col>
              <p id="skillanimation" className="h1 text-light text-center">
                My<span> Skills</span>
              </p>
            </Col>
          </Row>
          <Row xs={3} className="">
            <Col lg={2} className=" ps-4 px-3 px-md-5 my-4">
              <SkillCard skillName={"HTML"} skillImg={htmlLogo} />
            </Col>
            <Col lg={2} className="px-3 px-md-5  my-4">
              <SkillCard skillName={"CSS"} skillImg={cssLogo} />
            </Col>
            <Col lg={2} className="px-3 px-md-5 my-4">
              <SkillCard skillName={"JavaScript"} skillImg={jsLogo} />
            </Col>
            <Col lg={2} className="ps-4 px-3 px-md-5 my-4">
              <SkillCard skillName={"BootStrap"} skillImg={bootstrapLogo} />
            </Col>
            <Col lg={2} className="px-3 px-md-5 my-4">
              <SkillCard skillName={"React"} skillImg={reactLogo} />
            </Col>
            <Col lg={2} className="px-3 px-md-5 my-4">
              <SkillCard skillName={"Github"} skillImg={githubLogo} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;

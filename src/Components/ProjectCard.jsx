import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../Components/project.css";
const ProjectCard = (props) => {
  return (
    <>
      <Container>
        <Card
          id="Card"
          style={{
            backgroundColor: "#B4B4B8",
          }}
          className="my-4 mx-2 pt-3 px-3 p-lg-3 w-auto h-auto"
        >
          <Card.Img className="rounded" variant="top" src={props.projectImg} />
          <Card.Body>
            <Card.Title className="fs-5 fw-bold">
              {props.projectTitle}
            </Card.Title>
            <Card.Text className="fs-6">{props.projectDescription}</Card.Text>
            <Button
              id="github-btn"
              className="mt-3 me-3"
              href={props.projectGithubLink}
            >
              GitHub
            </Button>
            <Button
              className="mt-3 ms-4"
              variant="outline-dark"
              href={props.projectLink}
            >
              Link{""}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProjectCard;

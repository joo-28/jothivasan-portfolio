import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Components/Contact.css";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "108480f5-90c0-4403-82f8-e359c5786199");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section id="contact" className="py-5">
        <Container>
          <Row>
            <Col>
              {" "}
              <p className="h1 text-light text-center">
                Get In <span>Touch</span>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={8} lg={6}>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    {" "}
                    <span>Name</span>{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    {" "}
                    <span>Email address</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    {" "}
                    <span>Comments</span>{" "}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <span className="text-center">{result}</span>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import emailjs from "@emailjs/browser";
import { Element } from 'react-scroll';


function Contact(props) {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);

  const resetForm = () => {
    nameInput.current.value = "";
    emailInput.current.value = "";
    messageInput.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b90ios1",
        "template_mzn3koi",
        form.current,
        "HXSa5Fi57OF2vsb6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
          setSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
          resetForm();
          setFailedMessage(true);
        }
      );
  };

  return (
    <Container>
      <Element name="contact"></Element>
      <h2 className="mb-3 text-uppercase fw-bold text-center">Contact</h2>
      <Container className="container-md">
        <Row>
          <Col className="col-xs-100 col-lg-6 mx-auto">
            <Form ref={form} onSubmit={sendEmail}>
              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  ref={nameInput}
                  type="text"
                  maxLength={100}
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  ref={emailInput}
                  type="email"
                  maxLength={100}
                  name="user_email"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingMessage"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  ref={messageInput}
                  type="text"
                  maxLength={2000}
                  as="textarea"
                  name="message"
                  style={{ height: "100px" }}
                  placeholder="Your message"
                  required
                />
              </FloatingLabel>
              <Form.Control type="submit" value="Send" />
            </Form>
          </Col>
        </Row>
        <div style={{ minHeight: "30px" }}>
          {!successMessage ? (
            <></>
          ) : (
            <Alert
              className="col-xs-100 col-lg-6 my-3 mx-auto"
              variant="success"
              onClose={() => setSuccessMessage(false)}
              dismissible
            >
              Message sent! I will get back to you shortly.
            </Alert>
          )}
        </div>
        <div style={{ minHeight: "30px" }}>
          {!failedMessage ? (
            <></>
          ) : (
            <Alert
              className="col-xs-100 col-lg-6 my-3 mx-auto"
              variant="warning"
              onClose={() => setFailedMessage(false)}
              dismissible
            >
              Something went wrong. Please try again,
              <a href="mailto:marthachamberlain444@gmail.com">send mail</a>, or
              even <a href="tel:303-550-1102">call</a>!
            </Alert>
          )}
        </div>
      </Container>
    </Container>
  );
}

export default Contact;

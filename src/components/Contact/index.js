import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Contact() {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const resetForm = () => {
    nameInput.current.value = "";
    emailInput.current.value = "";
    messageInput.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(process.env.REACT_APP_FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setFailedMessage(true);
        } else if (response.ok) {
          setSuccessMessage(true);
          resetForm();
        }
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
        resetForm();
      });
  };

  return (
    <section id="contact" className="pt-5">
      <Container className="container-md mt-5">
        <Stack gap={2} className="mb-4">
        <div ref={ref}>
        {inView ?           
          <h2 className="no-wait-fade-in mb-5 text-uppercase fw-bold text-center">
            Contact
          </h2> : null}
        </div>
          <Stack
            direction="horizontal"
            className="gap-3 text-center align-self-center"
          >
            <Button
              href="mailto:marthachamberlain444@gmail.com"
              target="_blank"
              variant="secondary"
              aria-label="Contact through email"
              role="link"
            >
              <i className="bi bi-envelope-fill" />
            </Button>
            <Button
              href="tel:303-550-1102"
              variant="secondary"
              aria-label="Contact through call"
              role="link"
            >
              <i className="bi bi-telephone-fill" />
            </Button>
          </Stack>
        </Stack>
        <Row>
          <Col className="col-xs-100 col-lg-6 mx-auto">
            <Form
              ref={form}
              action={process.env.REACT_APP_FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
            >
              <FloatingLabel label="Name" htmlFor="name" className="mb-3">
                <Form.Control
                  ref={nameInput}
                  id="name"
                  type="text"
                  maxLength={100}
                  name="Name"
                  placeholder="Your name"
                  required
                />
              </FloatingLabel>
              <FloatingLabel label="Email" htmlFor="email" className="mb-3">
                <Form.Control
                  ref={emailInput}
                  id="email"
                  type="email"
                  maxLength={100}
                  name="Email"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
              <FloatingLabel label="Message" htmlFor="message" className="mb-3">
                <Form.Control
                  ref={messageInput}
                  id="message"
                  type="text"
                  maxLength={2000}
                  as="textarea"
                  name="message"
                  style={{ height: "100px" }}
                  placeholder="Your message"
                  required
                />
              </FloatingLabel>
              <Form.Control
                type="submit"
                value="Send"
                className="btn btn-outline-dark"
              />
              <div aria-hidden="true">
                <input
                  type="hidden"
                  name="_gotcha"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>
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
              Message sent! I will respond shortly.
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
              <a href="mailto:marthachamberlain444@gmail.com"> send mail</a>, or
              even <a href="tel:303-550-1102">call</a>!
            </Alert>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Contact;

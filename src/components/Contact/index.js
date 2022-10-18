import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <h2 className="mb-3 text-uppercase fw-bold text-center">Contact</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="user_email" />
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} />
        <Form.Control type="submit" value="Send" />
      </Form>
    </Container>
  );
};

export default Contact;
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const CheckoutForm = ({ confirmModal }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(false);
    confirmModal();
  };

  return (
    <Container className="my-4">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required minLength={2} />
          <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@company.com"
            pattern="/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="+x xx xxx xx"
            // regex is valid but does not not work here.
            // pattern={
            //   /^\s*(?:\+?(\d{1,2}))?[-. (]*(\d{2})[-. )]*(\d{3})[-. ]*(\d{2})(?: *x(\d+))?\s*$/g
            // }
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Romania" minLength={4} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid country.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Bucharest" minLength={2} required />
          <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Iuliu Maniu 999" minLength={2} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicZipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" placeholder="123456" required minLength={6} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip code.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutForm;

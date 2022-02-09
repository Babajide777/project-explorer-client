import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";

const MainSignUp = () => {
  return (
    <>
      <div className="mx-auto w-50 p-3 mw-70">
        <h1>Signup</h1>
        <Form id="signupForm" method="post" action="/signup">
          <Alert
            className="alert alert-danger"
            variant="danger"
            // show={showAlert}
          >
            {/* {err.map((text) => {
                return (
                  <>
                    {text}
                    <br />
                  </>
                );
              })} */}
          </Alert>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" name="firstName" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" name="lastName" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={6}>
              <Form.Label>Program:</Form.Label>
              <Form.Control as="select" name="program">
                <option>Select Option</option>
                {/* {program.map((prog) => (
                  <option key={prog}>{prog}</option>
                ))} */}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Matric Number:</Form.Label>
              <Form.Control name="matricNumber" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Graduation Year:</Form.Label>
              <Form.Control as="select" name="graduationYear">
                <option>Select Option</option>
                {/* {graduationYear.map((year) => (
                  <option key={year}>{year}</option>
                ))} */}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <br />

        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Button
                href="/auth/facebook"
                size="sm"
                style={{
                  backgroundColor: "#3b5998",
                  marginBottom: 5 + "px",
                  width: 190 + "px",
                }}
              >
                <Facebook color="#fff" size="30" /> Signup with Facebook
              </Button>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Button
                href="/auth/google"
                size="sm"
                style={{ backgroundColor: "#DB4437", width: 190 + "px" }}
              >
                <Google color="	#fff" size="30" /> Signup with Google
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainSignUp;

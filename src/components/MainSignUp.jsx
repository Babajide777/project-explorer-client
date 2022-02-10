import React, { useEffect, useReducer, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";
import { reducer } from "../reducers/signUpReducer";

const initialState = {
  showAlert: false,
  errMsg: [],
};

const MainSignUp = () => {
  const [program, setProgram] = useState([]);
  const [graduationYear, setGraduationYear] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:4000/home/programs")
      .then((res) => res.json())
      .then((res) => setProgram(res.data))
      .catch((err) => console.log(err));

    fetch("http://localhost:4000/home/graduationyears")
      .then((res) => res.json())
      .then((res) => setGraduationYear(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mx-auto w-50 p-3 mw-70">
      <h1 className="text-primary">Signup</h1>
      <Form id="signupForm" className="mb-3">
        <Alert
          className="alert alert-danger"
          variant="danger"
          show={state.showAlert}
        >
          {state.errMsg.map((text) => {
            return (
              <>
                {text}
                <br />
              </>
            );
          })}
        </Alert>
        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label className="fw-bold text-primary">First Name</Form.Label>
            <Form.Control type="text" name="firstName" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold text-primary">Last Name</Form.Label>
            <Form.Control type="text" name="lastName" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md={6} controlId="formGridEmail">
            <Form.Label className="fw-bold text-primary">Email</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="fw-bold text-primary">Password</Form.Label>
            <Form.Control type="password" name="password" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label className="fw-bold text-primary">Program</Form.Label>
            <Form.Select name="program">
              <option>Select Option</option>
              {program.map((prog) => (
                <option key={prog}>{prog}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold text-primary">
              Matric Number
            </Form.Label>
            <Form.Control type="text" name="matricNumber" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold text-primary">
              Graduation Year
            </Form.Label>
            <Form.Select as="select" name="graduationYear">
              <option>Select Option</option>
              {graduationYear.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>

      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Button
              href="/auth/facebook"
              size="sm"
              className="fb-icon ss-icon mb-2"
            >
              <Facebook color="#fff" size="30" /> Signup with Facebook
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button href="/auth/google" size="sm" className="gg-icon ss-icon">
              <Google color="	#fff" size="30" /> Signup with Google
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainSignUp;

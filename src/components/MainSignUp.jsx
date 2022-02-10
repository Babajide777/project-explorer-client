import React, { useEffect, useReducer, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";
import { reducer } from "../reducers/signUpReducer";

const initialState = {
  showAlert: false,
  errMsg: [],
};

const MainSignUp = () => {
  const [programs, setPrograms] = useState([]);
  const [graduationYears, setGraduationYears] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:4000/home/programs")
      .then((res) => res.json())
      .then((res) => setPrograms(res.data))
      .catch((err) => console.log(err));

    fetch("http://localhost:4000/home/graduationyears")
      .then((res) => res.json())
      .then((res) => setGraduationYears(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {};

  return (
    <div className="mx-auto w-50 p-3 mw-70">
      <h1>Signup</h1>
      <Form id="signupForm" className="mb-3" onSubmit={handleSubmit}>
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
            <Form.Label className="fw-bold">First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={firstName}
              onClick={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={lastName}
              onClick={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md={6} controlId="formGridEmail">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onClick={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onClick={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label className="fw-bold">Program</Form.Label>
            <Form.Select
              name="program"
              value={program}
              onClick={(e) => setProgram(e.target.value)}
            >
              <option>Select Option</option>
              {programs.map((prog) => (
                <option key={prog}>{prog}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Matric Number</Form.Label>
            <Form.Control
              type="text"
              name="matricNumber"
              value={matricNumber}
              onClick={(e) => setMatricNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Graduation Year</Form.Label>
            <Form.Select
              as="select"
              name="graduationYear"
              value={graduationYear}
              onClick={(e) => setGraduationYear(e.target.value)}
            >
              <option>Select Option</option>
              {graduationYears.map((year) => (
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

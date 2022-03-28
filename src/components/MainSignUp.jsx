import React, { useEffect, useReducer, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { setToken } from "../auth";
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
  let navigate = useNavigate();

  const googleClick = () => {
    window.open("https://jide-explorer.herokuapp.com/auth/google", "_self");
  };

  const facebookClick = () => {
    window.open("https://jide-explorer.herokuapp.com/auth/facebook", "_self");
  };

  useEffect(() => {
    fetch("https://jide-explorer.herokuapp.com/home/programs")
      .then((res) => res.json())
      .then((res) => setPrograms(res.data))
      .catch((err) => console.log(err));

    fetch("https://jide-explorer.herokuapp.com/home/graduationyears")
      .then((res) => res.json())
      .then((res) => setGraduationYears(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REFRESH" });
    if (firstName === "") {
      dispatch({ type: "NO_FIRSTNAME_VALUE" });
    }
    if (lastName === "") {
      dispatch({ type: "NO_LASTNAME_VALUE" });
    }
    if (email === "") {
      dispatch({ type: "NO_EMAIL_VALUE" });
    }
    if (password === "") {
      dispatch({ type: "NO_PASSWORD_VALUE" });
    }
    if (program === "") {
      dispatch({ type: "INCORRECT_PROGRAM_VALUE" });
    }
    if (program === "Select Option") {
      dispatch({ type: "INCORRECT_PROGRAM_VALUE" });
    }
    if (matricNumber === "") {
      dispatch({ type: "NO_MATRIC_VALUE" });
    }
    if (graduationYear === "") {
      dispatch({ type: "INCORRECT_GRADUATION_YEAR_VALUE" });
    }
    if (graduationYear === "Select Option") {
      dispatch({ type: "INCORRECT_GRADUATION_YEAR_VALUE" });
    }

    if (
      !(
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === "" ||
        program === "" ||
        program === "Select Option" ||
        matricNumber === "" ||
        graduationYear === "" ||
        graduationYear === "Select Option"
      )
    ) {
      fetch("https://jide-explorer.herokuapp.com/user/signup", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          program,
          matricNumber,
          graduationYear,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setToken("user", res.data);
            navigate("/");
          }
          dispatch({ type: "ERROR_FROM_SERVER", payload: res.message });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="mx-auto w-50 p-3 mw-70">
      <h1 className="text-primary mb-4">Signup</h1>
      <Form id="signupForm" className="mb-3" onSubmit={handleSubmit}>
        <Alert
          className="alert alert-danger"
          variant="danger"
          show={state.showAlert}
        >
          {state.errMsg.map((text) => {
            return (
              <>
                <small key={text}>{text}</small>
                <br />
              </>
            );
          })}
        </Alert>
        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label className="fw-bold text-primary">First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold text-primary">Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md={6} controlId="formGridEmail">
            <Form.Label className="fw-bold text-primary">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="fw-bold text-primary">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label className="fw-bold text-primary">Program</Form.Label>
            <Form.Select
              name="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
            >
              <option>Select Option</option>
              {programs.map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold text-primary">
              Matric Number
            </Form.Label>
            <Form.Control
              type="text"
              name="matricNumber"
              value={matricNumber}
              onChange={(e) => setMatricNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold text-primary">
              Graduation Year
            </Form.Label>
            <Form.Select
              as="select"
              name="graduationYear"
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
            >
              <option>Select Option</option>
              {graduationYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
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
              size="sm"
              className="fb-icon ss-icon mb-2"
              onClick={facebookClick}
            >
              <Facebook color="#fff" size="30" /> Signup with Facebook
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button size="sm" className="gg-icon ss-icon" onClick={googleClick}>
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

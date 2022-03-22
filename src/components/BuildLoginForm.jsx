import React, { useReducer, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { setToken } from "../auth";
import { reducer } from "../reducers/loginReducer";

const initialState = {
  showAlert: false,
  errMsg: [],
};

const BuildLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REFRESH" });
    if (email === "") {
      dispatch({ type: "NO_EMAIL_VALUE" });
    }
    if (password === "") {
      dispatch({ type: "NO_PASSWORD_VALUE" });
    }

    if (!(email === "" || password === "")) {
      fetch("http://localhost:4000/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setToken("user", res.data);
            navigate("/");
          } else {
            dispatch({
              type: "USER_UNAUTHETICATION",
              payload: res.message,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="mx-auto w-50 p-3 mw-70">
      <h1 className="text-primary mb-4">Login</h1>
      <Form
        id="loginForm"
        method="post"
        className="mb-3"
        onSubmit={handleSubmit}
      >
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
        <Form.Group controlId="formBasicEmail" className="mb-2">
          <Form.Label className="fw-bold text-primary">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label className="fw-bold text-primary">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <a href="/forgotpassword" className="link-primary ms-3">
          Forgot Password?
        </a>
      </Form>

      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Button href="/auth/facebook" size="sm" className="fb-icon mb-2">
              <Facebook color="#fff" size="30" /> Login with Facebook
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button href="/auth/google" size="sm" className="gg-icon">
              <Google color="	#fff" size="30" /> Login with Google
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuildLoginForm;

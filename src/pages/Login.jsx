import React, { useReducer, useState } from "react";
import Layout from "./shared/Layout";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";

const initialState = {
  showAlert: false,
  errMsg: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NO_EMAIL_VALUE":
      return {
        showAlert: true,
        errMsg: "Email can not be empty",
      };

    case "NO_PASSWORD_VALUE":
      return {
        showAlert: true,
        errMsg: "Password can not be empty",
      };

    case "REFRESH":
      return {
        ...state,
        showAlert: false,
      };

    default:
      throw new Error("no matching action type");
  }
};

const BuildForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REFRESH" });
    if (email === "") {
      dispatch({ type: "NO_EMAIL_VALUE" });
    }
    if (password === "") {
      dispatch({ type: "NO_PASSWORD_VALUE" });
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
          {state.errMsg}
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

const Login = (props) => {
  return (
    <Layout us={props.us}>
      <BuildForm />
    </Layout>
  );
};

export default Login;

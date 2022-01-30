import React, { useState } from "react";
import Layout from "./shared/Layout";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";

const BuildForm = ({ err }) => {
  const [showAlert, setShowAlert] = useState(false);
  // err.length > 0 ? (showAlert = true) : (showAlert = false);

  return (
    <div className="mx-auto w-50 p-3 mw-70">
      <h1 className="text-primary mb-4">Login</h1>
      <Form id="loginForm" method="post" action="/login" className="mb-3">
        <Alert className="alert alert-danger" variant="danger" show={showAlert}>
          {err}
        </Alert>
        <Form.Group controlId="formBasicEmail" className="mb-2">
          <Form.Label className="fw-bold text-primary">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label className="fw-bold text-primary">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
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
      <BuildForm {...props} />
    </Layout>
  );
};

export default Login;

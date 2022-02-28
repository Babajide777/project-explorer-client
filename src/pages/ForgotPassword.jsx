import React from "react";
import Layout from "./shared/Layout";
import { Alert, Button, Form } from "react-bootstrap";

const BuildForm = () => {
  // let showAlert = false;
  // err.length > 0 ? (showAlert = true) : (showAlert = false);
  return (
    <>
      <div className="mx-auto w-50 p-3 mw-70 mb-5">
        <h2 className="text-primary fw-bold mb-4">Forgot Password?</h2>
        <Form id="loginForm" method="post" action="/forgotpassword">
          {/* <Alert
            className="alert alert-danger"
            variant="danger"
            show={showAlert}
          >
            {err}
          </Alert> */}

          <Alert className="alert alert-primary" variant="primary">
            Enter your email address to begin the password reset process
          </Alert>

          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <a
            href="/login"
            className="link-primary"
            style={{ marginLeft: 15 + "px" }}
          >
            Login
          </a>
        </Form>
      </div>
    </>
  );
};

const ForgotPassword = (props) => {
  return (
    <Layout us={props.us}>
      <BuildForm {...props} />
    </Layout>
  );
};

export default ForgotPassword;

import React from "react";
import Layout from "./shared/Layout";
import { Alert, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BuildForm = () => {
  let { id } = useParams();
  return (
    <>
      <div className="mx-auto w-50 p-3 mw-70">
        <h2 className="text-primary fw-bold mb-4">Reset Password</h2>
        <Form id="loginForm" method="post" action="/resetpassword">
          {/* <Alert
            className="alert alert-danger"
            variant="danger"
            show={showAlert}
          >
            {err}
          </Alert> */}

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label className="fw-bold text-primary">
              New Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              name="password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold text-primary">
              Confirm Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              name="id"
              defaultValue={id}
              className="d-none"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

const ResetPassword = (props) => {
  return (
    <Layout us={props.us}>
      <BuildForm {...props} />
    </Layout>
  );
};

export default ResetPassword;

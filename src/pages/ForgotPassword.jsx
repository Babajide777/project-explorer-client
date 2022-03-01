import React from "react";
import Layout from "./shared/Layout";
import { Alert, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuildForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("danger");
  const [alertClass, setAlertClass] = useState("alert alert-danger");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(false);
    setErrMsg([]);
    if (email === "") {
      setShowAlert(true);
      setErrMsg(["Email field can not be empty"]);
    } else {
      setShowAlert(false);
      setErrMsg([]);
      fetch("http://localhost:4000/user/forgotpassword", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setAlert("success");
            setAlertClass("alert alert-success");
            setShowAlert(true);
            setErrMsg(res.message);
            setTimeout(() => {
              navigate("/");
            }, 5000);
          }
          setShowAlert(true);
          setErrMsg(res.message);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="mx-auto w-50 p-3 mw-70 mb-5">
        <h2 className="text-primary fw-bold mb-4">Forgot Password?</h2>
        <Form id="loginForm" onSubmit={handleSubmit}>
          <Alert className={alertClass} variant={alert} show={showAlert}>
            {errMsg.map((text) => {
              return (
                <>
                  <small key={text}>{text}</small>
                  <br />
                </>
              );
            })}
          </Alert>
          <Alert className="alert alert-primary" variant="primary">
            Enter your email address to begin the password reset process
          </Alert>

          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <a href="/login" className="link-primary ms-3">
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

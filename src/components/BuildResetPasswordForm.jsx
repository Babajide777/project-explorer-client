import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useReducer } from "react";
import { reducer } from "../reducers/forgotPasswordReducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  showAlert: false,
  errMsg: [],
  alertVariant: "danger",
  alertClass: "alert alert-danger",
};

const BuildResetPasswordForm = () => {
  let { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REFRESH" });
    if (password === "") {
      dispatch({ type: "NO_PASSWORD_VALUE" });
    }
    if (confirmPassword === "") {
      dispatch({ type: "NO_CONFIRMPASSWORD_VALUE" });
    }
    if (password !== confirmPassword) {
      dispatch({ type: "PASSWORDS_DO NOT_MATCH" });
    }

    if (
      !(
        confirmPassword === "" ||
        password === "" ||
        password !== confirmPassword
      )
    ) {
      fetch("http://localhost:4000/user/resetpassword", {
        method: "POST",
        body: JSON.stringify({ password, confirmPassword, id }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            dispatch({ type: "SUCCESS", payload: res.message });
            setTimeout(() => {
              navigate("/");
            }, 5000);
          }
          dispatch({
            type: "USER_UNAUTHETICATION",
            payload: res.message,
          });
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="mx-auto w-50 p-3 mw-70">
        <h2 className="text-primary fw-bold mb-4">Reset Password</h2>
        <Form id="loginForm" onSubmit={handleSubmit}>
          <Alert
            className={state.alertClass}
            variant={state.alertVariant}
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

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label className="fw-bold text-primary">
              New Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default BuildResetPasswordForm;

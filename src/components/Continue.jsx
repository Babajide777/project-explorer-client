import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { setToken, url } from "../auth";
import { reducer } from "../reducers/continueSignupReducer";
import { usePrograms } from "../usePrograms";

const initialState = {
  showAlert: false,
  errMsg: [],
  alertVariant: "danger",
  alertClass: "alert alert-danger",
};

const Continue = () => {
  const [matricNumber, setMatricNumber] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const { programs, graduationYears } = usePrograms();

  const [user, setUser] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}user/continuesignup`, {
      method: "POST",
      headers: {
        Authorization: `Bearer${JSON.stringify(id)}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setToken("user", { token: id });
          const { program, graduationYear } = res.data;
          if (program === undefined && graduationYear === undefined) {
            setUser(res.data);
          } else {
            navigate("/");
          }
        } else {
          console.log(res);
          // navigate("/errorsignup");
        }
      });
  }, [navigate, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REFRESH" });

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
        program === "" ||
        program === "Select Option" ||
        matricNumber === "" ||
        graduationYear === "" ||
        graduationYear === "Select Option"
      )
    ) {
      fetch("https://jide-explorer.herokuapp.com/user/updatecontinuesignup", {
        method: "PUT",
        body: JSON.stringify({
          program,
          graduationYear,
          matricNumber,
          id: user._id,
        }),
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
    <div className="mx-auto w-50 p-3 mw-60 mb-5">
      <h1 className="text-primary mb-4">Continue your signup process</h1>
      <Form onSubmit={handleSubmit}>
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

        <Form.Group>
          <Form.Label className="fw-bold text-primary">
            Matric Number
          </Form.Label>
          <Form.Control
            name="matricNumber"
            value={matricNumber}
            onChange={(e) => setMatricNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
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

        <Form.Group className="mb-3">
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Continue;

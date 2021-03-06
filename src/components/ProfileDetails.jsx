import React, { useEffect, useReducer, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { reducer1 } from "../reducers/changePasswordReducer";
import { reducer } from "../reducers/editProfileReducer";
import axios from "axios";
import { url } from "../auth";
import { usePrograms } from "../usePrograms";

const initialState1 = {
  showAlert: false,
  errMsg: [],
  alertVariant: "danger",
  alertClass: "alert alert-danger",
};

const initialState = {
  showAlert: false,
  errMsg: [],
  alertVariant: "danger",
  alertClass: "alert alert-danger",
};

const ProfileDetails = () => {
  const [details, setDetails] = useState({});
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameForm, setFirstNameForm] = useState("");
  const [lastNameForm, setLastNameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [programForm, setProgramForm] = useState("");
  const [matricNumberForm, setMatricNumberForm] = useState("");
  const [graduationYearForm, setGraduationYearForm] = useState("");
  const [profilePicture, setprofilePicture] = useState();
  const [state1, dispatch1] = useReducer(reducer1, initialState1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { programs, graduationYears } = usePrograms();
  let navigate = useNavigate();
  let { id } = useParams();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    dispatch1({ type: "REFRESH" });
    if (currentPassword === "") {
      dispatch1({ type: "NO_CURRENT_PASSWORD" });
    }
    if (newPassword === "") {
      dispatch1({ type: "NO_NEW_PASSWORD" });
    }
    if (confirmPassword === "") {
      dispatch1({ type: "NO_CONFIRM_PASSWORD" });
    }
    if (confirmPassword !== newPassword) {
      dispatch1({ type: "PASSWORDS_DONT_MATCH" });
    }

    if (
      !(
        currentPassword === "" ||
        newPassword === "" ||
        confirmPassword === "" ||
        confirmPassword !== newPassword
      )
    ) {
      fetch(`${url}user/profilechangepwd`, {
        method: "PUT",
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword,
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            dispatch1({ type: "SUCCESS", payload: res.message });
            setTimeout(() => {
              navigate("/");
            }, 5000);
          } else {
            dispatch1({
              type: "USER_UNAUTHETICATION",
              payload: res.message,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleProfileChange = (e) => {
    e.preventDefault();
    dispatch({ type: "REFRESH" });
    if (firstNameForm === "") {
      dispatch({ type: "NO_FIRSTNAME_VALUE" });
    }
    if (lastNameForm === "") {
      dispatch({ type: "NO_LASTNAME_VALUE" });
    }
    if (emailForm === "") {
      dispatch({ type: "NO_EMAIL_VALUE" });
    }
    if (programForm === "") {
      dispatch({ type: "INCORRECT_PROGRAM_VALUE" });
    }
    if (programForm === "Select Option") {
      dispatch({ type: "INCORRECT_PROGRAM_VALUE" });
    }
    if (matricNumberForm === "") {
      dispatch({ type: "NO_MATRIC_VALUE" });
    }
    if (graduationYearForm === "") {
      dispatch({ type: "INCORRECT_GRADUATION_YEAR_VALUE" });
    }
    if (graduationYearForm === "Select Option") {
      dispatch({ type: "INCORRECT_GRADUATION_YEAR_VALUE" });
    }

    if (
      !(
        firstNameForm === "" ||
        lastNameForm === "" ||
        emailForm === "" ||
        programForm === "" ||
        programForm === "Select Option" ||
        matricNumberForm === "" ||
        graduationYearForm === "" ||
        graduationYearForm === "Select Option"
      )
    ) {
      let formData = new FormData();
      formData.append("id", id);
      formData.append("firstName", firstNameForm);
      formData.append("lastName", lastNameForm);
      formData.append("email", emailForm);
      formData.append("program", programForm);
      formData.append("matricNumber", matricNumberForm);
      formData.append("graduationYear", graduationYearForm);
      formData.append("profilePicture", profilePicture);

      axios
        .put(`${url}user/profileupdate`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.success) {
            dispatch({ type: "SUCCESS", payload: res.data.message });
            setTimeout(() => {
              navigate("/");
            }, 5000);
          } else {
            dispatch({
              type: "USER_UNAUTHETICATION",
              payload: res.data.message,
            });
          }
        });
    }
  };

  useEffect(() => {
    fetch(`${url}user/profiledetails/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setDetails(res.data);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const { firstName, lastName, email, matricNumber, program, graduationYear } =
    details;

  return (
    <Container>
      <Row as="section" className="mb-4">
        <h1 className="text-primary">
          {`${firstName} ${lastName}`}
          <span className="fs-5 fst-normal ms-3"> {email} </span>
        </h1>
      </Row>
      <Row className="bg-light text-primary mb-4" as="section">
        <Col md="4">
          <h6>Program</h6>
          <h6>
            {program === "Select Option" || program === undefined
              ? "None selected"
              : `${program}`}
          </h6>
        </Col>
        <Col md="4">
          <h6>Matriculation Number</h6>
          <h6>{`${matricNumber}`}</h6>
        </Col>
        <Col md="4">
          <h6>Graduation Year</h6>
          <h6>
            {graduationYear === "Select Option" || graduationYear === undefined
              ? "None selected"
              : `${graduationYear}`}
          </h6>
        </Col>
      </Row>
      <Row className="border-bottom text-primary mb-5" as="section">
        <h4>Update Profile</h4>
      </Row>
      <div className="mx-auto mb-4" style={{ width: 70 + "%" }}>
        <Form onSubmit={handleProfileChange} encType="multipart/form-data">
          {
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
          }
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstNameForm}
                onChange={(e) => setFirstNameForm(e.target.value)}
                // defaultValue={firstName}
                // onClick={(e) => setFirstNameForm(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastNameForm}
                onChange={(e) => setLastNameForm(e.target.value)}
                // defaultValue={lastName}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={emailForm}
                onChange={(e) => setEmailForm(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Program</Form.Label>
              <Form.Select
                as="select"
                name="program"
                value={programForm}
                onChange={(e) => setProgramForm(e.target.value)}
              >
                <option>Select Option</option>
                {programs.map((prog) => (
                  <option key={prog} selected={prog === program ? true : false}>
                    {prog}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Matric Number</Form.Label>
              <Form.Control
                name="matricNumber"
                value={matricNumberForm}
                onChange={(e) => setMatricNumberForm(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Graduation Year</Form.Label>
              <Form.Select
                as="select"
                name="graduationYear"
                value={graduationYearForm}
                onChange={(e) => setGraduationYearForm(e.target.value)}
              >
                <option>Select Option</option>
                {graduationYears.map((year) => (
                  <option
                    key={year}
                    selected={year === graduationYear ? true : false}
                  >
                    {year}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setprofilePicture(e.target.files[0])}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </div>

      <Row className="border-bottom text-primary mb-4" as="section">
        <h4>Change Password</h4>
      </Row>

      <div className="mx-auto" style={{ width: 70 + "%" }}>
        <Form onSubmit={handlePasswordChange}>
          {
            <Alert
              className={state1.alertClass}
              variant={state1.alertVariant}
              show={state1.showAlert}
            >
              {state1.errMsg.map((text) => {
                return (
                  <>
                    <small key={text}>{text}</small>
                    <br />
                  </>
                );
              })}
            </Alert>
          }

          <Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                placeholder="Your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button variant="primary mt-3" type="submit">
            Change Password
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ProfileDetails;

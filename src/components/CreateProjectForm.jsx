import React, { useReducer, useState, useContext } from "react";
import { url } from "../auth";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { reducer } from "../reducers/createProjectReducer";
import { AuthContext } from "../App";

const initialState = {
  showAlert: false,
  errMsg: [],
  alertVariant: "danger",
  alertClass: "alert alert-danger",
};

const CreateProjectForm = () => {
  const [name, setName] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REFRESH" });
    if (name === "") {
      dispatch({ type: "NO_NAME_VALUE" });
    }
    if (abstract === "") {
      dispatch({ type: "NO_ABSTRACT_VALUE" });
    }
    if (author === "") {
      dispatch({ type: "NO_AUTHOR_VALUE" });
    }
    if (tags === "") {
      dispatch({ type: "NO_TAG_VALUE" });
    }

    let authors = author.split(",");
    let tagss = tags.split("#").filter((tag) => tag !== "");

    if (!(name === "" || abstract === "" || author === "" || tags === "")) {
      fetch(`${url}project/create`, {
        method: "POST",
        body: JSON.stringify({
          name,
          abstract,
          authors,
          tags: tagss,
          createdBy: user._id,
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
              payload: res.data,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="mx-auto w-50 p-3 mw-70">
        <h2 className="text-primary mb-4">Submit Project</h2>
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
              Project Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter project name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="fw-bold text-primary">
              Project Abstract
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="abstract"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="fw-bold text-primary">Author(s)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author names (seperated by comma)"
              name="authors"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold text-primary">Tag(s)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Use # to seperate projects with different topics (e.g #javascript #mongodb) "
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Continue
          </Button>
        </Form>
        <br />
      </div>
    </>
  );
};

export default CreateProjectForm;

import React, { useReducer } from "react";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { reducer } from "../reducers/createProjectReducer";
import Layout from "./shared/Layout";

const initialState = {
  showAlert: false,
  errMsg: [],
  alertVariant: "danger",
  alertClass: "alert alert-danger",
};

const CreateProjectForm = ({ err }) => {
  // let showAlert = false;
  // err.length > 0 ? (showAlert = true) : (showAlert = false);
  const [name, setName] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="mx-auto w-50 p-3 mw-70">
        <h2 className="text-primary mb-4">Submit Project</h2>
        <Form>
          {/* <Alert
            className="alert alert-danger"
            variant="danger"
            show={showAlert}
          >
            {err.map((text) => {
              return (
                <>
                  {text}
                  <br />
                </>
              );
            })}
          </Alert> */}
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
const CreateProject = (props) => {
  return (
    <Layout us={props.us}>
      <CreateProjectForm {...props} />
    </Layout>
  );
};

export default CreateProject;

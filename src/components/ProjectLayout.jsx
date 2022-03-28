import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Image,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProjectLayout = () => {
  const [project, setProject] = useState({});
  const [createdBy, setCreatedBy] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/project/getProject", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setProject(res.data);
          fetch(
            `http://localhost:4000/user/profiledetails/${res.data.createdBy}`
          )
            .then((res) => res.json())
            .then((res) => setCreatedBy(res.data))
            .catch((err) => console.log(err));
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const { abstract, authors, name, tags } = project;

  return (
    <Container>
      <Row className="mb-3">
        <h1 className="text-primary">{name}</h1>
      </Row>
      <Row className="bg-light mb-3 text-primary">
        <Col md="1">
          <Image
            src={createdBy.profilePicture}
            roundedCircle
            style={{ height: 50 + "px", width: 50 + "px" }}
          />
        </Col>
        <Col id="project_author" md="3">
          <h6>Created By</h6>
          <h6>{`${createdBy.firstName} ${createdBy.lastName}`}</h6>
        </Col>

        <Col md="3">
          <h6>Date Created</h6>
          <h6>{new Date(createdBy.createdAt).toLocaleDateString()}</h6>
        </Col>

        <Col md="3">
          <h6>Last Updated</h6>
          <h6>{new Date(createdBy.updatedAt).toLocaleDateString()}</h6>
        </Col>

        <Col md="2">
          <div className="col-sm">
            <div className="d-flex justify-content-end">
              <button href="#" className=" btn btn-primary disabled">
                Edit Project
              </button>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="text-primary">
        <Col>
          <div>
            <h5>Project Abstract</h5>
            <p>{abstract}</p>
          </div>
          <div className="mx-auto ">
            <b>Comments</b>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Leave a comment"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="disabled">
                Submit
              </Button>
            </Form>
          </div>
        </Col>

        <Col>
          <h5>Project Details</h5>

          <Card className="text-center">
            <Card.Header>
              <b>Author(s)</b>
            </Card.Header>
            <Card.Body>
              {/* {authors.map((auz) => {
                return (
                  <>
                    <Card.Text key={auz}>{auz}</Card.Text>
                  </>
                );
              })} */}
            </Card.Body>
            <Card.Footer className="text-muted" id="project_tags">
              <b>
                {/* {tags.map((auz) => {
                  return (
                    <>
                      <Card.Text key={auz}>{auz}</Card.Text>
                    </>
                  );
                })} */}
              </b>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Header className="text-center">
              <b>Project files</b>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>No file uploaded yet</p>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectLayout;

import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchLayoutBar = () => {
  return (
    <div className="mx-auto w-75 ">
      <h1 className="text-primary mb-4 mt-4">Project Gallery</h1>
      <Form className="bg-light p-3">
        <Row className="align-items-center">
          <Col className="col-7">
            <Form.Control placeholder="Search project name, authors, abstarct, tags" />
          </Col>
          <Col>
            <Button variant="outline-secondary">Search By</Button>
          </Col>
          <Col>
            <Form.Select aria-label="Search Options">
              <option value="name">Name</option>
              <option value="abstract">Abstract</option>
              <option value="authors">Authors</option>
              <option value="tags">Tags</option>
            </Form.Select>
          </Col>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchLayoutBar;

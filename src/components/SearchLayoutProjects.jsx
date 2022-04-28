import React from "react";
import { Card, CardGroup, Pagination } from "react-bootstrap";
import { projects } from "../assets/mockData";

const SearchLayoutProjects = () => {
  return (
    <>
      <section className="container mt-4 mb-5">
        <h5 className=" text-primary mb-3">
          All projects <span>(0 results)</span>
        </h5>
        <CardGroup className="showcase mx-5">
          {projects.map((project) => {
            const { abstract, authors, _id, name, tags } = project;

            return (
              <Card
                key={_id}
                border="primary"
                style={{ maxWidth: "18rem" }}
                className="mx-3"
              >
                <Card.Body>
                  <Card.Title>
                    <Card.Link href={`/project/${_id}`}>{name}</Card.Link>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {authors}
                  </Card.Subtitle>
                  <Card.Text>{abstract.substring(0, 100)}...</Card.Text>
                  <Card.Link href="#">{tags}</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </section>

      <div className="container d-flex justify-content-center">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>

          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
};

export default SearchLayoutProjects;

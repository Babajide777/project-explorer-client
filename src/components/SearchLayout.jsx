import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { url } from "../auth";
import { Card, CardGroup, Pagination } from "react-bootstrap";

const SearchLayout = () => {
  const searchTerm = useRef(null);
  const searchType = useRef(null);
  const [searchPages, setSearchPages] = useState(0);
  const [totalSearchCount, setTotalSearchCount] = useState(0);
  const [returnedSearchResult, setReturnedSearchResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${url}project/search/?searchterm=${searchTerm.current.value}&searchtype=${searchType.current.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setReturnedSearchResult(res.data.returnedSearchResult);
          setTotalSearchCount(res.data.totalSearchCount);
          setSearchPages(res.data.searchPages);
        } else {
          setReturnedSearchResult([]);
          setSearchPages(0);
          setTotalSearchCount(0);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="mx-auto w-75 ">
        <h1 className="text-primary mb-4 mt-4">Project Gallery</h1>
        <Form className="bg-light p-3">
          <Row className="align-items-center">
            <Col className="col-7">
              <Form.Control
                placeholder="Search project name, authors, abstarct, tags"
                ref={searchTerm}
              />
            </Col>
            <Col>
              <Button variant="outline-secondary">Search By</Button>
            </Col>
            <Col>
              <Form.Select aria-label="Search Options" ref={searchType}>
                <option value="name">Name</option>
                <option value="abstract">Abstract</option>
                <option value="authors">Authors</option>
                <option value="tags">Tags</option>
              </Form.Select>
            </Col>
            <Col>
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      <section className="container mt-4 mb-5">
        <h5 className=" text-primary mb-3">
          All projects <span>({totalSearchCount} results)</span>
        </h5>
        <CardGroup className="showcase mx-5">
          {returnedSearchResult.map((project) => {
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
          {/* <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>

          <Pagination.Item>{5}</Pagination.Item> */}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
};

export default SearchLayout;
